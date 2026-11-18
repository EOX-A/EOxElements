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
export const TRANSPARENT = [0, 0, 0, 0];

/** OL geometry types og draws as geometries; points become billboards. */
export const OG_GEOMETRY_TYPES = Object.freeze({
  Polygon: "POLYGON",
  MultiPolygon: "MULTIPOLYGON",
  LineString: "LINESTRING",
  MultiLineString: "MULTILINESTRING",
});
