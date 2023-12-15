import {
  isLayerVisibleBasedOnZoomState,
  isLayerZoomStateRequired,
} from "../../helpers";

/**
 * Check and update layer zoom visibility at beginning
 * and register "change:resolution" ones at the beginning if `showLayerZoomState` is present
 *
 * @param {import("../../components/layer").EOxLayerControlLayer} EOxLayerControlLayer - Instance of EOxLayerControlLayer
 */
const firstUpdated = (EOxLayerControlLayer) => {
  /**
   * Check and update layer visibility based on zoom level
   * and only update DOM if visibility gets updated
   */
  const updateLayerZoomVisibility = () => {
    const newLayerVisibilityBasedOnZoom = isLayerVisibleBasedOnZoomState(
      EOxLayerControlLayer.layer,
      EOxLayerControlLayer.map,
      EOxLayerControlLayer.showLayerZoomState
    );

    let visibilityChanged = false;

    // Checking if visibility changed or not and updating `currLayerVisibilityBasedOnZoom`
    if (
      !newLayerVisibilityBasedOnZoom &&
      EOxLayerControlLayer.currLayerVisibilityBasedOnZoom
    )
      (EOxLayerControlLayer.currLayerVisibilityBasedOnZoom = false),
        (visibilityChanged = true);
    else if (
      newLayerVisibilityBasedOnZoom &&
      !EOxLayerControlLayer.currLayerVisibilityBasedOnZoom
    )
      (EOxLayerControlLayer.currLayerVisibilityBasedOnZoom = true),
        (visibilityChanged = true);

    // if visibilityChanged trigger UI update
    if (visibilityChanged) {
      EOxLayerControlLayer.requestUpdate();
      EOxLayerControlLayer.dispatchEvent(
        new CustomEvent("change:resolution", { bubbles: true })
      );
    }
  };

  if (
    isLayerZoomStateRequired(
      EOxLayerControlLayer.layer,
      EOxLayerControlLayer.showLayerZoomState
    )
  ) {
    updateLayerZoomVisibility();

    // Initialize change:resolution event ones
    EOxLayerControlLayer.map
      .getView()
      .on("change:resolution", () => updateLayerZoomVisibility());
  }
};

export default firstUpdated;
