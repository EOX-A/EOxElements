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
    // Check if the current control options differ from the new ones
    const controlHasChanged =
      JSON.stringify(existingControls[type]) !== JSON.stringify(options);

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
  //@ts-expect-error options need to be according to the given control.
  if (options && options.layers) {
    //@ts-expect-error layers is not defined for each control
    controlOptions.layers = generateLayers(EOxMap, options.layers); // Parse layers (e.g., for OverviewMap)
  }

  // Create a new control instance using the type and options
  const control = new availableControls[type](controlOptions);

  // Add the control to the map and store it in the map's controls dictionary
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
      // If controls are provided as an array of control names
      controls.forEach((controlName) => {
        // Create a new control without options
        const control = new availableControls[controlName]({});

        EOxMap.map.addControl(control);
        EOxMap.mapControls[controlName] = control;
      });
    } else {
      // If controls are provided as a dictionary with options
      const keys = Object.keys(controls);
      for (let i = 0; i < keys.length; i++) {
        const controlName = /** @type {ControlType} */ (keys[i]);
        const controlOptions = controls[controlName];

        // If the control has layers (e.g., for OverviewMap), generate them
        //@ts-expect-error layers is not defined for each control
        if (controlOptions && controlOptions.layers) {
          //@ts-expect-error layers is not defined for each control
          controlOptions.layers = generateLayers(EOxMap, controlOptions.layers); // Parse layers (e.g., for OverviewMap)
        }

        // Create a new control instance using the control name and options
        const control = new availableControls[controlName](controlOptions);
        EOxMap.map.addControl(control);
        EOxMap.mapControls[controlName] = control;
      }
    }
  }
}
