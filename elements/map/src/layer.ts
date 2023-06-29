import { EOxMap } from "../main";

/**
 *
 * @param EOxMap instance of eox map class
 * @param layerId id of ol-layer or mapbox style layer
 * @returns Layer
 */
export function getLayerById(EOxMap: EOxMap, layerId: string) {
  // get mapbox-style layer or manually generated ol layer
  const layers = EOxMap.map.getLayers().getArray();
  const layer =
    layers.find((l) => l.get("id") === layerId) ||
    layers
      .filter((l) => l.get("mapbox-layers"))
      .find((l) => l.get("mapbox-layers").includes(layerId));

  if (!layer) {
    throw Error(`Layer with id: ${layerId} does not exist.`);
  }
  return layer;
}
