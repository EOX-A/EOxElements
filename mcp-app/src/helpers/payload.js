import {
  DEFAULT_EOX_BASEMAP_LAYER,
  EOX_A2UI_CATALOG_URL,
  MCP_APP_MODES,
} from "../enums/index.js";

const MERCATOR_RADIUS = 6378137;
const MAX_MERCATOR_LAT = 85.05112878;

/**
 * Clone plain JSON-compatible values safely.
 *
 * @template T
 * @param {T} val
 * @returns {T}
 */
function cloneValue(val) {
  if (val === null || typeof val !== "object") return val;
  try {
    return JSON.parse(JSON.stringify(val));
  } catch {
    return val;
  }
}

/**
 * Convert `[lon, lat]` in EPSG:4326 to Web Mercator `[x, y]` (EPSG:3857).
 *
 * @param {number} lon
 * @param {number} lat
 * @returns {[number, number]}
 */
function lonLatToMercator(lon, lat) {
  const clampedLat = Math.max(
    -MAX_MERCATOR_LAT,
    Math.min(MAX_MERCATOR_LAT, lat),
  );
  const x = (lon * MERCATOR_RADIUS * Math.PI) / 180;
  const y =
    MERCATOR_RADIUS *
    Math.log(Math.tan(Math.PI / 4 + (clampedLat * Math.PI) / 360));
  return [x, y];
}

/**
 * Check whether a 4-element extent looks like EPSG:4326 `[minLon, minLat, maxLon, maxLat]`.
 *
 * @param {number[]} extent
 * @returns {boolean}
 */
function isLonLatExtent(extent) {
  return (
    Array.isArray(extent) &&
    extent.length === 4 &&
    extent.every((n) => typeof n === "number" && Number.isFinite(n)) &&
    extent[0] >= -180 &&
    extent[0] <= 180 &&
    extent[2] >= -180 &&
    extent[2] <= 180 &&
    extent[1] >= -90 &&
    extent[1] <= 90 &&
    extent[3] >= -90 &&
    extent[3] <= 90
  );
}

/**
 * Convert an EPSG:4326 extent `[minLon, minLat, maxLon, maxLat]` to EPSG:3857.
 *
 * @param {number[]} extent
 * @returns {number[]}
 */
export function lonLatExtentToMercator(extent) {
  if (!Array.isArray(extent) || extent.length !== 4) return extent;
  const [minX, minY] = lonLatToMercator(extent[0], extent[1]);
  const [maxX, maxY] = lonLatToMercator(extent[2], extent[3]);
  return [minX, minY, maxX, maxY];
}

/**
 * Extract structured payload data from an MCP tool result notification or raw payload.
 *
 * @param {unknown} input
 * @returns {unknown}
 */
export function extractStructuredContent(input) {
  if (!input || typeof input !== "object") return input;
  const obj = /** @type {Record<string, unknown>} */ (input);

  if (obj.structuredContent !== undefined && obj.structuredContent !== null) {
    return obj.structuredContent;
  }

  if (Array.isArray(obj.content)) {
    for (const block of obj.content) {
      if (
        block &&
        typeof block === "object" &&
        block.type === "text" &&
        typeof block.text === "string"
      ) {
        const trimmed = block.text.trim();
        if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
          try {
            return JSON.parse(trimmed);
          } catch {
            // Non-JSON text content; continue searching
          }
        }
      }
    }
    return undefined;
  }

  return input;
}

/**
 * Check if an object looks like an A2UI v0.9 stream message.
 *
 * @param {unknown} item
 * @returns {boolean}
 */
function isA2uiStreamMessage(item) {
  if (!item || typeof item !== "object" || Array.isArray(item)) return false;
  return (
    "createSurface" in item ||
    "updateComponents" in item ||
    "updateDataModel" in item ||
    "deleteSurface" in item
  );
}

/**
 * Check if an object looks like a standalone Vega-Lite specification.
 *
 * @param {Record<string, unknown>} obj
 * @returns {boolean}
 */
function isDirectVegaLiteSpec(obj) {
  if (typeof obj.$schema === "string" && obj.$schema.includes("vega")) {
    return true;
  }
  if ("mark" in obj && ("encoding" in obj || "data" in obj)) {
    return true;
  }
  return false;
}

/**
 * Determine which EOxElements rendering mode matches a `structuredContent` payload.
 *
 * @param {unknown} payload
 * @returns {import("../types.ts").EoxMcpAppMode}
 */
