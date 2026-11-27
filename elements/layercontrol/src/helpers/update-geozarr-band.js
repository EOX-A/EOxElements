import {
  computeStep,
  resolveRangeDefaults,
  buildMinMaxProperties,
  applyMinMaxToSchemaProperties,
  applyLayerStyleVariables,
  buildDimensionProperty,
} from "@eox/elements-utils";

export { computeStep, buildMinMaxProperties };

/**
 * Resolves the target min and max range for a given GeoZarr band.
 * Uses 'valid_range' from layer's _geozarrVariables if available,
 * otherwise falls back to defaults 0/1.
 *
 * @param {import("ol/layer/Base").default|any} layer
 * @param {string} band
 * @param {any} [_layerConfig]
 * @returns {{ targetMin: number, targetMax: number }}
 */
export function getGeoZarrBandRange(layer, band, _layerConfig) {
  const geozarrVars = layer?.get
    ? layer.get("_geozarrVariables")
    : layer?._geozarrVariables;
  const varMeta = geozarrVars?.[band];
  const { min, max } = resolveRangeDefaults(
    varMeta?.valid_range,
    varMeta?.visualization_range,
  );

  return {
    targetMin: min,
    targetMax: max,
  };
}

/**
 * Updates the active band on a GeoZarr layer, updating its source,
 * updating bands and min/max style variables and layerConfig from valid_range (or fallback to defaults),
 * and updating layerDatetime / timeControlValues.
 *
 * @param {import("ol/layer/Base").default|any} layer
 * @param {string} newBand
 * @returns {Promise<{ targetMin: number, targetMax: number } | undefined>}
 */
