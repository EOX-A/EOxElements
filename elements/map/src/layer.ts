import { EOxMap } from "../main";
import Group from "ol/layer/Group";
import Layer from "ol/layer/Layer";

/**
 *
 * @param EOxMap instance of eox map class
 * @param layerId id of ol-layer
 * @returns Layer or `undefined` if layer does not exist
 */
export function getLayerById(EOxMap: EOxMap, layerId: string) {
  const flatLayers = getFlatLayersArray(
    EOxMap.map.getLayers().getArray() as Array<Layer>
  );
  console.log(flatLayers)
  return flatLayers.find((l) => {
    console.log(l.get("id") === layerId)
    return l.get("id") === layerId});
}

/**
 * Returns a flat array of all map layers, including groups
 * To get all layers without groups, you can use the native
 * OL `getAllLayers` method on the map itself:
 * https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#getAllLayers
 * @param layers layers Array
 */
export function getFlatLayersArray(layers: Array<Layer>) {
  const flatLayers = [];
  flatLayers.push(...layers);

  let groupLayers = flatLayers.filter(
    (l) => l instanceof Group
  ) as unknown as Array<Group>;

  while (groupLayers.length) {
    const newGroupLayers = [];
    for (let i = 0, ii = groupLayers.length; i < ii; i++) {
      const layersInsideGroup = groupLayers[i].getLayers().getArray();
      flatLayers.push(...layersInsideGroup);
      newGroupLayers.push(
        ...(layersInsideGroup.filter((l) => l instanceof Group) as Array<Group>)
      );
    }
    groupLayers = newGroupLayers;
  }
  return flatLayers as Array<Layer>;
}
