function getChipItems(filters) {
  return Object.keys(filters)
    .map((filter) => ({
      title: `${filter}:${filters[filter].stringifiedState}`,
      key: filter,
    }))
    .filter((item) => filters[item.key].dirty);
}

export default getChipItems;
