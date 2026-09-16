/**
 * Helper module for multi-dimensional GeoZarr layer support in layercontrol.
 * Connects to zarr.json / GeoZarr dimensions to derive time steps, bands, and value ranges.
 */

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
    layer?.get?.("_jsonDefinition")?.source?.url ||
    layer?.get?.("source")?.url;
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
    layer?.get?.("_jsonDefinition")?.source?.url ||
    layer?.get?.("source")?.url;
  if (!url) return getGeoZarrRootUrl(layer);
  return url.replace(/\/zarr\.json$/, "").replace(/\/$/, "");
}

/**
 * Discovers bands from a GeoZarr dataset metadata or source.
 *
 * @param {import("ol/layer/Base").default|any} layer
 * @returns {Promise<string[]>}
 */
export async function fetchGeoZarrBands(layer) {
  const source = /** @type {any} */ (
    layer?.getSource ? layer.getSource() : null
  );
  const sourceBands =
    (typeof source?.getBands === "function" ? source.getBands() : null) ||
    source?.bands_ ||
    layer?.get?.("_lastVariable") ||
    layer?.get?.("_jsonDefinition")?.source?.bands ||
    layer?.get?.("source")?.bands;

  if (Array.isArray(sourceBands) && sourceBands.length > 0) {
    return sourceBands;
  }

  const rootUrl = getGeoZarrRootUrl(layer);
  const sourceUrl = getGeoZarrSourceUrl(layer);
  const targetUrl = sourceUrl || rootUrl;

  if (targetUrl) {
    try {
      const response = await fetch(`${targetUrl.replace(/\/$/, "")}/zarr.json`);
      if (response.ok) {
        const data = await response.json();
        const metadata =
          data.consolidated_metadata?.metadata || data.metadata || data;
        const bands = new Set();
        const ignoreNames = new Set([
          "spatial_ref",
          "crs",
          "time",
          "x",
          "y",
          "lat",
          "lon",
          "latitude",
          "longitude",
          "border_mask",
          "conditions",
        ]);

        for (const key of Object.keys(metadata)) {
          const parts = key.split("/");
          const varName = parts[parts.length - 1];
          if (
            varName &&
            !ignoreNames.has(varName) &&
            !/^\d+$/.test(varName) &&
            !varName.startsWith("r") &&
            (metadata[key].node_type === "array" ||
              metadata[key].shape !== undefined)
          ) {
            bands.add(varName);
          }
        }
        const result = Array.from(bands);
        if (result.length > 0) return result;
      }
    } catch (err) {
      console.warn("Could not fetch GeoZarr bands:", err);
    }
  }

  return [];
}

/**
 * Initializes and connects GeoZarr metadata (time, valid ranges, variable/bands) to layerDatetime and layerConfig.
 *
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

  if (layer.get("_geozarrInitialized")) return;
  layer.set("_geozarrInitialized", true);

  const targetUrl = sourceUrl || rootUrl;

  // 1. Check time dimension and populate slices
  /** @type {{ index: number, date: Date }[]} */
  let slices = [];
  if (typeof source.getDimensions === "function") {
    try {
      const dims = await source.getDimensions();
      const { time } = dims || {};
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

        const toDate = (value) => new Date(epoch + Number(value) * multiplier);

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
    } catch (err) {
      console.warn("Error retrieving GeoZarr dimensions from source:", err);
    }
  }

  // 2. Setup layerDatetime if time slices exist
  if (slices.length > 0) {
    const sliceMap = {};
    const controlValues = slices.map((s) => {
      const iso = s.date.toISOString();
      sliceMap[iso] = s.index;
      return iso;
    });

    const existingDatetime = layer.get("layerDatetime") || {};
    const layerDatetime = {
      showUTC: true,
      slider: true,
      navigation: true,
      currentStep: existingDatetime.currentStep || controlValues[0],
      controlValues,
      ...existingDatetime,
    };

    layer.set("_geozarrSliceMap", sliceMap);
    layer.set("layerDatetime", layerDatetime);
    layer.set(
      "timeControlValues",
      slices.map((s) => ({ date: s.date.toISOString() })),
    );

    const initialIndex = sliceMap[layerDatetime.currentStep] ?? 0;
    if (typeof source.updateDimensions === "function") {
      source.updateDimensions({ time: initialIndex });
    }
  }

  // 3. Setup layerConfig for min/max range and variable/bands if user did not provide layerConfig
  let min = 0;
  let max = 40;
  const layerAny = /** @type {any} */ (layer);
  const styleVars =
    layerAny.get?.("style")?.variables || layerAny.getStyle?.()?.variables;
  if (styleVars) {
    if (typeof styleVars.min === "number") min = styleVars.min;
    if (typeof styleVars.max === "number") max = styleVars.max;
  }
  if (min === max) {
    min -= 1;
    max += 1;
  }

  const existingConfig =
    layer.get("layerConfig") ||
    layer.get?.("_jsonDefinition")?.properties?.layerConfig;

  if (!existingConfig) {
    const minLimit = min < 0 ? min * 2 : 0;
    const maxLimit = max > 1 ? max * 2.5 : max > 0 ? max * 2.5 : 1;
    const stepVal = max <= 1 ? 0.01 : 1;

    const bands = await fetchGeoZarrBands(layer);

    /** @type {Record<string, any>} */
    const properties = {};

    if (bands.length > 0) {
      properties.variable = {
        type: "string",
        title: "Variable",
        enum: bands,
        default: bands[0],
      };
    }

    properties.min = {
      type: "number",
      title: "Min Value",
      default: min,
      minimum: minLimit,
      maximum: maxLimit,
      step: stepVal,
      format: "range",
    };

    properties.max = {
      type: "number",
      title: "Max Value",
      default: max,
      minimum: minLimit,
      maximum: maxLimit,
      step: stepVal,
      format: "range",
    };

    const layerConfig = {
      type: "style",
      style: true,
      schema: {
        type: "object",
        properties,
      },
    };
    layer.set("layerConfig", layerConfig);

    if (typeof layerAny.updateStyleVariables === "function") {
      const initVars = {
        ...(bands.length > 0 ? { variable: bands[0] } : {}),
        min,
        max,
      };
      layerAny.updateStyleVariables(initVars);
    }
  }

  layer.set("_geozarrSourceUrl", targetUrl);
  layer.set("_geozarrRootUrl", rootUrl);
}