export function detectPayloadMode(payload) {
  if (!payload || typeof payload !== "object") {
    return MCP_APP_MODES.EMPTY;
  }

  if (Array.isArray(payload)) {
    return payload.length > 0 ? MCP_APP_MODES.A2UI : MCP_APP_MODES.EMPTY;
  }

  const obj = /** @type {Record<string, unknown>} */ (payload);

  if (
    Array.isArray(obj.stream) ||
    Array.isArray(obj.messages) ||
    Array.isArray(obj.components) ||
    (obj.a2ui && typeof obj.a2ui === "object")
  ) {
    return MCP_APP_MODES.A2UI;
  }

  if (
    obj.vega_lite_spec !== undefined ||
    obj.vegaLiteSpec !== undefined ||
    obj.spec !== undefined ||
    isDirectVegaLiteSpec(obj)
  ) {
    return MCP_APP_MODES.CHART;
  }

  const configObj =
    obj.config && typeof obj.config === "object"
      ? /** @type {Record<string, unknown>} */ (obj.config)
      : undefined;

  if (
    Array.isArray(obj.layers) ||
    obj.tile_url !== undefined ||
    obj.tileUrl !== undefined ||
    obj.bbox !== undefined ||
    obj.zoomExtent !== undefined ||
    obj.center !== undefined ||
    obj.zoom !== undefined ||
    obj.geojson !== undefined ||
    obj.mapConfig !== undefined ||
    (configObj && Array.isArray(configObj.layers))
  ) {
    return MCP_APP_MODES.MAP;
  }

  return MCP_APP_MODES.EMPTY;
}

/**
 * Normalize an A2UI stream, messages array, or shorthand `components` payload
 * into a standard A2UI v0.9 message stream array.
 *
 * @param {unknown} payload
 * @returns {Array<Record<string, unknown>>}
 */
export function normalizeA2uiStream(payload) {
  if (!payload) return [];

  if (Array.isArray(payload)) {
    if (payload.length === 0) return [];
    if (payload.some(isA2uiStreamMessage)) {
      return cloneValue(payload);
    }
    const surfaceId = "mcp_app_surface";
    return [
      {
        createSurface: {
          surfaceId,
          catalogId: EOX_A2UI_CATALOG_URL,
          sendDataModel: true,
        },
      },
      {
        updateComponents: {
          surfaceId,
          components: cloneValue(payload),
        },
      },
    ];
  }

  if (typeof payload !== "object") return [];
  const obj = /** @type {Record<string, unknown>} */ (payload);

  if (obj.a2ui && typeof obj.a2ui === "object") {
    return normalizeA2uiStream(obj.a2ui);
  }
  if (Array.isArray(obj.stream)) {
    return cloneValue(obj.stream);
  }
  if (Array.isArray(obj.messages)) {
    return cloneValue(obj.messages);
  }
  if (Array.isArray(obj.components)) {
    const surfaceId =
      typeof obj.surfaceId === "string" && obj.surfaceId
        ? obj.surfaceId
        : "mcp_app_surface";
    const catalogId =
      typeof obj.catalogId === "string" && obj.catalogId
        ? obj.catalogId
        : EOX_A2UI_CATALOG_URL;
    const sendDataModel =
      typeof obj.sendDataModel === "boolean" ? obj.sendDataModel : true;

    /** @type {Array<Record<string, unknown>>} */
    const stream = [
      {
        createSurface: {
          surfaceId,
          catalogId,
          sendDataModel,
        },
      },
      {
        updateComponents: {
          surfaceId,
          components: cloneValue(obj.components),
        },
      },
    ];

    if (obj.dataModel && typeof obj.dataModel === "object") {
      stream.push({
        updateDataModel: {
          surfaceId,
          value: cloneValue(obj.dataModel),
        },
      });
    }

    return stream;
  }

  return [];
}

/**
 * Normalize a Vega-Lite chart payload into `{ spec, dataValues, opt }` for `<eox-chart>`.
 *
 * @param {Record<string, unknown>} payload
 * @returns {import("../types.ts").NormalizedChartPayload}
 */
export function normalizeChartPayload(payload) {
  const rawSpec =
    payload.vega_lite_spec ??
    payload.vegaLiteSpec ??
    payload.spec ??
    (isDirectVegaLiteSpec(payload) ? payload : {});

  const spec =
    typeof rawSpec === "string"
      ? rawSpec
      : cloneValue(/** @type {Record<string, unknown>} */ (rawSpec));

  const dataValues =
    payload.dataValues !== undefined
      ? payload.dataValues
      : payload.data_values !== undefined
        ? payload.data_values
        : undefined;

  const opt =
    payload.opt && typeof payload.opt === "object"
      ? cloneValue(/** @type {Record<string, unknown>} */ (payload.opt))
      : undefined;

  return {
    spec,
    ...(dataValues !== undefined
      ? {
          dataValues:
            typeof dataValues === "string"
              ? dataValues
              : cloneValue(/** @type {Record<string, unknown>} */ (dataValues)),
        }
      : {}),
    ...(opt ? { opt } : {}),
  };
}

