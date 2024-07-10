/**
 * Filters and aggregates results based on a specified property in the EOxItemFilterResults component.
 *
 * @param {Array<Object>} items - The items to be filtered and aggregated.
 * @param {string} property - The property used for aggregation.
 * @param {Object} EOxItemFilterResults - The EOxItemFilterResults component instance.
 * @returns {Array<Object>} The filtered and aggregated items.
 */
export function aggregateResultsMethod(items, property, EOxItemFilterResults) {
  return items.filter((item) => {
    // Get the aggregation property from the item
    const aggregation = item[EOxItemFilterResults.config.aggregateResults];

    // Get the current filter state for the aggregation property
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

    // Determine if the property is included in the current filter
    const includedInCurrentFilter = currentFilter?.length
      ? currentFilter.includes(property)
      : true;

    // Return true if the property is included in the current filter and matches the aggregation
    return includedInCurrentFilter && Array.isArray(aggregation)
      ? aggregation.includes(property)
      : aggregation === property;
  });
}

export default aggregateResultsMethod;
