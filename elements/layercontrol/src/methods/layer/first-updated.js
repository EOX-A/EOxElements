import {
  isLayerVisibleBasedOnZoomState,
  isLayerZoomStateRequired,
} from "../../helpers";
import { dispatchElementEvent } from "@eox/elements-utils";
import { unByKey } from "ol/Observable.js";

/**
 * Check and update layer zoom visibility at beginning
 * and subscribe to layer/view changes for the current connection.
 *
 * @param {import("../../components/layer").EOxLayerControlLayer} EOxLayerControlLayer - Instance of EOxLayerControlLayer
 * @returns {() => void} Releases all subscriptions for this connection.
 */
const firstUpdatedMethod = (EOxLayerControlLayer) => {
  /**
   * Check and update layer visibility based on zoom level
   * and only update DOM if visibility gets updated
   */
  const updateLayerZoomVisibility = () => {
    const newLayerVisibilityBasedOnZoom = isLayerVisibleBasedOnZoomState(
      EOxLayerControlLayer.layer,
      EOxLayerControlLayer.map,
      EOxLayerControlLayer.showLayerZoomState,
    );

    let visibilityChanged = false;

    // Checking if visibility changed or not and updating `currLayerVisibilityBasedOnZoom`
    if (
      !newLayerVisibilityBasedOnZoom &&
      EOxLayerControlLayer.currLayerVisibilityBasedOnZoom
    ) {
      EOxLayerControlLayer.currLayerVisibilityBasedOnZoom = false;
      visibilityChanged = true;
    } else if (
      newLayerVisibilityBasedOnZoom &&
      !EOxLayerControlLayer.currLayerVisibilityBasedOnZoom
    ) {
      EOxLayerControlLayer.currLayerVisibilityBasedOnZoom = true;
      visibilityChanged = true;
    }

    // if visibilityChanged trigger UI update
    if (visibilityChanged) {
      EOxLayerControlLayer.requestUpdate();
      dispatchElementEvent(EOxLayerControlLayer, "change:resolution", {
        activity: false,
      });
    }
  };

  /** @type {import("ol/events").EventsKey | undefined} */
  let resolutionKey;
  const subscribeView = () => {
    if (resolutionKey) unByKey(resolutionKey);
    resolutionKey = undefined;
    if (
      EOxLayerControlLayer.map &&
      isLayerZoomStateRequired(
        EOxLayerControlLayer.layer,
        EOxLayerControlLayer.showLayerZoomState,
      )
    ) {
      resolutionKey = EOxLayerControlLayer.map
        .getView()
        .on("change:resolution", updateLayerZoomVisibility);
    }
    if (EOxLayerControlLayer.map) updateLayerZoomVisibility();
  };
  subscribeView();
  const viewKey = EOxLayerControlLayer.map?.on?.("change:view", subscribeView);

  // Listen for dynamic property changes (e.g. GeoZarr layerDatetime, layerConfig, timeControlValues)
  const propertyKey = EOxLayerControlLayer.layer?.on?.(
    "propertychange",
    (e) => {
      const propEvent = /** @type {import("ol/Object").ObjectEvent} */ (e);
      if (
        propEvent.key === "layerDatetime" ||
        propEvent.key === "layerConfig" ||
        propEvent.key === "timeControlValues"
      ) {
        EOxLayerControlLayer.requestUpdate();
      }
    },
  );

  return () => {
    if (resolutionKey) unByKey(resolutionKey);
    if (viewKey) unByKey(viewKey);
    if (propertyKey) unByKey(propertyKey);
  };
};

export default firstUpdatedMethod;
