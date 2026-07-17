/**
 * Collects a schema's field definitions, from `properties` and from any `anyOf`/`oneOf`/`allOf`
 * branches.
 *
 * json-editor uses those combinators for "pick one variant" forms, where the fields live in the
 * branches and the schema's own `properties` is empty — so reading `properties` alone finds
 * nothing.
 *
 * @param {{[key: string]: any}} schema - The schema object to collect fields from.
 * @returns {{[key: string]: any}} - Field definitions keyed by property name.
 */
function collectFieldSchemas(schema) {
  if (!schema || typeof schema !== "object") return {};

  const fields = { ...schema.properties };
  for (const key of ["anyOf", "oneOf", "allOf"]) {
    if (Array.isArray(schema[key])) {
      for (const branch of schema[key]) {
        Object.assign(fields, collectFieldSchemas(branch));
      }
    }
  }
  return fields;
}

/**
 * Recursively traverses the schema object to extract startVals based on values of nested properties.
 *
 * @param {{[key: string]: any}} schema - The schema object to traverse.
 * @param {{[key: string]: any}} nestedValues - values of nested properties to extract startVals.
 * @returns {object} - Object containing the startVals.
 */
export function getNestedStartVals(schema, nestedValues) {
  let startVals = {};

  for (const key in schema) {
    const type = schema[key].type;
    // Extract startVal based on type
    if (type && type !== "object" && nestedValues[key] !== undefined) {
      const value =
        type === "number" ? Number(nestedValues[key]) : nestedValues[key];
      // A value the URL carries but the schema can't hold (e.g. "auto" as a number) would
      // otherwise seed the form with NaN.
      startVals[key] = Number.isNaN(value) ? nestedValues[key] : value;
    } else {
      // Recursively traverse nested properties
      const nestedFields = collectFieldSchemas(schema[key]);
      if (Object.keys(nestedFields).length) {
        const nestedStartVals = getNestedStartVals(nestedFields, nestedValues);
        if (Object.keys(nestedStartVals).length > 0) {
          startVals[key] = nestedStartVals;
        }
      }
    }
  }
  return startVals;
}

/**
 * Retrieves startVals from Query Params or style variables based on layer configuration.
 *
 * @param {import("ol/layer").Layer} layer - The layer object.
 * @param {import("../components/layer-config").EOxLayerControlLayerConfig['layerConfig']} layerConfig - Configuration object for the layer.
 * @returns {object | null} - Object containing the startVals or null if not found.
 */
export function getStartVals(layer, layerConfig) {
  // Check for layer configuration and tile URL function availability
  if (!layerConfig) return null;

  /** @type {Record<string,unknown>}*/
  let nestedValues = {};
  // extract style variables from layer
  let styleVars =
    "updateStyleVariables" in layer
      ? /** @type {import("ol/layer/WebGLTile").default} */
        (layer)["style_"]?.variables
      : layerConfig.style?.variables;
  if ((layerConfig.type === "style" || layerConfig.style) && styleVars) {
    nestedValues = styleVars;
  } else if (/** @type {any} */ (layer.getSource())?.getParams?.()) {
    nestedValues = /** @type {any} */ (layer.getSource()).getParams();
  } else if (
    /** @type {import("ol/source").Source & { getTileUrlFunction: Function }} */ (
      layer.getSource()
    )?.getTileUrlFunction?.()
  ) {
    // Extract query parameters from tile URL
    try {
      const tileUrl =
        /** @type {import("ol/source").Source & { getTileUrlFunction: Function }} */ (
          layer.getSource()
        ).getTileUrlFunction()([0, 0, 0]);
      if (tileUrl) {
        const url = new URL(tileUrl);
        // Retrieve startVals based on schema and query parameters
        nestedValues = {};
        for (const [key, value] of url.searchParams.entries()) {
          const allValues = url.searchParams.getAll(key);
          nestedValues[key] = allValues.length > 1 ? allValues : value;
        }
      }
    } catch (e) {
      console.error("Error parsing start values from tile URL", e);
    }
  } else return null;

  // Fall back to the schema itself for schemas passed as a bare map of property definitions.
  const fieldSchemas = collectFieldSchemas(layerConfig.schema);
  const startVals = getNestedStartVals(
    Object.keys(fieldSchemas).length ? fieldSchemas : layerConfig.schema,
    nestedValues,
  );

  return Object.keys(startVals).length ? startVals : null;
}
