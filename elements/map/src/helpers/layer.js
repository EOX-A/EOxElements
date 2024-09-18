import Group from "ol/layer/Group";

/**
 * @typedef {import("../../types").AnyLayerWithSource} AnyLayerWithSource
 * @typedef {import("../../types").AnyLayer} AnyLayer
 */

/**
 * Retrieves a layer by its ID from the EOxMap instance.
 *
 * @param {import("../main").EOxMap} EOxMap - Instance of the EOxMap class.
 * @param {string} layerId - The ID of the OpenLayers layer to find.
 * @returns {AnyLayerWithSource | undefined} - The layer with the specified ID, or `undefined` if it does not exist.
 */
export function getLayerById(EOxMap, layerId) {
  // Get a flat array of all layers in the map, including those inside groups
  const flatLayers = getFlatLayersArray(EOxMap.map.getLayers().getArray());

  // Find and return the layer with the specified ID
  return flatLayers.find((l) => l.get("id") === layerId);
}

/**
 * Returns a flat array of all map layers, including nested layers within groups.
 *
 * Note: If you want to get all layers without groups, use the native OpenLayers `getAllLayers` method:
 * https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#getAllLayers
 *
 * @param {Array<AnyLayer>} layers - Array of OpenLayers layers, possibly containing groups.
 * @returns {Array<AnyLayerWithSource>} - A flat array of all layers, including those inside groups.
 */
export function getFlatLayersArray(layers) {
  const flatLayers = [];

  // Add the initial layers to the flatLayers array
  flatLayers.push(...layers);

  // Filter the initial layers to find group layers that may contain nested layers
  let groupLayers = flatLayers.filter((l) => l instanceof Group);

  // Loop through group layers to flatten the nested layers
  while (groupLayers.length) {
    const newGroupLayers = [];
    for (let i = 0; i < groupLayers.length; i++) {
      // Filter the initial layers to find group layers that may contain nested layers
      const layersInsideGroup = groupLayers[i].getLayers().getArray();

      // Add these nested layers to the flatLayers array
      flatLayers.push(...layersInsideGroup);

      // Check for nested groups inside the current group and add them to the newGroupLayers array
      newGroupLayers.push(
        ...layersInsideGroup.filter((l) => l instanceof Group)
      );
    }

    // Continue processing any newly found group layers
    groupLayers = newGroupLayers;
  }

  // Continue processing any newly found group layers
  return flatLayers;
}
