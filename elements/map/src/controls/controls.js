import * as olControls from "ol/control";
import { generateLayers } from "../helpers/generate";
import Geolocation from "./geo-location";
import LoadingIndicator from "./loading-indicator";

/**
 * @typedef {import("../../types").ControlDictionary} ControlDictionary
 * @typedef {import("../../types").ControlType} ControlType
 */

const availableControls = {
  ...olControls,
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
    const controlHasChanged =
      JSON.stringify(existingControls[type]) !== JSON.stringify(options);
    if (controlHasChanged) {
      EOxMap.removeControl(type);
      addControl(EOxMap, type, options);
    }
  } else {
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
  const controlOptions = Object.assign({}, options);

  if (options && options.layers) {
    controlOptions.layers = generateLayers(EOxMap, options.layers); // Parse layers (e.g., for OverviewMap)
  }

  const control = new availableControls[type](controlOptions);
  EOxMap.map.addControl(control);
  EOxMap.mapControls[type] = control;
}

/**
 * Adds initial controls from web component properties, if any are given.
 *
 * @param {import("../main").EOxMap} EOxMap - The map instance.
 */
export function addInitialControls(EOxMap) {
  const controls = /** @type {ControlDictionary | Array<ControlType>} */ (
    EOxMap.controls
  );

  if (controls) {
    if (Array.isArray(controls)) {
      controls.forEach((controlName) => {
        const control = new availableControls[controlName]({});
        EOxMap.map.addControl(control);
        EOxMap.mapControls[controlName] = control;
      });
    } else {
      const keys = Object.keys(controls);
      for (let i = 0; i < keys.length; i++) {
        const controlName = /** @type {ControlType} */ (keys[i]);
        const controlOptions = controls[controlName];

        if (controlOptions && controlOptions.layers) {
          controlOptions.layers = generateLayers(EOxMap, controlOptions.layers); // Parse layers (e.g., for OverviewMap)
        }

        const control = new availableControls[controlName](controlOptions);
        EOxMap.map.addControl(control);
        EOxMap.mapControls[controlName] = control;
      }
    }
  }
}
