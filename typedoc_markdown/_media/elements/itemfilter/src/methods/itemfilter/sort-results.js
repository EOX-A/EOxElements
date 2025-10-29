import { getValue } from "../../helpers";

/**
 * Sorts the provided items based on the title property specified in the configuration.
 *
 * @param {Array<Object>} items - The items to be sorted.
 * @param {Object} config - The configuration object containing sorting options.
 * @returns {Array<Object>} The sorted array of items.
 */
function sortResultsMethod(items, config) {
  return [...items].sort((a, b) =>
    getValue(config.titleProperty, a)
      .toString()
      .localeCompare(getValue(config.titleProperty, b))
      .toString(),
  );
}

export default sortResultsMethod;
