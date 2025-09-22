import Group from "ol/layer/Group";

/**
 * TEMP / TO-DO, this is a copy of the function defined in the eox-map:
 * https://github.com/EOX-A/EOxElements/blob/main/elements/map/src/layer.ts#L25
 * Consider a way to properly export that function and use it here
 * See also:
 * https://github.com/EOX-A/EOxElements/issues/974
 * @param {import('ol/layer/Base').default[]} layers
 * @returns {import('ol/layer/Base').default[]}
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
