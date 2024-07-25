/**
 * Sorts the provided items based on the title property specified in the configuration.
 *
 * @param {Array<Object>} items - The items to be sorted.
 * @param {Object} config - The configuration object containing sorting options.
 * @returns {Array<Object>} The sorted array of items.
 */
function sortResultsMethod(items, config) {
  return [...items].sort((a, b) =>
    a[config.titleProperty].localeCompare(b[config.titleProperty])
  );
}

export default sortResultsMethod;