/**
 * Normalize a GeoJSON object or feature array into a FeatureCollection or Feature.
 *
 * @param {unknown} geojson
 * @returns {Record<string, unknown>}
 */
function normalizeGeoJsonInput(geojson) {
  if (Array.isArray(geojson)) {
    return {
      type: "FeatureCollection",
      features: cloneValue(geojson),
    };
  }
  const obj = /** @type {Record<string, unknown>} */ (cloneValue(geojson));
  if (
    obj &&
    typeof obj.type === "string" &&
    obj.type !== "FeatureCollection" &&
    obj.type !== "Feature"
  ) {
    return {
      type: "Feature",
      geometry: obj,
      properties: {},
    };
  }
  return obj;
}

/**
 * Build a tile layer definition from a `tile_url` entry.
 *
 * @param {string | Record<string, unknown>} entry
 * @param {number} index
 * @param {Record<string, unknown>} payload
 * @returns {Record<string, unknown>}
 */
function buildTileLayer(entry, index, payload) {
  if (entry && typeof entry === "object" && !Array.isArray(entry)) {
    const obj = /** @type {Record<string, unknown>} */ (entry);
    if (obj.type && obj.source) {
      return cloneValue(obj);
    }
    const url = typeof obj.url === "string" ? obj.url : "";
    const id = typeof obj.id === "string" ? obj.id : `tile-layer-${index + 1}`;
    const title =
      typeof obj.title === "string" ? obj.title : `Tile Layer ${index + 1}`;
    return {
      type: "Tile",
      properties: { id, title },
      source: {
        type: "XYZ",
        url,
      },
    };
  }

  const url = String(entry);
  const customId =
    typeof payload.layer_id === "string"
      ? payload.layer_id
      : typeof payload.layerId === "string"
        ? payload.layerId
        : undefined;
  const customTitle =
    typeof payload.title === "string"
      ? payload.title
      : typeof payload.layer_title === "string"
        ? payload.layer_title
        : undefined;

  return {
    type: "Tile",
    properties: {
      id:
        index === 0 && customId
          ? customId
          : index === 0
            ? "tile-layer"
            : `tile-layer-${index + 1}`,
      title:
        index === 0 && customTitle
          ? customTitle
          : index === 0
            ? "Tile Layer"
            : `Tile Layer ${index + 1}`,
    },
    source: {
      type: "XYZ",
      url,
    },
  };
}

/**
 * Normalize geospatial payload options into `<eox-map>` and `<eox-layercontrol>` properties.
 *
 * Supports `layers`, `center`, `zoom`, `tile_url` / `tileUrl`, `bbox`, `zoomExtent`,
 * `geojson`, `projection`, `controls`, `config`, and `layerControl`.
 *
 * @param {Record<string, unknown>} rawPayload
 * @returns {import("../types.ts").NormalizedMapPayload}
 */
