import { getValue } from "../../helpers";

/**
 * Sorts the provided items based on the resultSorting configuration.
 * Supports:
 * - undefined (default): smart alphabetical sorting (skips if externalFilter or fuseConfig.shouldSort is truthy)
 * - false: no sorting
 * - string: property key to sort by (ascending)
 * - function: custom comparator function (a, b) => number
 * - object: { key: string, order?: 'asc' | 'desc' }
 *
 * @param {Array<Object>} items - The items to be sorted.
 * @param {Object} config - The configuration object containing sorting options.
 * @param {Object} [options] - Optional sorting parameters.
 * @param {boolean} [options.isExternalResult] - Flag for results from external filter.
 * @returns {Array<Object>} The sorted array of items.
 */
function sortResultsMethod(items, config, options = {}) {
  const { resultSorting } = config;

  // 1. Explicitly disabled sorting
  if (resultSorting === false) {
    return items;
  }

  // 2. Default/Smart sorting (undefined)
  if (resultSorting === undefined) {
    // Skip sorting if results come from an external source (assumed sorted)
    // or if Fuse.js is configured to handle its own sorting by score.
    if (options.isExternalResult || config.fuseConfig?.shouldSort) {
      return items;
    }
    // Backward compatible default: alphabetical by titleProperty
    return [...items].sort((a, b) => {
      const valA = getValue(config.titleProperty, a) || "";
      const valB = getValue(config.titleProperty, b) || "";
      return valA.toString().localeCompare(valB.toString());
    });
  }

  // 3. Custom comparator function
  if (typeof resultSorting === "function") {
    return [...items].sort(resultSorting);
  }

  // 4. Sort by property (string or object)
  const sortKey =
    typeof resultSorting === "string" ? resultSorting : resultSorting.key;
  const sortOrder =
    typeof resultSorting === "object" && resultSorting.order === "desc"
      ? -1
      : 1;

  if (sortKey) {
    return [...items].sort((a, b) => {
      const valA = getValue(sortKey, a) || "";
      const valB = getValue(sortKey, b) || "";
      return valA.toString().localeCompare(valB.toString()) * sortOrder;
    });
  }

  return items;
}

export default sortResultsMethod;
