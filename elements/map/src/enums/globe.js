export const WORLD_LON_LAT_EXTENT = Object.freeze([-180, -90, 180, 90]);

// Screen edges map to curves on the globe, so corners alone miss the extremes.
export const EXTENT_EDGE_FRACTIONS = Object.freeze([0, 0.25, 0.5, 0.75, 1]);

export const HORIZON_BISECT_STEPS = 20;

// Must match the installed @openglobus/og, older font atlases do not load.
export const OG_FONTS_SRC =
  "https://cdn.jsdelivr.net/npm/@openglobus/og@1.0.0-rc34/lib/res/fonts";

// og has no start/end text align.
export const LABEL_ALIGN = Object.freeze({
  left: "left",
  start: "left",
  right: "right",
  end: "right",
});

/** @type {import("../plugins/globe/types").RGBA} */
export const TRANSPARENT = /** @type {import("../plugins/globe/types").RGBA} */ (
  Object.freeze([0, 0, 0, 0])
);

// Stroke colour of OL's default style
export const DEFAULT_STROKE_COLOR = "#3399CC";

// og paints non-finite expression results, so hidden pixels get a finite value below the display range.
export const HIDDEN_PIXEL_VALUE = -1e30;
export const VISIBLE_PIXEL_RANGE = Object.freeze([-1e29, Infinity]);

// OL GeoTIFF alpha band value for valid pixels with raw values (`normalize: false`); og has no alpha band.
export const OL_ALPHA_VALID = 255;

/** OL operators and their JS equivalent in og's per-pixel expression. */
export const OL_INFIX_OPERATORS = Object.freeze({
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "/",
  "%": "%",
  "^": "**",
  "==": "===",
  "!=": "!==",
  ">": ">",
  ">=": ">=",
  "<": "<",
  "<=": "<=",
  all: "&&",
  any: "||",
});
export const OL_MATH_FUNCTIONS = Object.freeze([
  "abs",
  "floor",
  "ceil",
  "round",
  "sqrt",
  "sin",
  "cos",
  "atan",
]);

// WebGLTile style keys og GeoTIFF render options can't express.
export const OL_RASTER_ADJUSTMENTS = Object.freeze([
  "gamma",
  "contrast",
  "saturation",
  "exposure",
  "brightness",
]);

/**
 * Maps the OpenGlobus geometry style keys to their setters.
 */
export const GEOMETRY_STYLE_SETTERS = Object.freeze({
  fillColor: "setFillColor4v",
  lineColor: "setLineColor4v",
  strokeColor: "setStrokeColor4v",
  lineWidth: "setLineWidth",
  strokeWidth: "setStrokeWidth",
});

/** OL geometry types og draws as geometries; points become billboards. */
export const OG_GEOMETRY_TYPES = Object.freeze({
  Polygon: "POLYGON",
  MultiPolygon: "MULTIPOLYGON",
  LineString: "LINESTRING",
  MultiLineString: "MULTILINESTRING",
});
