/**
 * Checks if any of the filters are dirty.
 *
 * @param {Object} filters - An object containing filter data.
 * @returns {boolean} True if any filter is dirty, otherwise false.
 */
export default function isFiltersDirty(filters) {
  return (
    Object.values(filters)
      .map((f) => f.dirty)
      .filter((f) => f).length > 0 // Filter to keep only truthy values and check if the length is greater than 0
  );
}
