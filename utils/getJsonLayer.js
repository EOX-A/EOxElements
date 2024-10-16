/**
 * Returns JSON EOxMap layer using it's ID from a collection of layers
 *
 * @param {import("../elements/map/src/main").EoxLayer[]} layers
 * @param {string} id
 * @returns {import("../elements/map/src/main").EoxLayer | void}
 */
const getJsonLayer = (layers, id) => {
  for (const layer of layers) {
    if (layer.type === "Group") {
      const found = getJsonLayer(layer.layers, id);
      if (!found) {
        continue;
      }
      return found;
    }
    if (layer.properties.id === id) {
      return layer;
    }
  }
};
export default getJsonLayer;
