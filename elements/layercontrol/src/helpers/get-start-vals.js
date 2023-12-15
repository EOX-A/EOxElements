/**
 * Recursive function to retrieve startVal inside schema
 *
 * @param {{[key: string]: any}} schema
 * @param {{[key: string]: any}} queryParams
 * @return {object}
 */
export function getNestedStartVals(schema, queryParams) {
  let startVals = {};

  for (const key in schema) {
    const type = schema[key].type;
    if (type && type !== "object") {
      startVals[key] =
        type === "number" ? Number(queryParams[key]) : queryParams[key];
    } else if (typeof schema[key] === "object" && schema[key]?.properties) {
      const nestedStartVals = getNestedStartVals(
        schema[key].properties,
        queryParams
      );
      if (Object.keys(nestedStartVals).length > 0) {
        startVals[key] = nestedStartVals;
      }
    }
  }
  return startVals;
}

/**
 * Get startVals from Query Params
 *
 * @param {import("ol/layer").Layer} layer
 * @param {{[key: string]: any}} layerConfig
 * @return {object | null}
 */
export function getStartVals(layer, layerConfig) {
  //@ts-ignore
  if (!layerConfig || !layer.getSource().getTileUrlFunction()) return null;

  //@ts-ignore
  const url = new URL(layer.getSource().getTileUrlFunction()([0, 0, 0]));

  //@ts-ignore
  const queryParams = Object.fromEntries(url.searchParams.entries());
  const startVals = getNestedStartVals(
    layerConfig.schema?.properties || layerConfig.schema,
    queryParams
  );

  return Object.keys(startVals).length ? startVals : null;
}
