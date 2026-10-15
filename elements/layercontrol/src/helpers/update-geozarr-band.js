/**
 * Computes an appropriate step for number/range inputs based on the range difference.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function computeStep(min, max) {
  const diff = Math.abs(max - min);
  if (diff === 0) return 0.01;
  if (diff <= 0.01) return 0.0001;
  if (diff <= 0.1) return 0.001;
  if (diff <= 1) return 0.01;
  if (diff <= 10) return 0.1;
  return 1;
}

/**
 * Builds schema property definitions for min and max controls based on valid_range.
 * If validRange is available, uses number inputs with native incrementing buttons (format: "number").
 * If no validRange is available, uses range sliders (format: "range").
 *
 * @param {number} [min]
 * @param {number} [max]
 * @param {number[] | null | undefined} [validRange]
 * @returns {{ minProp: Record<string, any>, maxProp: Record<string, any> }}
 */
export function buildMinMaxProperties(min, max, validRange) {
  const hasValidRange =
    Array.isArray(validRange) &&
    validRange.length === 2 &&
    typeof validRange[0] === "number" &&
    typeof validRange[1] === "number" &&
    !Number.isNaN(validRange[0]) &&
    !Number.isNaN(validRange[1]);

  if (hasValidRange) {
    const rangeMin = validRange[0];
    const rangeMax = validRange[1];
    const step = computeStep(rangeMin, rangeMax);
    const resolvedMin = min !== undefined ? min : rangeMin;
    const resolvedMax = max !== undefined ? max : rangeMax;
    return {
      minProp: {
        type: "number",
        format: "number",
        title: "Min Value",
        default: resolvedMin,
        minimum: rangeMin,
        maximum: rangeMax,
        step,
      },
      maxProp: {
        type: "number",
        format: "number",
        title: "Max Value",
        default: resolvedMax,
        minimum: rangeMin,
        maximum: rangeMax,
        step,
      },
    };
  }

  const resolvedMin = min !== undefined ? min : 0;
  const resolvedMax = max !== undefined ? max : 1;
  const sliderMin = typeof min === "number" ? Math.min(0, min) : 0;
  const sliderMax =
    typeof max === "number" && max > sliderMin ? max : sliderMin + 1;
  const step = computeStep(sliderMin, sliderMax);
  return {
    minProp: {
      type: "number",
      format: "range",
      title: "Min Value",
      default: resolvedMin,
      minimum: sliderMin,
      maximum: sliderMax,
      step,
    },
    maxProp: {
      type: "number",
      format: "range",
      title: "Max Value",
      default: resolvedMax,
      minimum: sliderMin,
      maximum: sliderMax,
      step,
    },
  };
}

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
  const validRange = varMeta?.valid_range;

  let targetMin = undefined;
  let targetMax = undefined;
  if (
    Array.isArray(validRange) &&
    validRange.length === 2 &&
    typeof validRange[0] === "number" &&
    typeof validRange[1] === "number" &&
    !Number.isNaN(validRange[0]) &&
    !Number.isNaN(validRange[1])
  ) {
    targetMin = validRange[0];
    targetMax = validRange[1];
  }

  return {
    targetMin: targetMin !== undefined ? targetMin : 0,
    targetMax: targetMax !== undefined ? targetMax : 1,
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
  const validRange = geozarrVars?.[newBand]?.valid_range;
  const { minProp, maxProp } = buildMinMaxProperties(
    targetMin,
    targetMax,
    validRange,
  );

  // 3. Update layerConfig (bands, min, max)
  let updatedLayerConfig = layerConfig;
  if (layerConfig) {
    const isAutofill =
      layerConfig?.autofill === true || layerConfig?.schema?.autofill === true;
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
        if (props.min !== undefined || isAutofill) {
          props.min = {
            ...(props.min || {}),
            ...minProp,
            default: targetMin,
          };
        }
        if (props.max !== undefined || isAutofill) {
          props.max = {
            ...(props.max || {}),
            ...maxProp,
            default: targetMax,
          };
        }
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

  // 4. Update style variables on layer
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

  if (hasMinMaxStyle) {
    if (typeof layer.updateStyleVariables === "function") {
      layer.updateStyleVariables({ min: targetMin, max: targetMax });
    }
    if (layer.styleVariables_) {
      layer.styleVariables_.min = targetMin;
      layer.styleVariables_.max = targetMax;
    }
    if (layer.style_?.variables) {
      layer.style_.variables.min = targetMin;
      layer.style_.variables.max = targetMax;
    }
    const styleObj = layer.get?.("style");
    if (styleObj?.variables) {
      styleObj.variables.min = targetMin;
      styleObj.variables.max = targetMax;
    }
  }

  // 5. Update dimensions (time and non-temporal extra dimensions)
  if (updatedSource && typeof updatedSource.getDimensions === "function") {
    try {
      const dimensions = await updatedSource.getDimensions();
      if (dimensions) {
        /** @type {Record<string, any>} */
        const nonTemporalDims = {};

        // Discover and inject non-temporal dimensions (depth, height, level, etc.)
        for (const [dimName, dimMeta] of Object.entries(dimensions)) {
          if (dimName === "time" || !dimMeta || dimMeta.size <= 0) continue;
          nonTemporalDims[dimName] = dimMeta;

          const currentCfg = layer.get("layerConfig") || updatedLayerConfig;
          const isAutofill =
            currentCfg?.autofill === true ||
            currentCfg?.schema?.autofill === true;
          if (
            currentCfg?.schema?.properties &&
            (currentCfg.schema.properties[dimName] !== undefined || isAutofill)
          ) {
            const title =
              dimMeta.attributes?.long_name ||
              dimName.charAt(0).toUpperCase() + dimName.slice(1);
            const units = dimMeta.attributes?.units;
            const displayTitle = units ? `${title} (${units})` : title;

            const currentProps = { ...currentCfg.schema.properties };
            currentProps[dimName] = {
              type: "integer",
              title: displayTitle,
              default: 0,
              minimum: 0,
              maximum: dimMeta.size - 1,
              step: 1,
              format: "range",
              ...(currentProps[dimName] || {}),
            };
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
