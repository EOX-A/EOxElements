/**
 * Helper module for multi-dimensional GeoZarr layer support.
 * Connects to zarr.json / GeoZarr dimensions to derive time steps and value ranges.
 */
import {
  computeStep,
  roundRangeBounds,
  buildMinMaxProperties,
  applyMinMaxToSchemaProperties,
  applyLayerStyleVariables,
  syncMinMaxFormValues,
  buildDimensionProperty,
} from "@eox/elements-utils";

export {
  computeStep,
  roundRangeBounds,
  buildMinMaxProperties,
  applyMinMaxToSchemaProperties,
  applyLayerStyleVariables,
  syncMinMaxFormValues,
};

/**
 * Checks whether a given OpenLayers layer is a GeoZarr layer.
 * @param {import("ol/layer/Base").default|any} layer
 * @returns {boolean}
 */
export function isGeoZarrLayer(layer) {
  if (!layer) return false;
  const source = /** @type {any} */ (
    layer.getSource ? layer.getSource() : null
  );
  const layerType = layer.get ? layer.get("type") : null;
  const sourceType = layer.get ? layer.get("source")?.type : null;
  const jsonSourceType = layer.get
    ? layer.get("_jsonDefinition")?.source?.type
    : null;

  if (
    layerType === "GeoZarr" ||
    sourceType === "GeoZarr" ||
    jsonSourceType === "GeoZarr"
  )
    return true;
  if (source) {
    if (source.constructor && source.constructor.name === "GeoZarr")
      return true;
    if (typeof source.getDimensions === "function") return true;
    const url = source.getUrl ? source.getUrl() : source.url || source.url_;
    if (typeof url === "string" && url.includes(".zarr")) return true;
  }
  return false;
}

/**
 * Gets the Zarr store root URL from a layer / source.
 * @param {import("ol/layer/Base").default|any} layer
 * @returns {string|null}
 */
export function getGeoZarrRootUrl(layer) {
  const source = /** @type {any} */ (layer?.getSource?.());
  let url =
    source?.getUrl?.() ||
    source?.url ||
    source?.url_ ||
    layer?.get("_jsonDefinition")?.source?.url ||
    layer?.get("source")?.url;
  if (!url) return null;
  if (url.includes(".zarr")) {
    return url.split(".zarr")[0] + ".zarr";
  }
  return url.replace(/\/zarr\.json$/, "").replace(/\/$/, "");
}

/**
 * Gets the specific GeoZarr group/source URL from a layer / source.
 * @param {import("ol/layer/Base").default|any} layer
 * @returns {string|null}
 */
export function getGeoZarrSourceUrl(layer) {
  const source = /** @type {any} */ (layer?.getSource?.());
  let url =
    source?.getUrl?.() ||
    source?.url ||
    source?.url_ ||
    layer?.get("_jsonDefinition")?.source?.url ||
    layer?.get("source")?.url;
  if (!url) return getGeoZarrRootUrl(layer);
  return url.replace(/\/zarr\.json$/, "").replace(/\/$/, "");
}

/**
 * Discovers variables and their valid ranges from GeoZarr consolidated metadata or zarr.json.
 * @param {import("ol/layer/Base").default|any} layer
 * @param {any} source
 * @param {string} [rootUrl]
 * @returns {Promise<Record<string, { name: string, valid_range?: [number, number], units?: string, description: string, dimensions?: string[] }>>}
 */
