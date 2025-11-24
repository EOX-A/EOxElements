/**
 * Filters and aggregates results based on a specified property in the EOxItemFilterResults component.
 *
 * @param {Array<Object>} items - The items to be filtered and aggregated.
 * @param {string} property - The property used for aggregation.
 * @param {Object} EOxItemFilterResults - The EOxItemFilterResults component instance.
 * @returns {Array<Object>} The filtered and aggregated items.
 */
export function aggregateResultsMethod(items, property, EOxItemFilterResults) {
  // If the category itself is an empty string, return nothing immediately.
  // This prevents the "Duplicate results" list under the "" header.
  if (!property || (typeof property === "string" && property.trim() === "")) {
    return [];
  }

  return items.filter((item) => {
    const configKey = EOxItemFilterResults.config.aggregateResults;
    // Get the aggregation property from the item
    const aggregation = item[configKey];

    // If the item does NOT have the selected property (it is undefined or null),
    // we immediately exclude it from this specific category list.
    if (aggregation === undefined || aggregation === null) {
      return false;
    }

    let currentFilter;
    if (EOxItemFilterResults.filters[configKey]) {
      currentFilter = Object.keys(
        EOxItemFilterResults.filters[configKey],
      ).filter((f) => EOxItemFilterResults.filters[configKey].state[f]);
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
