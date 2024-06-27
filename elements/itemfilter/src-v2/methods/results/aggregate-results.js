export function aggregateResultsMethod(items, property, EOxItemFilterResults) {
  return items.filter((item) => {
    const aggregation = item[EOxItemFilterResults.config.aggregateResults];

    let currentFilter;
    if (
      EOxItemFilterResults.filters[EOxItemFilterResults.config.aggregateResults]
    ) {
      currentFilter = Object.keys(
        EOxItemFilterResults.filters[
          EOxItemFilterResults.config.aggregateResults
        ]
      ).filter(
        (f) =>
          EOxItemFilterResults.filters[
            EOxItemFilterResults.config.aggregateResults
          ].state[f]
      );
    }

    const includedInCurrentFilter = currentFilter?.length
      ? currentFilter.includes(property)
      : true;

    return includedInCurrentFilter && Array.isArray(aggregation)
      ? aggregation.includes(property)
      : aggregation === property;
  });
}

export default aggregateResultsMethod;
