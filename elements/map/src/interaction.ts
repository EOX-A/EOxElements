import * as interactions from "ol/interaction";
import Map from "ol/Map.js";

export type DisableInteractionsType =
  | [
      "DragRotate",
      "DoubleClickZoom",
      "DragPan",
      "PinchRotate",
      "PinchZoom",
      "KeyboardPan",
      "KeyboardZoom",
      "MouseWheelZoom",
      "DragZoom"
    ]
  | [];

/**
 * Loop through interactions available on map
 * and setActive to `false
 * `
 * @param {DisableInteractionsType} disableInteractions
 * @param {Map} olMap
 */
export function setInteractionInactive(
  disableInteractions: DisableInteractionsType,
  olMap: Map
) {
  olMap.getInteractions().forEach(function (interaction) {
    disableInteractions.forEach(
      (type) =>
        interaction instanceof interactions[type] &&
        interaction.setActive(false)
    );
  });
}
