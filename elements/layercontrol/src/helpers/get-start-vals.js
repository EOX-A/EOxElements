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
    if (type && type !== "object") {
      //@ts-ignore
      startVals[key] =
        type === "number" ? Number(nestedValues[key]) : nestedValues[key];
    } else if (typeof schema[key] === "object" && schema[key]?.properties) {
      // Recursively traverse nested properties
      const nestedStartVals = getNestedStartVals(
        schema[key].properties,
        nestedValues
      );
      if (Object.keys(nestedStartVals).length > 0) {
        //@ts-ignore
        startVals[key] = nestedStartVals;
      }
    }
  }
  return startVals;
}

/**
 * Retrieves startVals from Query Params or style variables based on layer configuration.
 *
 * @param {import("ol/layer").Layer} layer - The layer object.
 * @param {{[key: string]: any}} layerConfig - Configuration object for the layer.
 * @returns {object | null} - Object containing the startVals or null if not found.
 */
export function getStartVals(layer, layerConfig) {
  // Check for layer configuration and tile URL function availability
  if (!layerConfig) return null;

  /** @type {Record<string,unknown>}*/
  let nestedValues = {};
  // extract style variables from layer
  let styleVars =
    layer.get("type") === "WebGLTile"
      ? /** @type {import("ol/layer/WebGLTile").default} */
        (layer)["style_"]?.variables
      : layer.get("styles")?.variables;
  if (layerConfig.type === "style" && styleVars) {
    nestedValues = styleVars;

    //@ts-expect-error
  } else if (layer.getSource()?.getTileUrlFunction?.()) {
    // Extract query parameters from tile URL
    //@ts-ignore
    const url = new URL(layer.getSource().getTileUrlFunction()([0, 0, 0]));

    // Retrieve startVals based on schema and query parameters
    //@ts-ignore
    nestedValues = Object.fromEntries(url.searchParams.entries());
  } else return null;

  const startVals = getNestedStartVals(
    layerConfig.schema?.properties || layerConfig.schema,
    nestedValues
  );

  return Object.keys(startVals).length ? startVals : null;
}