export function normalizeMapPayload(rawPayload) {
  const payload =
    rawPayload.mapConfig && typeof rawPayload.mapConfig === "object"
      ? /** @type {Record<string, unknown>} */ ({
          ...rawPayload,
          .../** @type {Record<string, unknown>} */ (rawPayload.mapConfig),
        })
      : rawPayload;

  const configObj =
    payload.config && typeof payload.config === "object"
      ? cloneValue(/** @type {Record<string, unknown>} */ (payload.config))
      : undefined;

  const hasExplicitLayers =
    Array.isArray(payload.layers) ||
    Boolean(configObj && Array.isArray(configObj.layers));

  /** @type {Record<string, unknown>[]} */
  const layers = hasExplicitLayers
    ? cloneValue(
        /** @type {Record<string, unknown>[]} */ (
          payload.layers || configObj?.layers
        ),
      )
    : [];

  const tileUrlInput = payload.tile_url ?? payload.tileUrl;
  if (tileUrlInput) {
    const entries = Array.isArray(tileUrlInput) ? tileUrlInput : [tileUrlInput];
    entries.forEach((entry, idx) => {
      layers.push(buildTileLayer(entry, idx, payload));
    });
  }

  if (payload.geojson) {
    const geojsonTitle =
      typeof payload.geojsonTitle === "string"
        ? payload.geojsonTitle
        : typeof payload.title === "string" && !tileUrlInput
          ? payload.title
          : "GeoJSON Layer";

    if (typeof payload.geojson === "string") {
      layers.push({
        type: "Vector",
        properties: {
          id: "geojson-layer",
          title: geojsonTitle,
        },
        source: {
          type: "Vector",
          url: payload.geojson,
          format: "GeoJSON",
        },
      });
    } else if (typeof payload.geojson === "object") {
      layers.push({
        type: "Vector",
        properties: {
          id: "geojson-layer",
          title: geojsonTitle,
        },
        source: {
          type: "Vector",
          features: normalizeGeoJsonInput(payload.geojson),
        },
      });
    }
  }

  const shouldAddDefaultBasemap =
    payload.basemap === true ||
    (payload.basemap !== false && !hasExplicitLayers);

  if (shouldAddDefaultBasemap) {
    layers.unshift(cloneValue(DEFAULT_EOX_BASEMAP_LAYER));
  }

  const projection =
    typeof payload.projection === "string"
      ? payload.projection
      : configObj?.view &&
          typeof configObj.view === "object" &&
          typeof (
            /** @type {Record<string, unknown>} */ (configObj.view).projection
          ) === "string"
        ? String(
            /** @type {Record<string, unknown>} */ (configObj.view).projection,
          )
        : undefined;

  const viewObj =
    configObj?.view && typeof configObj.view === "object"
      ? /** @type {Record<string, unknown>} */ (configObj.view)
      : undefined;

  const center = Array.isArray(payload.center)
    ? [...payload.center]
    : Array.isArray(viewObj?.center)
      ? [...viewObj.center]
      : undefined;

  const zoom =
    typeof payload.zoom === "number"
      ? payload.zoom
      : typeof viewObj?.zoom === "number"
        ? viewObj.zoom
        : undefined;

  const rawBbox = Array.isArray(payload.bbox) ? [...payload.bbox] : undefined;

  let zoomExtent = Array.isArray(payload.zoomExtent)
    ? [...payload.zoomExtent]
    : Array.isArray(viewObj?.zoomExtent)
      ? [...viewObj.zoomExtent]
      : undefined;

  if (!zoomExtent && rawBbox && rawBbox.length === 4) {
    zoomExtent =
      projection === "EPSG:4326" || !isLonLatExtent(rawBbox)
        ? rawBbox
        : lonLatExtentToMercator(rawBbox);
  }

  const controls =
    payload.controls && typeof payload.controls === "object"
      ? cloneValue(/** @type {Record<string, unknown>} */ (payload.controls))
      : undefined;

  const layerControlRaw = payload.layerControl ?? payload.showLayerControl;
  const showLayerControl =
    layerControlRaw === true ||
    (Boolean(layerControlRaw) && typeof layerControlRaw === "object");

  const layerControlProps =
    layerControlRaw && typeof layerControlRaw === "object"
      ? cloneValue(/** @type {Record<string, unknown>} */ (layerControlRaw))
      : {};

  return {
    layers,
    ...(center ? { center } : {}),
    ...(zoom !== undefined ? { zoom } : {}),
    ...(rawBbox ? { bbox: rawBbox } : {}),
    ...(zoomExtent ? { zoomExtent } : {}),
    ...(projection ? { projection } : {}),
    ...(controls ? { controls } : {}),
    ...(configObj ? { config: configObj } : {}),
    showLayerControl,
    layerControlProps,
  };
}

/**
 * Compute `[minLon, minLat, maxLon, maxLat]` bounding box from a GeoJSON object.
 *
 * @param {unknown} geojson
 * @returns {[number, number, number, number] | null}
 */
export function computeGeoJsonBbox(geojson) {
  if (!geojson || typeof geojson !== "object") return null;

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  /**
   * @param {unknown} coords
   */
  function visitCoords(coords) {
    if (!Array.isArray(coords) || coords.length === 0) return;
    if (typeof coords[0] === "number" && typeof coords[1] === "number") {
      const x = coords[0];
      const y = coords[1];
      if (Number.isFinite(x) && Number.isFinite(y)) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
      return;
    }
    for (const child of coords) {
      visitCoords(child);
    }
  }

  /**
   * @param {unknown} node
   */
  function visitNode(node) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      for (const item of node) visitNode(item);
      return;
    }
    const obj = /** @type {Record<string, unknown>} */ (node);
    if (obj.coordinates !== undefined) visitCoords(obj.coordinates);
    if (obj.geometry !== undefined) visitNode(obj.geometry);
    if (Array.isArray(obj.geometries)) visitNode(obj.geometries);
    if (Array.isArray(obj.features)) visitNode(obj.features);
  }

  visitNode(geojson);

  if (!Number.isFinite(minX)) return null;
  return [minX, minY, maxX, maxY];
}
