export default function isFiltersDirty(filters) {
  return (
    Object.values(filters)
      .map((f) => f.dirty)
      .filter((f) => f).length > 0
  );
}
