/**
 * Returns whether zoom layer state be enabled or not for a particular layer
 *
 * @param {import("ol/layer").Layer | import("ol/layer").Group} layer - The layer or layer group to check for zoom-based visibility.
 * @param {Boolean} showLayerZoomState - Flag indicating if zoom-based visibility is requested.
 * @returns {Boolean} - Indicates if the zoom-based layer visibility state is required.
 */
export default function isLayerZoomStateRequired(layer, showLayerZoomState) {
  // Retrieve minimum and maximum zoom levels set for the layer
  const minZoom = layer.get("minZoom");
  const maxZoom = layer.get("maxZoom");

  // Check if zoom-based visibility is requested and if minZoom or maxZoom are finite
  if (showLayerZoomState && (minZoom !== -Infinity || maxZoom !== Infinity))
    return true;
  else return false;
}
