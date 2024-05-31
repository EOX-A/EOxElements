import { filter as filterClient } from "../../helpers/";

async function searchMethod(config, items, EOxItemFilter) {
  let results;
  if (EOxItemFilter.config.externalFilter) {
    // results = await filterExternal(this.#items, this.filters, this.#config);
  } else {
    results = await filterClient(items, EOxItemFilter.filters, config);
  }
  EOxItemFilter.results = EOxItemFilter.sortResults(results);
  config.onFilter(EOxItemFilter.results, EOxItemFilter.filters);
  console.log(config, items, EOxItemFilter.results, EOxItemFilter.filters)
}

export default searchMethod;
