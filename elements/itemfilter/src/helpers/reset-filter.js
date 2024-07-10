/**
 * Resets the given filter object to its default state.
 *
 * @param {Object} filterObject - The filter object to reset.
 * @returns {Object|null} The reset filter object or null if the filter was not dirty.
 */
export default function resetFilter(filterObject) {
  // Return null if the filter is not dirty
  if (!filterObject.dirty) {
    return null;
  }
  const filterType = filterObject.type;

  // Reset the filter state based on its type
  switch (filterType) {
    case "multiselect":
      // For multiselect filters, set all state values to false
      for (const filter in filterObject.state) {
        // eslint-disable-next-line
        if (filterObject.state.hasOwnProperty(filter)) {
          filterObject.state[filter] = false;
        }
      }
      break;

    case "range":
      // For range filters, reset state to min and max values
      filterObject.state.min = filterObject.min;
      filterObject.state.max = filterObject.max;
      break;

    case "select":
      // For select filters, set all state values to false
      for (const filter in filterObject.state) {
        // eslint-disable-next-line
        if (filterObject.state.hasOwnProperty(filter)) {
          filterObject.state[filter] = false;
        }
      }
      break;

    case "spatial":
      // For spatial filters, clear the geometry
      filterObject.state.geometry = undefined;
      break;

    case "text":
      // For text filters, reset state values to undefined
      filterObject.keys.forEach((key) => {
        filterObject.state[key] = undefined;
      });
      break;
  }

  // Remove stringifiedState and dirty properties from the filter object
  delete filterObject.stringifiedState;
  delete filterObject.dirty;

  return filterObject;
}
