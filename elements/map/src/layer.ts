import { EOxMap } from "../main";

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
