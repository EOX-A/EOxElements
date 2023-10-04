export const resetFilter = (filterObject: FilterObject) => {
  if (!filterObject.dirty) {
    return;
  }
  const filterType = filterObject.type;
  switch (filterType) {
    case "multiselect":
      for (const filter in filterObject.state) {
        filterObject.state[filter] = false;
      }
      break;
    case "range":
      filterObject.state.min = filterObject.min;
      filterObject.state.max = filterObject.max;
      break;
    case "select":
      for (const filter in filterObject.state) {
        filterObject.state[filter] = false;
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
  console.log(filterObject);
  return filterObject;
};
