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
export function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
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
