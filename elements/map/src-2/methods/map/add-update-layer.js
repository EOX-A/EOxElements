import { createLayer, updateLayer } from "../../../src/generate";
import { getLayerById } from "../../../src/layer";

export default function addOrUpdateLayerMethod(json, EOxMap) {
  if (!json.interactions) {
    json.interactions = [];
  }
  const id = json.properties?.id;

  const existingLayer = id ? getLayerById(EOxMap, id) : false;
  let layer;
  if (existingLayer) {
    updateLayer(EOxMap, json, existingLayer);
    layer = existingLayer;
  } else {
    layer = createLayer(EOxMap, json);
    EOxMap.map.addLayer(layer);
  }
  return layer;
}
