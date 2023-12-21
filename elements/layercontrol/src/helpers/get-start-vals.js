/**
 * Recursively traverses the schema object to extract startVals based on query parameters.
 *
 * @param {{[key: string]: any}} schema - The schema object to traverse.
 * @param {{[key: string]: any}} queryParams - Query parameters to extract startVals.
 * @returns {object} - Object containing the startVals.
 */
export function getNestedStartVals(schema, queryParams) {
  let startVals = {};

  for (const key in schema) {
    const type = schema[key].type;

    // Extract startVal based on type
    if (type && type !== "object") {
      //@ts-ignore
      startVals[key] =
        type === "number" ? Number(queryParams[key]) : queryParams[key];
    } else if (typeof schema[key] === "object" && schema[key]?.properties) {
      // Recursively traverse nested properties
      const nestedStartVals = getNestedStartVals(
        schema[key].properties,
        queryParams
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
 * Retrieves startVals from Query Params based on layer configuration.
 *
 * @param {import("ol/layer").Layer} layer - The layer object.
 * @param {{[key: string]: any}} layerConfig - Configuration object for the layer.
 * @returns {object | null} - Object containing the startVals or null if not found.
 */
export function getStartVals(layer, layerConfig) {
  // Check for layer configuration and tile URL function availability
  //@ts-ignore
  if (!layerConfig || !layer.getSource().getTileUrlFunction()) return null;

  // Extract query parameters from tile URL
  //@ts-ignore
  const url = new URL(layer.getSource().getTileUrlFunction()([0, 0, 0]));

  // Retrieve startVals based on schema and query parameters
  //@ts-ignore
  const queryParams = Object.fromEntries(url.searchParams.entries());
  const startVals = getNestedStartVals(
    layerConfig.schema?.properties || layerConfig.schema,
    queryParams
  );

  return Object.keys(startVals).length ? startVals : null;
}
