import { EOxMap } from "../main";
import * as olControls from "ol/control";

type controlType =
  | "Attribution"
  | "FullScreen"
  | "MousePosition"
  | "OverviewMap"
  | "Rotate"
  | "ScaleLine"
  | "ZoomSlider"
  | "ZoomToExtent"
  | "Zoom";

/**
 * adds initial controls from webcomponent attributes, if any are given.
 */
export function addInitialControls(EOxMap: EOxMap) {
  const controls = JSON.parse(
    EOxMap.getAttribute("controls")
  ) as Array<controlType>;
  if (controls && controls.length) {
    for (let i = 0, ii = controls.length; i < ii; i++) {
      const controlName = controls[i];
      const control = new olControls[controlName]();
      EOxMap.map.addControl(control);
      EOxMap.controls[controlName] = control;
    }
  }
}
