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

  const configKey = EOxItemFilterResults.config.aggregateResults;

  if (property === "No category") {
    return items.filter((item) => {
      const aggregation = item[configKey];
      if (Array.isArray(aggregation)) {
        // True if array is empty or only contains falsy values
        return aggregation.filter(Boolean).length === 0;
      }
      return !aggregation;
    });
  }

  return items.filter((item) => {
    const aggregation = item[configKey];

    // Exclude items that should be in "No category"
    if (Array.isArray(aggregation)) {
      if (aggregation.filter(Boolean).length === 0) {
        return false;
      }
    } else if (!aggregation) {
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
