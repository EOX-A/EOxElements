/**
 * Fetches and filters items based on the provided filters and configuration using an external API.
 *
 * @param {Array<Object>} items - The items to be filtered.
 * @param {Object} filters - The filters to be applied.
 * @param {Object} config - Configuration for filtering behavior.
 * @returns {Promise<Array<Object>>} The filtered items from the external API.
 */
async function filterExternal(items, filters, config) {
  // Generate the URL for the external API based on the provided items and filters
  const response = await fetch(`${config.externalFilter(items, filters)}`);
  const jsonData = await response.json();

  // Return the 'features' array from the parsed JSON data
  return jsonData.features;
}

export default filterExternal;
