import { createLayer, updateLayer, getLayerById } from "../../helpers";

/**
 * @typedef {import("../../../types").EoxLayer} EoxLayer
 * */

/**
 * Adds a new layer to the map or updates an existing layer based on the provided JSON data.
 *
 * @param {EoxLayer} json - The JSON data containing layer properties and interactions.
 * @param {import("../../main").EOxMap} EOxMap - The map object where the layer will be added or updated.
 * @returns {Object} - The newly created or updated layer object.
 */
export default function addOrUpdateLayerMethod(json, EOxMap) {
  // Initialize interactions property if it doesn't exist in the JSON data
  if (!json.interactions) json.interactions = [];

  // Retrieve the layer ID from the JSON properties
  const id = json.properties?.id;

  // Check if a layer with the specified ID already exists on the map
  const existingLayer = id ? getLayerById(EOxMap, id) : false;
  let layer;

  if (existingLayer) {
    // If the layer exists, update it with the new JSON data
    updateLayer(EOxMap, json, existingLayer);
    layer = existingLayer;
  } else {
    // If the layer does not exist, create a new layer and add it to the map
    layer = createLayer(EOxMap, json);
    EOxMap.map.addLayer(layer);
  }

  // Return the created or updated layer
  return layer;
}
