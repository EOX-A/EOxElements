import Group from "ol/layer/Group";

/**
 * Flattens a nested array of OpenLayers layers, including layers within group layers.
 * Recursively extracts all layers from group layers and returns a flat array.
 *
 * **Note:** This is a temporary copy of the function defined in eox-map.
 * See: https://github.com/EOX-A/EOxElements/issues/974
 * Consider exporting that function and using it here instead.
 *
 * @param {Array<import('ol/layer/Base').default>} layers - Array of OpenLayers layers, which may include Group layers.
 * @returns {Array<import('ol/layer/Base').default>} Flat array of all layers, including those nested in groups.
 */
export default function getFlatLayersArray(layers) {
  const flatLayers = [];
  flatLayers.push(...layers);

  /** @type {Array<Group>} */
  let groupLayers =
    /** @type {Array<Group>} */
    (
      flatLayers.filter(
        (l) => l instanceof Group || l.constructor.name === "_LayerGroup",
      )
    );
  while (groupLayers.length) {
    /** @type {Array<Group>} */
    const newGroupLayers = [];
    for (let i = 0, ii = groupLayers.length; i < ii; i++) {
      const layersInsideGroup = groupLayers[i].getLayers().getArray();
      flatLayers.push(...layersInsideGroup);
      /** @type {Array<Group>} */
      const filteredGroups = /** @type {Array<Group>} */ (
        layersInsideGroup.filter((l) => l instanceof Group)
      );
      newGroupLayers.push(...filteredGroups);
    }
    groupLayers = newGroupLayers;
  }
  return flatLayers;
}
