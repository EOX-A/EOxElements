import { filter as filterClient } from "../../helpers/";
import { filterExternal } from "../../helpers";

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