export async function discoverGeoZarrVariables(layer, source, rootUrl) {
  /** @type {Record<string, any>} */
  const variables = {};
  const coordNames = new Set([
    "x",
    "y",
    "xc",
    "yc",
    "time",
    "time_bnds",
    "lat",
    "lon",
    "latitude",
    "longitude",
    "lat_bnds",
    "lon_bnds",
    "depth",
    "depth_bnds",
    "height",
    "level",
    "elevation",
    "pressure",
    "spatial_ref",
    "crs",
    "bnds",
    "bounds",
    "border_mask",
    "conditions",
    "valid_mask",
  ]);

  if (typeof source?.ready === "function") {
    try {
      await source.ready();
    } catch {
      // ignore
    }
  }

  try {
    let metadata = { ...source?.consolidatedMetadata_ };
    if (rootUrl && Object.keys(metadata).length === 0) {
      try {
        let res = await fetch(`${rootUrl}/.zmetadata`);
        if (res.ok) {
          const json = await res.json();
          metadata = { ...(json.metadata || json), ...metadata };
        } else {
          res = await fetch(`${rootUrl}/zarr.json`);
          if (res.ok) {
            const json = await res.json();
            const z3Meta =
              json.consolidated_metadata?.metadata || json.metadata || json;
            metadata = { ...z3Meta, ...metadata };
          }
        }
      } catch {
        // ignore fetch error in offline/sandboxed environments
      }
    }

    if (metadata && Object.keys(metadata).length > 0) {
      for (const [key, val] of Object.entries(metadata)) {
        if (!val || typeof val !== "object") continue;
        if (
          val.node_type &&
          val.node_type !== "array" &&
          val.node_type !== "group"
        )
          continue;

        let varName;
        let attrs = /** @type {Record<string, any>} */ (val.attributes || {});

        if (key.endsWith("/.zattrs")) {
          const basePath = key.replace(/\/\.zattrs$/, "");
          const parts = basePath.split("/").filter(Boolean);
          const nonNumericParts = parts.filter((p) => !/^\d+$/.test(p));
          varName = nonNumericParts[nonNumericParts.length - 1];
          attrs = val;
        } else if (key.endsWith("/.zarray")) {
          const basePath = key.replace(/\/\.zarray$/, "");
          const parts = basePath.split("/").filter(Boolean);
          const nonNumericParts = parts.filter((p) => !/^\d+$/.test(p));
          varName = nonNumericParts[nonNumericParts.length - 1];
          const attrsKey = `${basePath}/.zattrs`;
          if (metadata[attrsKey]) {
            attrs = metadata[attrsKey];
          }
        } else if (key.endsWith("/zarr.json")) {
          const basePath = key.replace(/\/zarr\.json$/, "");
          const parts = basePath.split("/").filter(Boolean);
          const nonNumericParts = parts.filter((p) => !/^\d+$/.test(p));
          varName = nonNumericParts[nonNumericParts.length - 1];
          attrs = val.attributes || val;
        } else {
          const parts = key.split("/").filter(Boolean);
          const nonNumericParts = parts.filter((p) => !/^\d+$/.test(p));
          varName = nonNumericParts[nonNumericParts.length - 1];
        }

        if (!varName || coordNames.has(varName)) continue;
        if (/^\d+$/.test(varName)) continue;

        // Skip 1D or 0D coordinate arrays or arrays where dimension is purely itself (e.g., depth: [18] or ['depth'])
        const shape =
          val.shape ||
          metadata[`${varName}/.zarray`]?.shape ||
          metadata[varName]?.shape ||
          null;
        if (shape && Array.isArray(shape) && shape.length <= 1) continue;

        const dimensions =
          val.dimension_names ||
          attrs._ARRAY_DIMENSIONS ||
          metadata[`${varName}/.zattrs`]?._ARRAY_DIMENSIONS ||
          null;
        if (dimensions && Array.isArray(dimensions) && dimensions.length <= 1)
          continue;

        // If attrs doesn't have valid_range, try group-level .zattrs or metadata
        if (
          !attrs.valid_range &&
          !attrs.actual_range &&
          !attrs.valid_min_max &&
          (attrs.valid_min === undefined || attrs.valid_max === undefined)
        ) {
          const groupAttrs =
            metadata[`${varName}/.zattrs`] ||
            metadata[varName]?.attributes ||
            metadata[varName];
          if (groupAttrs && typeof groupAttrs === "object") {
            attrs = { ...groupAttrs, ...attrs };
          }
        }

        let validRange =
          attrs.valid_range || attrs.actual_range || attrs.valid_min_max;
        if (
          !validRange &&
          attrs.valid_min !== undefined &&
          attrs.valid_max !== undefined
        ) {
          validRange = [attrs.valid_min, attrs.valid_max];
        }
        if (typeof validRange === "string") {
          try {
            validRange = JSON.parse(validRange);
          } catch {
            const rangeParts = validRange.split(",").map(Number);
            if (
              rangeParts.length === 2 &&
              !Number.isNaN(rangeParts[0]) &&
              !Number.isNaN(rangeParts[1])
            ) {
              validRange = rangeParts;
            }
          }
        }
        if (
          Array.isArray(validRange) &&
          validRange.length === 2 &&
          !Number.isNaN(Number(validRange[0])) &&
          !Number.isNaN(Number(validRange[1]))
        ) {
          validRange = [Number(validRange[0]), Number(validRange[1])];
        } else {
          validRange = null;
        }

        const description =
          attrs.long_name ||
          attrs.standard_name ||
          attrs.description ||
          varName;
        const units = attrs.units || null;

        if (!variables[varName]) {
          variables[varName] = {
            name: varName,
            valid_range: validRange,
            units,
            description,
            dimensions,
          };
        } else {
          if (validRange && !variables[varName].valid_range) {
            variables[varName].valid_range = validRange;
          }
          if (units && !variables[varName].units) {
            variables[varName].units = units;
          }
          if (
            description !== varName &&
            variables[varName].description === varName
          ) {
            variables[varName].description = description;
          }
          if (dimensions && !variables[varName].dimensions) {
            variables[varName].dimensions = dimensions;
          }
        }
      }
    }
  } catch (err) {
    console.warn("Could not discover GeoZarr variables:", err);
  }

  layer.set("_geozarrVariables", variables);
  return variables;
}

