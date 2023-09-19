import { EOxMap } from "../main";
import Group from "ol/layer/Group";
import Layer from "ol/layer/Layer";

/**
 *
 * @param EOxMap instance of eox map class
 * @param layerId id of ol-layer or mapbox style layer
 * @returns Layer
 */
export function getLayerById(EOxMap: EOxMap, layerId: string) {
  const flatLayers = getFlatLayersArray(
    EOxMap.map.getLayers().getArray() as Array<Layer>
  );
  // get mapbox-style layer or manually generated ol layer, both group or regular layers

  const layer =
    flatLayers.find((l) => l.get("id") === layerId) ||
    flatLayers
      .filter((l) => l.get("mapbox-layers"))
      .find((l) => l.get("mapbox-layers").includes(layerId));
  if (!layer) {
    throw Error(`Layer with id: ${layerId} does not exist.`);
  }
  return layer;
}

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
