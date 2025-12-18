import { bboxPolygon } from "@turf/bbox-polygon";

/**
 * Whether a schema has feature/feature format or not
 */
export const isSelection = (schema) =>
  ["feature", "features"].some((f) => schema?.format === f);

/**
 * Whether a schema has ploygon/polygons format or not
 */
export const isPolygon = (schema) =>
  ["polygon", "polygons"].includes(schema?.format);

/**
 * Whether a schema has point/points format or not
 */
export const isPoint = (schema) => ["point", "points"].includes(schema?.format);

/**
 * Whether a schema has bbox/bboxes format or not
 */
export const isBox = (schema) =>
  ["bounding-boxes", "bounding-box"].includes(schema?.format);

/**
 * Whether a schema has line/lines format or not
 */
export const isLine = (schema) => ["lines", "line"].includes(schema?.format);

/**
 * Whether a schema has wkt type or not
 */
export const isWKT = (schema) => schema?.type === "wkt";

/**
 * Whether a schema has geojson type or not
 */
export const isGeoJSON = (schema) => schema?.type === "geojson";

/**
 * Whether a schema expects multiple values not
 */
export const isMulti = (schema) =>
  ["bounding-boxes", "polygons", "features", "points", "lines"].includes(
    schema?.format,
  );

/**
 * Whether a schema is supported by the spatial editor
 **/
export const isSupported = (schema) =>
  isSelection(schema) ||
  isPolygon(schema) ||
  isBox(schema) ||
  isPoint(schema) ||
  isLine(schema);

/**
 * Set multiple attributes to an element
 *
 * @param {Element} element - The DOM element to set attributes on
 * @param {{[key: string]: any}} attributes - The attributes to set on the element
 */
export function setAttributesAndProperties(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    if (attr.includes("-")) {
      element.setAttribute(attr, attributes[attr]);
    } else {
      element[attr] = attributes[attr];
    }
  });
}

/**
 * Check if a value satisfies a given type
 * supported types: "string", "number", "boolean", "array", "object"
 *
 * @param {*} val
 * @param {string} type
 * @returns {boolean}
 */
export const satisfiesType = (val, type) => {
  if (!val || !type) {
    return false;
  }

  switch (type) {
    case "string":
      return typeof val === "string";

    case "number":
      return !isNaN(val);

    case "boolean":
      return typeof val === "boolean";

    case "array":
      return Array.isArray(val);

    case "object":
      return typeof val === "object" && !!Object.keys(val).length;
  }
  return false;
};

/**
 * Converts an array of bounding boxes to an array of features
 */
export const bboxesToFeatures = (bboxes) => {
  if (bboxes.length < 1) return [];
  return bboxes.map((bbox) => bboxPolygon(bbox));
};

/**
 * Converts a value to a FeatureCollection based on the schema
 */
export const valueToFeatureCollection = (value, schema) => {
  if (!value) return { type: "FeatureCollection", features: [] };

  let features = [];

  if (isBox(schema)) {
    const bboxes = isMulti(schema) ? value : [value];
    features = bboxesToFeatures(bboxes);
  } else if (isPolygon(schema)) {
    const coords = isMulti(schema) ? value : [value];
    features = coords.map((c) => ({
      type: "Feature",
      properties: {},
      geometry: { type: "Polygon", coordinates: c },
    }));
  } else if (isPoint(schema)) {
    const coords = isMulti(schema) ? value : [value];
    features = coords.map((c) => ({
      type: "Feature",
      properties: {},
      geometry: { type: "Point", coordinates: c },
    }));
  } else if (isLine(schema)) {
    const coords = isMulti(schema) ? value : [value];
    features = coords.map((c) => ({
      type: "Feature",
      properties: {},
      geometry: { type: "LineString", coordinates: c },
    }));
  } else if (isGeoJSON(schema)) {
    if (value.type === "FeatureCollection") {
      return value;
    } else if (value.type === "Feature") {
      features = [value];
    } else if (value.type === "Geometry" || value.coordinates) {
      features = [{ type: "Feature", properties: {}, geometry: value }];
    }
  }

  return {
    type: "FeatureCollection",
    features: features,
  };
};
