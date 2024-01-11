import * as interactions from "ol/interaction";
import Map from "ol/Map.js";

export type InteractionsType =
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
 * @param {InteractionsType} disableInteractions
 * @param {Map} olMap
 */
export function setInteractionInactive(
  disableInteractions: InteractionsType,
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
