import { DragPan, MouseWheelZoom } from "ol/interaction";
import { platformModifierKeyOnly } from "ol/events/condition";

/**
 * Adds interactions for preventing scroll behavior on the specified OpenLayers map.
 *
 * @param {import("ol").Map} map - The OpenLayers map to which the interactions should be added.
 * @param {boolean} customInteraction - state if customInteraction to be added or default
 */
export function addScrollInteractions(map, customInteraction = false) {
  if (customInteraction) {
    map.addInteraction(
      new MouseWheelZoom({
        condition: platformModifierKeyOnly,
      })
    );

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      map.addInteraction(
        new DragPan({
          condition: function (event) {
            return (
              this.getPointerCount() === 2 || platformModifierKeyOnly(event)
            );
          },
        })
      );
    } else map.addInteraction(new DragPan());
  } else {
    map.addInteraction(new MouseWheelZoom());
    map.addInteraction(new DragPan());
  }
}

/**
 * Removes interactions that prevent scroll behavior from the specified OpenLayers map.
 *
 * @param {import("ol").Map} map - The OpenLayers map from which the interactions should be removed.
 */
export function removeDefaultScrollInteractions(map) {
  map
    .getInteractions()
    .getArray()
    .forEach((interaction) => {
      if (
        interaction instanceof MouseWheelZoom ||
        interaction instanceof DragPan
      )
        map.removeInteraction(interaction);
    });
}
