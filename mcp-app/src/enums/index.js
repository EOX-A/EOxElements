import {
  RESOURCE_MIME_TYPE,
  RESOURCE_URI_META_KEY,
} from "@modelcontextprotocol/ext-apps";

/**
 * Official MCP Apps UI capability extension identifier.
 */
export const MCP_APP_EXTENSION_ID = "io.modelcontextprotocol/ui";

/**
 * MIME type used for MCP App HTML resources.
 */
export const MCP_APP_RESOURCE_MIME_TYPE = RESOURCE_MIME_TYPE;

/**
 * Legacy metadata key for tool-to-UI resource association.
 */
export const MCP_APP_RESOURCE_URI_META_KEY = RESOURCE_URI_META_KEY;

/**
 * Default A2UI combined catalog URL used when normalizing `components` payloads.
 */
export const EOX_A2UI_CATALOG_URL =
  "https://eox-a.github.io/EOxElements/a2ui/0_9/combined_catalog.json";

/**
 * Standard EOX basemap tile origins.
 */
export const EOX_BASEMAP_ORIGINS = Object.freeze([
  "https://tiles.maps.eox.at",
  "https://s2maps-tiles.eu",
]);

/**
 * Default CSP `resourceDomains` for EOxElements MCP Apps.
 */
export const DEFAULT_EOX_CSP_RESOURCE_DOMAINS = Object.freeze([
  ...EOX_BASEMAP_ORIGINS,
  "blob:",
  "data:",
]);

/**
 * Default CSP `connectDomains` for EOxElements MCP Apps.
 */
export const DEFAULT_EOX_CSP_CONNECT_DOMAINS = Object.freeze([
  ...EOX_BASEMAP_ORIGINS,
]);

/**
 * Default EOX basemap layer added when rendering geospatial payloads without an explicit basemap.
 */
export const DEFAULT_EOX_BASEMAP_LAYER = Object.freeze({
  type: "Tile",
  properties: Object.freeze({
    id: "eox-basemap",
    title: "EOX Terrain Light",
  }),
  source: Object.freeze({
    type: "XYZ",
    url: "https://tiles.maps.eox.at/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg",
  }),
});

/**
 * Supported render modes for `<eox-mcp-app>`.
 */
export const MCP_APP_MODES = Object.freeze({
  EMPTY: "empty",
  A2UI: "a2ui",
  MAP: "map",
  CHART: "chart",
});