export async function updateGeoZarrBand(layer, newBand) {
  if (!layer || !newBand) return undefined;

  const source = /** @type {any} */ (
    layer.getSource ? layer.getSource() : null
  );
  const sourceUrl =
    layer.get("_geozarrSourceUrl") ||
    layer.get("_jsonDefinition")?.source?.url ||
    layer.get("source")?.url ||
    layer.get("_geozarrRootUrl");

  // 1. Re-create or update GeoZarr source with the newly selected band
  let updatedSource = source;
  if (source) {
    if (typeof source.setBands === "function") {
      source.setBands([newBand]);
    } else if (sourceUrl && source.constructor) {
      const GeoZarrClass = /** @type {any} */ (source.constructor);
      const proj =
        source.getProjection?.() ||
        layer.get("_mapProjection") ||
        layer.get("_jsonDefinition")?.source?.projection;
      const newSource = new GeoZarrClass({
        url: sourceUrl,
        bands: [newBand],
        crossOrigin: "anonymous",
        ...(proj ? { projection: proj } : {}),
      });
      layer.setSource(newSource);
      updatedSource = newSource;
    }
  }

  if (typeof updatedSource?.ready === "function") {
    try {
      await updatedSource.ready();
    } catch {
      // ignore
    }
  }

  layer.set("_lastVariable", newBand);
  const existingBands =
    layer.get("bands") ||
    (Array.isArray(layer.get("_jsonDefinition")?.source?.bands)
      ? layer.get("_jsonDefinition")?.source?.bands
      : null);
  const resolvedBands =
    Array.isArray(existingBands) && existingBands.length > 1
      ? existingBands
      : [newBand];
  if (layer.get("bands") !== undefined) {
    layer.set("bands", resolvedBands);
  }
  if (layer.get("band") !== undefined) {
    layer.set("band", newBand);
  }

  // 2. Resolve target min / max from valid_range or defaults
  const layerConfig = layer.get("layerConfig");
  const { targetMin, targetMax } = getGeoZarrBandRange(
    layer,
    newBand,
    layerConfig,
  );
  const geozarrVars = layer?.get
    ? layer.get("_geozarrVariables")
    : layer?._geozarrVariables;
  const varMeta = geozarrVars?.[newBand];
  const boundsRange = varMeta?.valid_range ?? varMeta?.visualization_range;

  // 3. Update style variables on layer before setting layerConfig,
  // so any propertychange listeners reading styleVariables_ / getStartVals see the updated variable/ranges.
  const isAutofill =
    layerConfig?.autofill === true || layerConfig?.schema?.autofill === true;
  const hasMinMaxStyle =
    isAutofill ||
    layer.styleVariables_?.min !== undefined ||
    layer.styleVariables_?.max !== undefined ||
    layer.style_?.variables?.min !== undefined ||
    layer.style_?.variables?.max !== undefined ||
    layer.get?.("style")?.variables?.min !== undefined ||
    layer.get?.("style")?.variables?.max !== undefined ||
    layerConfig?.schema?.properties?.min !== undefined ||
    layerConfig?.schema?.properties?.max !== undefined;

  applyLayerStyleVariables(layer, {
    variable: newBand,
    ...(hasMinMaxStyle ? { min: targetMin, max: targetMax } : {}),
  });

  // 4. Update layerConfig (bands, min, max)
  let updatedLayerConfig = layerConfig;
  if (layerConfig) {
    let props = undefined;
    if (layerConfig.schema?.properties) {
      props = { ...layerConfig.schema.properties };
      if (props.variable) {
        props.variable = { ...props.variable, default: newBand };
      }
      if (props.band) {
        props.band = { ...props.band, default: newBand };
      }
      if (props.bands) {
        props.bands = {
          ...props.bands,
          default:
            props.bands.type === "array" ? resolvedBands : resolvedBands[0],
        };
      }

      // Check if multi-channel configuration (e.g. redMax, greenMax, blueMax)
      const isMultiChannel =
        !!props.redMax || !!props.greenMax || !!props.blueMax;

      if (!isMultiChannel) {
        applyMinMaxToSchemaProperties(
          props,
          targetMin,
          targetMax,
          boundsRange,
          isAutofill,
          true,
        );
      }
    }

    updatedLayerConfig = {
      ...layerConfig,
      bands: resolvedBands,
      band: newBand,
      ...(isAutofill || layerConfig.min !== undefined
        ? { min: targetMin }
        : {}),
      ...(isAutofill || layerConfig.max !== undefined
        ? { max: targetMax }
        : {}),
      schema: props
        ? {
            ...layerConfig.schema,
            properties: props,
          }
        : layerConfig.schema,
    };

    layer.set("layerConfig", updatedLayerConfig);
  }

  // 5. Update dimensions (time and non-temporal extra dimensions)
  if (updatedSource && typeof updatedSource.getDimensions === "function") {
    try {
      const dimensions = await updatedSource.getDimensions();
      if (dimensions) {
        /** @type {Record<string, any>} */
        const nonTemporalDims = {};
        const prevDims = layer.get("_geozarrDimensions") || {};

        // Discover and inject non-temporal dimensions (depth, height, level, etc.)
        for (const [dimName, dimMeta] of Object.entries(dimensions)) {
          if (dimName === "time" || !dimMeta || dimMeta.size <= 0) continue;

          let coordinates =
            Array.isArray(prevDims[dimName]?.coordinates) &&
            prevDims[dimName].coordinates.length === dimMeta.size
              ? prevDims[dimName].coordinates
              : [];

          if (
            coordinates.length === 0 &&
            typeof updatedSource.getValue === "function"
          ) {
            coordinates = await Promise.all(
              [...Array(dimMeta.size).keys()].map(async (idx) => {
                try {
                  const val = await updatedSource.getValue(dimName, idx);
                  return typeof val === "bigint" ? Number(val) : val;
                } catch {
                  return idx;
                }
              }),
            );
          }

          const enrichedDimMeta = {
            ...dimMeta,
            coordinates,
          };
          nonTemporalDims[dimName] = enrichedDimMeta;

          const currentCfg = layer.get("layerConfig") || updatedLayerConfig;
          const isAutofill =
            currentCfg?.autofill === true ||
            currentCfg?.schema?.autofill === true;
          if (
            currentCfg?.schema?.properties &&
            (currentCfg.schema.properties[dimName] !== undefined || isAutofill)
          ) {
            const currentProps = { ...currentCfg.schema.properties };
            currentProps[dimName] = buildDimensionProperty(
              dimName,
              enrichedDimMeta,
            );
            updatedLayerConfig = {
              ...currentCfg,
              schema: {
                ...currentCfg.schema,
                properties: currentProps,
              },
            };
            layer.set("layerConfig", updatedLayerConfig);
          }

          if (typeof updatedSource.updateDimensions === "function") {
            updatedSource.updateDimensions({ [dimName]: 0 });
          }
        }

        // Remove stale dimension controls when switching from a 3D+ variable to a 2D variable
        const currentCfg = layer.get("layerConfig") || updatedLayerConfig;
        const isAutofillCfg =
          currentCfg?.autofill === true ||
          currentCfg?.schema?.autofill === true;
        if (isAutofillCfg && currentCfg?.schema?.properties) {
          const staleDims = Object.keys(prevDims).filter(
            (d) => !(d in nonTemporalDims) && d in currentCfg.schema.properties,
          );
          if (staleDims.length > 0) {
            const currentProps = { ...currentCfg.schema.properties };
            for (const staleDim of staleDims) {
              delete currentProps[staleDim];
            }
            updatedLayerConfig = {
              ...currentCfg,
              schema: {
                ...currentCfg.schema,
                properties: currentProps,
              },
            };
            layer.set("layerConfig", updatedLayerConfig);
          }
        }

        layer.set("_geozarrDimensions", nonTemporalDims);

        // Process time dimension
        if (dimensions?.time && dimensions.time.size > 0) {
          const timeDim = dimensions.time;
          const { units } = timeDim.attributes || {};
          let epoch = 0;
          let multiplier = 1000;
          if (units && typeof units === "string" && units.includes(" since ")) {
            const parts = units.split(" since ");
            let dateStr = parts[1].trim();
            if (!dateStr.includes("T") && !dateStr.includes("Z")) {
              dateStr = dateStr.replace(" ", "T") + "Z";
            }
            epoch = Date.parse(dateStr) || 0;
            const unitType = parts[0].toLowerCase();
            if (unitType.includes("day")) multiplier = 86400 * 1000;
            else if (unitType.includes("nanosecond")) multiplier = 1e-6;
            else if (unitType.includes("microsecond")) multiplier = 1e-3;
            else if (unitType.includes("millisecond")) multiplier = 1;
            else if (unitType.includes("second")) multiplier = 1000;
          }

          const toDate = (value) => {
            if (typeof value === "string") return new Date(value);
            return new Date(epoch + Number(value) * multiplier);
          };

          const slices = await Promise.all(
            [...Array(timeDim.size).keys()].map(async (index) => {
              const rawVal =
                typeof updatedSource.getValue === "function"
                  ? await updatedSource.getValue("time", index)
                  : index;
              return {
                index,
                date: toDate(rawVal),
              };
            }),
          );
          slices.sort((a, b) => a.date.getTime() - b.date.getTime());

          const sliceMap = {};
          const controlValues = slices.map((s) => {
            const iso = s.date.toISOString();
            sliceMap[iso] = s.index;
            return iso;
          });

          const currentDatetime = layer.get("layerDatetime") || {};
          const currentStep =
            currentDatetime.currentStep &&
            controlValues.includes(currentDatetime.currentStep)
              ? currentDatetime.currentStep
              : controlValues[0];

          layer.set("layerDatetime", {
            showUTC: true,
            slider: true,
            navigation: true,
            ...currentDatetime,
            controlValues,
            sliceMap,
            currentStep,
          });

          const timeControlValues = controlValues.map((date) => ({ date }));
          layer.set("timeControlValues", timeControlValues);

          const initialIndex = sliceMap[currentStep] ?? 0;
          if (typeof updatedSource.updateDimensions === "function") {
            updatedSource.updateDimensions({ time: initialIndex });
          }
        }
      }
    } catch (err) {
      console.warn("Could not refresh GeoZarr dimensions for new band:", err);
    }
  }

  return { targetMin, targetMax };
}
