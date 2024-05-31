function sortResultsMethod(items, config) {
  return [...items].sort((a, b) =>
    a[config.titleProperty].localeCompare(b[config.titleProperty])
  );
}

export default sortResultsMethod;
