/**
 * Filter all map layers by property.
 *
 * @param {any[]} layers - Array of layers to search through.
 * @param {string} key - Property key to filter by.
 * @param {any} value - Value to match against the property.
 * @returns {Array<import("ol/layer").Group>} - Array of found layers.
 */
export default function filterLayers(layers, key, value) {
  /** @type {Array<import("ol/layer").Group>} */
  let found = [];

  /**
   * Filter all map layers by property.
   *
   * @param {Array<import("ol/layer").Group>} searchLayers - Array of layers to search through.
   * @param {string} key - Property key to filter by.
   * @param {any} value - Value to match against the property.
   * @returns {Array<import("ol/layer").Group>} - Array of found layers.
   */
  const search = (searchLayers, key, value) => {
    // Filter layers based on the provided key and value
    found = [
      ...found,
      ...searchLayers.filter((layer) => layer.get(key) === value),
    ];

    // Check if there are sub-layers (groups)
    const groups = searchLayers.filter(
      (layer) => /** @type {import("ol/layer").Group} */ (layer).getLayers
    );

    // If sub-layers are present, recursively search through them
    if (groups.length > 0)
      groups.forEach((group) =>
        // @ts-ignore
        search(group.getLayers().getArray(), key, value)
      );

    return found;
  };

  search(layers, key, value);
  return found;
}
