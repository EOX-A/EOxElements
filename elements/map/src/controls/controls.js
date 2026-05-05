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
import { GlobeSwitcher } from "./GlobeSwitcher";
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
  GlobeSwitcher,
};

/**
 * Adds a control to the map and to the `mapControls` dictionary if it doesn't exist yet.
 * Removes and remakes the control if the options differ; otherwise, leaves the control untouched.
 *
 * @param {import("../main").EOxMap} EOxMap - The map instance.
 * @param {ControlDictionary} existingControls - Dictionary of existing controls.
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

  if (type === "MousePosition") {
    controlOptions.projection = controlOptions.projection || "EPSG:4326";
    // format as lat/lng with 4 decimals instead of default long string in meters
    controlOptions.coordinateFormat =
      controlOptions.coordinateFormat ||
      function (coord) {
        const lat = coord[1];
        const lon = coord[0];
        const latDir = lat >= 0 ? "N" : "S";
        const lonDir = lon >= 0 ? "E" : "W";
        return `${Math.abs(lat).toFixed(4)}° ${latDir}, ${Math.abs(lon).toFixed(4)}° ${lonDir}`;
      };
    controlOptions.placeholder =
      controlOptions.placeholder || "No coordinates computed";
  }

  // Apply default positioning if not explicitly provided
  if (!controlOptions.position) {
    if (type === "Zoom" || type === "ZoomSlider" || type === "Geolocation") {
      controlOptions.position = "top-left";
      controlOptions.orientation = controlOptions.orientation || "vertical";
    } else if (
      type === "OverviewMap" ||
      type === "ScaleLine" ||
      type === "MousePosition" ||
      type === "LoadingIndicator"
    ) {
      controlOptions.position = "bottom-left";
    } else if (type === "FullScreen" || type === "GlobeSwitcher") {
      controlOptions.position = "top-right";
      controlOptions.orientation = controlOptions.orientation || "vertical";
    } else if (type === "Attribution") {
      controlOptions.position = "bottom-right";
    }
  }

  // Handle position, target, and orientation from the new controls layout API
  if (controlOptions && controlOptions.position) {
    const regionClass = controlOptions.position;

    let targetElement;
    if (controlOptions.target) {
      if (typeof controlOptions.target === "string") {
        const controlsTargets = EOxMap.getControlsTargets();
        targetElement =
          controlsTargets[controlOptions.target] ||
          EOxMap.shadowRoot?.querySelector(`#${controlOptions.target}`);

        if (!targetElement) {
          targetElement = document.createElement("div");
          targetElement.id = controlOptions.target;
          controlsTargets[controlOptions.target] = targetElement;
        }
      } else {
        targetElement = controlOptions.target;
      }
    } else {
      const uniqueId = `eox-target-${regionClass}`;
      const controlsTargets = EOxMap.getControlsTargets();
      targetElement = controlsTargets[uniqueId];
      if (!targetElement) {
        targetElement = document.createElement("div");
        targetElement.id = uniqueId;
        controlsTargets[uniqueId] = targetElement;
      }
    }

    // Assign orientation class (fallback to vertical)
    targetElement.className = `eox-map-controls-group ${
      controlOptions.orientation === "horizontal" ? "horizontal" : "vertical"
    }`;

    controlOptions.target = targetElement;

    // Wait until Lit rendered shadow DOM before mounting our groups into it
    EOxMap.updateComplete.then(() => {
      const regionContainer = EOxMap.shadowRoot.querySelector(
        `.eox-map-controls-region.${regionClass}`,
      );
      if (regionContainer && targetElement.parentElement !== regionContainer) {
        regionContainer.appendChild(targetElement);
        // Map render is needed after mounting to trigger internal OpenLayers control size calculations (like ZoomSlider thumb size)
        setTimeout(() => EOxMap.map.render(), 0);
      }
    });
  }

  // If the control has layers (e.g., for OverviewMap), generate them
  if (options && options.layers) {
    controlOptions.layers = generateLayers(EOxMap, options.layers); // Parse layers (e.g., for OverviewMap)
  }

  // Special handling for GlobeSwitcher to pass the eox-map instance
  if (type === /** @type {ControlType} */ ("GlobeSwitcher")) {
    controlOptions.eoxMap = EOxMap;
  }
  // Create a new control instance using the type and options
  const control = new availableControls[type](controlOptions);

  // Add the control to the map and store it in the map's controls dictionary
  EOxMap.map.addControl(control);
  EOxMap.mapControls[type] = control;
}
