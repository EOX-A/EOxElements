import Group from "ol/layer/Group";

/**
 * @typedef {import("../../types").AnyLayerWithSource} AnyLayerWithSource
 * @typedef {import("../../types").AnyLayer} AnyLayer
 */

/**
 * Retrieves a layer by its ID from the EOxMap.
 *
 * @param {EOxMap} EOxMap - Instance of EOxMap class
 * @param {string} layerId - ID of the OpenLayers layer
 * @returns {AnyLayerWithSource | undefined} - Layer or `undefined` if the layer does not exist
 */
export function getLayerById(EOxMap, layerId) {
  const flatLayers = getFlatLayersArray(
    /** @type {Array<AnyLayerWithSource>} */ (EOxMap.map.getLayers().getArray())
  );
  return flatLayers.find((l) => l.get("id") === layerId);
}

/**
 * Returns a flat array of all map layers, including groups and nested layers.
 * To get all layers without groups, you can use the native OL `getAllLayers` method on the map itself:
 * https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#getAllLayers
 *
 * @param {Array<AnyLayer>} layers - Array of layers
 * @returns {Array<AnyLayerWithSource>} - Flat array of layers
 * @example getFlatLayersArray(eoxMap.map.getAllLayers())
 */
export function getFlatLayersArray(layers) {
  const flatLayers = [];
  flatLayers.push(...layers);

  let groupLayers = flatLayers.filter((l) => l instanceof Group);

  while (groupLayers.length) {
    const newGroupLayers = [];
    for (let i = 0; i < groupLayers.length; i++) {
      const layersInsideGroup = groupLayers[i].getLayers().getArray();
      flatLayers.push(...layersInsideGroup);
      newGroupLayers.push(
        ...layersInsideGroup.filter((l) => l instanceof Group)
      );
    }
    groupLayers = newGroupLayers;
  }

  return /** @type {Array<AnyLayerWithSource>} */ (flatLayers);
}
