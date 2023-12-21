import { isLayerZoomStateRequired } from ".";

/**
 * Determines layer visibility state based on minZoom and maxZoom
 * concerning the current zoom level.
 *
 * @param {import("ol/layer").Layer | import("ol/layer").Group} layer - The layer or layer group to check visibility for.
 * @param {import("ol").Map} map - The map instance to retrieve the current zoom level.
 * @param {Boolean} showLayerZoomState - Flag indicating if zoom-based visibility is enabled.
 * @returns {Boolean} - The visibility state of the layer based on zoom levels.
 */
export default function isLayerVisibleBasedOnZoomState(
  layer,
  map,
  showLayerZoomState
) {
  // If layer or map is unavailable or layer zoom state is not required, return false
  if (!layer || !map) return false;

  if (!isLayerZoomStateRequired(layer, showLayerZoomState)) return true;

  // Retrieve minimum and maximum zoom levels set for the layer
  const minZoom = layer.get("minZoom");
  const maxZoom = layer.get("maxZoom");

  // Retrieve the current zoom level of the map
  const zoom = map.getView().getZoom();

  // Return the visibility state of the layer
  return zoom > minZoom && zoom < maxZoom ? true : false;
}
