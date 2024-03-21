import { EOxMap } from "../../main";
import * as olControls from "ol/control";
import { generateLayers } from "../generate";
import Geolocation from "./Geolocation";

const availableControls = {
  ...olControls,
  Geolocation,
};

export type controlType =
  | "Attribution"
  | "FullScreen"
  | "MousePosition"
  | "OverviewMap"
  | "Rotate"
  | "ScaleLine"
  | "ZoomSlider"
  | "ZoomToExtent"
  | "Zoom"
  | "Geolocation";

export type controlDictionary = {
  [key in controlType]?: object;
};

/**
 * adds a control to the map and to the `mapControls`-Dictionary, if it didnt exist yet.
 * removes and remakes the control if the options differ
 * otherwise leaves the control untouched
 * @param EOxMap
 * @param type
 * @param options
 */
export function addOrUpdateControl(
  EOxMap: EOxMap,
  existingControls: controlDictionary,
  type: controlType,
  options: object
) {
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
 * adds initial controls from webcomponent properties, if any are given.
 */
export function addControl(EOxMap: EOxMap, type: controlType, options: object) {
  const controlOptions = Object.assign({}, options);
  // @ts-ignore
  if (options && options.layers) {
    //@ts-ignore
    controlOptions.layers = generateLayers(EOxMap, options.layers); // parse layers (OverviewMap)
  }
  const control = new availableControls[type](controlOptions);
  EOxMap.map.addControl(control);
  EOxMap.mapControls[type] = control;
}

/**
 * adds initial controls from webcomponent properties, if any are given.
 */
export function addInitialControls(EOxMap: EOxMap) {
  const controls = EOxMap.controls as controlDictionary | Array<controlType>;
  if (controls) {
    if (Array.isArray(controls)) {
      controls.forEach((controlName) => {
        const control = new availableControls[controlName]({});
        EOxMap.map.addControl(control);
        EOxMap.mapControls[controlName] = control;
      });
    } else {
      const keys = Object.keys(controls);
      for (let i = 0, ii = keys.length; i < ii; i++) {
        const controlName = keys[i] as controlType;
        const controlOptions = controls[controlName];
        // @ts-ignore
        if (controlOptions && controlOptions.layers) {
          // @ts-ignore
          controlOptions.layers = generateLayers(controlOptions.layers); // parse layers (OverviewMap)
        }
        const control = new availableControls[controlName](controlOptions);
        EOxMap.map.addControl(control);
        EOxMap.mapControls[controlName] = control;
      }
    }
  }
}
