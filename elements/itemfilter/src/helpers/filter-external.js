async function filterExternal(items, filters, config) {
  const response = await fetch(`${config.externalFilter(items, filters)}`);
  const jsonData = await response.json();

  return jsonData.features;
}

export default filterExternal;
