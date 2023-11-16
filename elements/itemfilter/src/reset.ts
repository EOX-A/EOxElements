export const resetFilter = (filterObject: FilterObject) => {
  if (!filterObject.dirty) {
    return null;
  }
  const filterType = filterObject.type;
  switch (filterType) {
    case "multiselect":
      for (const filter in filterObject.state) {
        filterObject.state[filter] = false;
      }
      break;
    case "range":
      filterObject.state.min = (<RangeFilterObject>filterObject).min;
      filterObject.state.max = (<RangeFilterObject>filterObject).max;
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
  return filterObject;
};
