export default function resetFilter(filterObject) {
  if (!filterObject.dirty) {
    return null;
  }
  const filterType = filterObject.type;
  switch (filterType) {
    case "multiselect":
      for (const filter in filterObject.state) {
        if (filterObject.state.hasOwnProperty(filter)) {
          filterObject.state[filter] = false;
        }
      }
      break;
    case "range":
      filterObject.state.min = filterObject.min;
      filterObject.state.max = filterObject.max;
      break;
    case "select":
      for (const filter in filterObject.state) {
        if (filterObject.state.hasOwnProperty(filter)) {
          filterObject.state[filter] = false;
        }
      }
      break;
    case "spatial":
      filterObject.state.geometry = undefined;
      break;
    case "text":
      filterObject.keys.forEach((key) => {
        filterObject.state[key] = undefined;
      });
      break;
  }
  delete filterObject.stringifiedState;
  delete filterObject.dirty;
  return filterObject;
}
