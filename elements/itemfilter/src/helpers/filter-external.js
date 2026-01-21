import { getValue } from "./";
/**
 * Fetches and filters items based on the provided filters and configuration using an external API.
 *
 * @param {Array<Object>} items - The items to be filtered.
 * @param {Object} filters - The filters to be applied.
 * @param {Object} config - Configuration for filtering behavior.
 * @returns {Promise<Array<Object>>} The filtered items from the external API.
 */
async function filterExternal(items, filters, config) {
  const functionResult = config.externalFilter(items, filters);
  // Check if the function returns a string or an object
  // If string, assume this is the url to be fetched;
  // If object, assume structure { url: "<API endpoint>", key?: "<nested.property.key for items>"}
  const url =
    typeof functionResult === "string" || functionResult instanceof String
      ? functionResult
      : functionResult.url;

  const jsonData =
    typeof functionResult === "object" && "fetchFn" in functionResult
      ? await functionResult.fetchFn(url)
      : await fetch(url).then(async (response) => await response.json());

  // Return the array from the parsed JSON data
  return functionResult.key ? getValue(functionResult.key, jsonData) : jsonData;
}

export default filterExternal;