/**
 * Queries and initializes non-spatial dimensions (time and arbitrary dimensions like depth, level).
 * @param {import("ol/layer/Base").default|any} layer
 * @param {any} source
 * @param {string} [_rootUrl]
 * @param {import("../layers").EoxSource<"GeoZarr">} [previousSource] - Source definition before the source was replaced
 * @returns {Promise<{ slices: { index: number, date: Date }[], nonTemporalDims: Record<string, any> }>}
 */
export async function setupGeoZarrDimensions(
  layer,
  source,
  _rootUrl,
  previousSource,
) {
  /** @type {{ index: number, date: Date }[]} */
  let slices = [];
  /** @type {Record<string, any>} */
  const nonTemporalDims = {};

  /** @type {import("../layers").EoxSource<"GeoZarr"> | undefined} */
  const newSource = layer.get("_jsonDefinition")?.source;
  const [previousBand] = previousSource?.bands ?? [];
  const [newBand] = newSource?.bands ?? [];
  const { sliceMap: currentSliceMap, currentStep } =
    layer.get("layerDatetime") || {};
  // a new source on the same store starts at the current slice, before its first tiles load
  const sourceTimeIndex =
    previousSource &&
    previousSource.url === newSource?.url &&
    (typeof previousBand === "object" && previousBand.group) ===
      (typeof newBand === "object" && newBand.group)
      ? currentSliceMap?.[currentStep]
      : undefined;
  if (sourceTimeIndex !== undefined) {
    source.updateDimensions({ time: sourceTimeIndex });
  }

  if (typeof source?.ready === "function") {
    try {
      await source.ready();
    } catch {
      // ignore
    }
  }

  if (typeof source?.getDimensions === "function") {
    try {
      const dims = await source.getDimensions();
      if (dims) {
        // 1. Time dimension
        const { time } = dims;
        if (time && time.size > 0) {
          const { units } = time.attributes || {};
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

          slices = await Promise.all(
            [...Array(time.size).keys()].map(async (index) => {
              const rawVal = await source.getValue("time", index);
              return {
                index,
                date: toDate(rawVal),
              };
            }),
          );
          slices.sort((a, b) => a.date.getTime() - b.date.getTime());
        }

        // 2. Non-temporal dimensions (e.g. depth, height, level, pressure, realization)
        for (const [dimName, dimInfo] of Object.entries(dims)) {
          if (dimName === "time" || !dimInfo || dimInfo.size <= 0) continue;
          /** @type {any[]} */
          let coordinates = [];
          if (typeof source.getValue === "function") {
            coordinates = await Promise.all(
              [...Array(dimInfo.size).keys()].map(async (idx) => {
                try {
                  const val = await source.getValue(dimName, idx);
                  return typeof val === "bigint" ? Number(val) : val;
                } catch {
                  return idx;
                }
              }),
            );
          }

          nonTemporalDims[dimName] = {
            name: dimName,
            size: dimInfo.size,
            attributes: dimInfo.attributes || {},
            coordinates,
          };

          // Apply initial slice 0 for this dimension
          if (typeof source.updateDimensions === "function") {
            source.updateDimensions({ [dimName]: 0 });
          }
        }
      }
    } catch (err) {
      console.warn("Error retrieving GeoZarr dimensions from source:", err);
    }
  }

  // Update layerDatetime and timeControlValues
  if (slices.length > 0) {
    const sliceMap = {};
    const controlValues = slices.map((s) => {
      const iso = s.date.toISOString();
      sliceMap[iso] = s.index;
      return iso;
    });

    // `false` opts the layer out of the time setup
    if (layer.get("layerDatetime") !== false) {
      const existingDatetime = layer.get("layerDatetime") || {};
      const layerDatetime = {
        showUTC: true,
        slider: true,
        navigation: true,
        ...existingDatetime,
        controlValues,
        sliceMap,
        currentStep:
          existingDatetime.currentStep &&
          controlValues.includes(existingDatetime.currentStep)
            ? existingDatetime.currentStep
            : controlValues[0],
      };

      layer.set("layerDatetime", layerDatetime);

      const initialIndex = sliceMap[layerDatetime.currentStep] ?? 0;
      if (
        initialIndex !== sourceTimeIndex &&
        typeof source?.updateDimensions === "function"
      ) {
        source.updateDimensions({ time: initialIndex });
      }
    }

    // a list set by the client, or `false`, stays as it is
    if (layer.get("timeControlValues") === undefined) {
      layer.set(
        "timeControlValues",
        slices.map((s) => ({ date: s.date.toISOString() })),
      );
    }
  }

  layer.set("_geozarrDimensions", nonTemporalDims);
  return { slices, nonTemporalDims };
}

