/**
 * Run the layer collection through a set of property filters before rendering
 *
 * @param {import("ol").Collection<import("ol/layer").Layer | import("ol/layer").Group>} collection - The collection of layers to be checked.
 */
export const hideLayersBasedOnProperties = (collection) => {
  const propertyFilters = ["layerControlHide", "layerControlOptional"];
  return collection
    ?.getArray()
    ?.filter((l) => propertyFilters.every((p) => !l.get(p)));
};
