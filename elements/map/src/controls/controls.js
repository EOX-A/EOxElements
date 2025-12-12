import Zoom from "ol/control/Zoom";
import Rotate from "ol/control/Rotate";
import ScaleLine from "ol/control/ScaleLine";
import FullScreen from "ol/control/FullScreen";
import ZoomSlider from "ol/control/ZoomSlider";
import Attribution from "ol/control/Attribution";
import OverviewMap from "ol/control/OverviewMap";
import ZoomToExtent from "ol/control/ZoomToExtent";
import MousePosition from "ol/control/MousePosition";
import { generateLayers } from "../helpers/generate";
import Geolocation from "./geo-location";
import LoadingIndicator from "./loading-indicator";
import serialize from "serialize-javascript";

/**
 * @typedef {import("../types").ControlDictionary} ControlDictionary
 * @typedef {import("../types").ControlType} ControlType
 */

const availableControls = {
  ...{
    Zoom,
    Rotate,
    ScaleLine,
    FullScreen,
    ZoomSlider,
    Attribution,
    OverviewMap,
    ZoomToExtent,
    MousePosition,
  },
  Geolocation,
  LoadingIndicator,
};

/**
 * Adds a control to the map and to the `mapControls` dictionary if it doesn't exist yet.
 * Removes and remakes the control if the options differ; otherwise, leaves the control untouched.
 *
 * @param {import("../main").EOxMap} EOxMap - The map instance.
 * @param {ControlDictionary} existingControls - Dictionary of existing controls.
 * @param {ControlType} type - The type of control to add or update.
 * @param {object} options - Options for the control.
 */
export function addOrUpdateControl(EOxMap, existingControls, type, options) {
  if (existingControls && existingControls[type]) {
    // Check if the current control options differ from the new ones
    const controlHasChanged =
      serialize(existingControls[type]) !== serialize(options);

    if (controlHasChanged) {
      // Remove the old control and add the updated one
      EOxMap.removeControl(type);
      addControl(EOxMap, type, options);
    }
  } else {
    // Add the control if it doesn't already exist
    addControl(EOxMap, type, options);
  }
}

/**
 * Adds a control to the map.
 *
 * @param {import("../main").EOxMap} EOxMap - The map instance.
 * @param {ControlType} type - The type of control to add.
 * @param {object} options - Options for the control.
 */
export function addControl(EOxMap, type, options) {
  // Create a shallow copy of the control options to avoid modifying the original object
  const controlOptions = Object.assign({}, options);

  // If the control has layers (e.g., for OverviewMap), generate them
  if (options && options.layers) {
    controlOptions.layers = generateLayers(EOxMap, options.layers); // Parse layers (e.g., for OverviewMap)
  }

  // Create a new control instance using the type and options
  const control = new availableControls[type](controlOptions);

  // Add the control to the map and store it in the map's controls dictionary
  EOxMap.map.addControl(control);
  EOxMap.mapControls[type] = control;
}