// Range/schema helpers imported from @eox/elements-utils and re-exported above.

/**
 * Initializes and connects GeoZarr metadata (variables, time, non-temporal dimensions, valid ranges)
 * to layerDatetime and layerConfig.
 * @param {import("ol/layer/Base").default|any} layer
 * @returns {Promise<void>}
 */
export async function setupGeoZarrLayer(layer) {
  if (!isGeoZarrLayer(layer)) return;

  const rootUrl = getGeoZarrRootUrl(layer);
  const sourceUrl = getGeoZarrSourceUrl(layer);
  if (!rootUrl && !sourceUrl) return;

  const source = /** @type {any} */ (
    layer.getSource ? layer.getSource() : null
  );
  if (!source) return;

  if (typeof source.ready === "function") {
    try {
      await source.ready();
    } catch {
      // ignore
    }
  }

  if (layer.get("_geozarrInitialized")) return;
  layer.set("_geozarrInitialized", true);

  const targetUrl = sourceUrl || rootUrl;
  layer.set("_geozarrSourceUrl", targetUrl);
  layer.set("_geozarrRootUrl", rootUrl);

  // 1. Discover variables
  const variables = await discoverGeoZarrVariables(layer, source, rootUrl);

  // Determine current active band
  let bands =
    (typeof source.getBands === "function" ? source.getBands() : null) ||
    source.bands_ ||
    layer.get("_lastVariable") ||
    layer.get("_jsonDefinition")?.source?.bands ||
    layer.get("source")?.bands;
  let currentBand =
    Array.isArray(bands) && bands.length > 0
      ? bands[0]
      : typeof bands === "string"
        ? bands
        : null;

  const varKeys = Object.keys(variables);
  if (varKeys.length > 0 && (!currentBand || !variables[currentBand])) {
    currentBand = varKeys[0];
  }

  // If source is in error or doesn't match currentBand, recreate source with valid band
  let activeSource = source;
  const isSourceErrored =
    typeof source.getState === "function" && source.getState() === "error";
  const sourceBands =
    (typeof source.getBands === "function" ? source.getBands() : null) ||
    source.bands_ ||
    [];
  const needsNewSource =
    isSourceErrored ||
    (currentBand &&
      (!sourceBands.length || !sourceBands.includes(currentBand)));

  if (needsNewSource && targetUrl && source.constructor) {
    try {
      const GeoZarrClass = /** @type {any} */ (source.constructor);
      const proj =
        source.getProjection?.() ||
        layer.get("_mapProjection") ||
        layer.get("_jsonDefinition")?.source?.projection;
      const initialBands =
        Array.isArray(bands) && bands.length > 1
          ? bands
          : currentBand
            ? [currentBand]
            : [];
      const newSource = new GeoZarrClass({
        url: targetUrl,
        bands: initialBands,
        crossOrigin: "anonymous",
        ...(proj ? { projection: proj } : {}),
      });
      layer.setSource(newSource);
      activeSource = newSource;
    } catch (e) {
      console.warn(
        "Could not recreate GeoZarr source with band:",
        currentBand,
        e,
      );
    }
  }

  if (typeof activeSource.ready === "function") {
    try {
      await activeSource.ready();
    } catch {
      // ignore
    }
  }

  if (currentBand) {
    layer.set("_lastVariable", currentBand);
    layer.set("band", currentBand);
    const existingBands =
      layer.get("bands") ||
      (Array.isArray(bands) && bands.length > 1 ? bands : null);
    layer.set(
      "bands",
      Array.isArray(existingBands) && existingBands.length > 1
        ? existingBands
        : [currentBand],
    );
  }

  // 2. Discover dimensions (time + arbitrary non-temporal dimensions)
  const { nonTemporalDims } = await setupGeoZarrDimensions(
    layer,
    activeSource,
    rootUrl,
  );

  // 3. Resolve min / max range
  const layerAny = /** @type {any} */ (layer);
  let layerConfig =
    layer.get("layerConfig") ||
    layer.get("_jsonDefinition")?.properties?.layerConfig ||
    layer.get("_jsonDefinition")?.layerConfig;

  const styleVars =
    layerAny.styleVariables_ ||
    layerAny.style_?.variables ||
    layerAny.get?.("style")?.variables ||
    layerAny.getStyle?.()?.variables ||
    layer.get?.("_jsonDefinition")?.style?.variables;

  const activeVarMeta = currentBand ? variables[currentBand] : null;
  const validRange = activeVarMeta?.valid_range;

  let min = 0;
  let max = 1;

  if (
    Array.isArray(validRange) &&
    validRange.length === 2 &&
    typeof validRange[0] === "number" &&
    typeof validRange[1] === "number" &&
    !Number.isNaN(validRange[0]) &&
    !Number.isNaN(validRange[1])
  ) {
    [min, max] = roundRangeBounds([validRange[0], validRange[1]]);
  } else if (
    layerConfig?.min !== undefined &&
    typeof layerConfig.min === "number" &&
    layerConfig?.max !== undefined &&
    typeof layerConfig.max === "number"
  ) {
    min = layerConfig.min;
    max = layerConfig.max;
  } else if (styleVars) {
    if (typeof styleVars.min === "number") min = styleVars.min;
    if (typeof styleVars.max === "number") max = styleVars.max;
  }

  const { minProp, maxProp, hasValidRange } = buildMinMaxProperties(
    min,
    max,
    validRange,
  );

  const existingBands =
    layer.get("bands") ||
    (Array.isArray(bands) && bands.length > 1 ? bands : null);
  const resolvedBands =
    Array.isArray(existingBands) && existingBands.length > 1
      ? existingBands
      : currentBand
        ? [currentBand]
        : [];

  const isAutofill =
    layerConfig?.autofill === true || layerConfig?.schema?.autofill === true;

  if (!layerConfig) {
    layerConfig = {
      type: "style",
      style: true,
      autofill: true,
      ...(currentBand ? { bands: resolvedBands, band: currentBand } : {}),
      min,
      max,
    };
  } else {
    if (currentBand) {
      if (
        !layerConfig.bands ||
        (Array.isArray(layerConfig.bands) && layerConfig.bands.length === 0)
      ) {
        layerConfig.bands = resolvedBands;
      }
      if (!layerConfig.band) {
        layerConfig.band = currentBand;
      }
    }
    if (
      layerConfig.min === undefined &&
      (isAutofill || layerConfig.schema?.properties?.min !== undefined)
    ) {
      layerConfig.min = min;
    }
    if (
      layerConfig.max === undefined &&
      (isAutofill || layerConfig.schema?.properties?.max !== undefined)
    ) {
      layerConfig.max = max;
    }
  }

  const hasMinMaxStyle =
    isAutofill ||
    styleVars?.min !== undefined ||
    styleVars?.max !== undefined ||
    layerConfig?.schema?.properties?.min !== undefined ||
    layerConfig?.schema?.properties?.max !== undefined;

  // Update style variables before setting layerConfig so propertychange listeners read the resolved min/max
  if (hasMinMaxStyle) {
    applyLayerStyleVariables(layer, { min, max });
  }

  // 4. Setup layerConfig.schema only if the user has not defined one already
  if (!layerConfig?.schema) {
    /** @type {Record<string, any>} */
    const properties = {};

    // Variable selection control
    const varKeys = Object.keys(variables);
    if (varKeys.length > 0) {
      properties.variable = {
        type: "string",
        title: "Variable",
        default: currentBand || varKeys[0],
        enum: varKeys,
        options: {
          enum_titles: varKeys.map((k) => {
            const v = variables[k];
            return v.units && v.units !== "N/A"
              ? `${v.description} (${v.units})`
              : v.description;
          }),
        },
      };
    }

    // Non-temporal dimension controls (e.g. depth, height, level, pressure)
    if (nonTemporalDims) {
      for (const [dimName, dimMeta] of Object.entries(nonTemporalDims)) {
        properties[dimName] = buildDimensionProperty(dimName, dimMeta);
      }
    }

    if (hasValidRange) {
      properties.minmax = {
        type: "object",
        title: "Value Range",
        properties: {
          min: minProp,
          max: maxProp,
        },
        format: "minmax",
      };
    } else {
      properties.min = minProp;
      properties.max = maxProp;
    }

    layerConfig.schema = {
      type: "object",
      title: "Layer Settings",
      properties,
    };

    layer.set("layerConfig", { ...layerConfig });
  } else if (layerConfig) {
    if (layerConfig.schema?.properties) {
      const props = { ...layerConfig.schema.properties };
      if (props.variable && props.variable.default === undefined) {
        props.variable.default = currentBand;
      }
      if (props.band && props.band.default === undefined) {
        props.band.default = currentBand;
      }
      if (
        props.bands &&
        (props.bands.default === undefined ||
          (Array.isArray(props.bands.default) &&
            props.bands.default.length === 0))
      ) {
        props.bands.default = resolvedBands;
      }

      if (isAutofill && !props.variable && !props.band && !props.bands) {
        const varKeys = Object.keys(variables);
        if (varKeys.length > 0) {
          props.variable = {
            type: "string",
            title: "Variable",
            default: currentBand || varKeys[0],
            enum: varKeys,
            options: {
              enum_titles: varKeys.map((k) => {
                const v = variables[k];
                return v.units && v.units !== "N/A"
                  ? `${v.description} (${v.units})`
                  : v.description;
              }),
            },
          };
        }
      }

      applyMinMaxToSchemaProperties(props, min, max, validRange, isAutofill);

      if (nonTemporalDims) {
        for (const [dimName, dimMeta] of Object.entries(nonTemporalDims)) {
          if (props[dimName] !== undefined || isAutofill) {
            props[dimName] = {
              ...buildDimensionProperty(dimName, dimMeta),
              ...props[dimName],
            };
          }
        }
      }

      layerConfig.schema = {
        ...layerConfig.schema,
        properties: props,
      };
    }
    layer.set("layerConfig", { ...layerConfig });
  }
}
