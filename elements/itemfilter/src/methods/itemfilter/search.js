import { filter as filterClient } from "../../helpers/";
import { filterExternal } from "../../helpers";

/**
 * Executes a search based on the provided configuration, items, and filters in the EOxItemFilter component.
 *
 * @param {Object} config - The configuration object for the search.
 * @param {Array<Object>} items - The items to be filtered.
 * @param {Object} EOxItemFilter - The EOxItemFilter component instance.
 * @returns {Promise<void>} A promise that resolves when the search is complete.
 */
async function searchMethod(config, items, EOxItemFilter) {
  let results;
  if (EOxItemFilter.config?.externalFilter) {
    results = await filterExternal(items, EOxItemFilter.filters, config);
  } else {
    results = await filterClient(items, EOxItemFilter.filters, config);
  }

  EOxItemFilter.results = EOxItemFilter.sortResults(results);
  config.onFilter(EOxItemFilter.results, EOxItemFilter.filters);
}

export default searchMethod;
