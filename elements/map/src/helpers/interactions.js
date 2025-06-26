import DragPan from "ol/interaction/DragPan.js";
import MouseWheelZoom from "ol/interaction/MouseWheelZoom.js";
import PinchZoom from "ol/interaction/PinchZoom.js";
import { platformModifierKeyOnly } from "ol/events/condition";

/**
 * Adds interactions to control scroll behavior on the specified OpenLayers map.
 * If `customInteraction` is true, enables zooming only with a platform-specific modifier key (e.g., `Ctrl` on Windows).
 * On touch devices, allows dragging with two fingers or a modifier key.
 *
 * @param {import("ol").Map} map - The OpenLayers map to which the interactions should be added.
 * @param {boolean} customInteraction - Indicates whether to use custom interactions (default: false).
 */
export function addScrollInteractions(map, customInteraction = false) {
  if (customInteraction) {
    // Add MouseWheelZoom interaction that only works when a platform modifier key (e.g., Ctrl) is pressed
    map.addInteraction(
      new MouseWheelZoom({
        condition: platformModifierKeyOnly,
      }),
    );

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      // On touch devices, allow dragging with two fingers or a modifier key
      map.addInteraction(
        new DragPan({
          condition: function (event) {
            // @ts-expect-error - 'this' implicitly has type 'any'
            const pointerCount = this.getPointerCount();
            return pointerCount === 2 || platformModifierKeyOnly(event);
          },
        }),
      );
    } else map.addInteraction(new DragPan()); // On non-touch devices, add the default DragPan interaction

    // Disable default PinchZoom interaction
    // This is to prevent pinch zooming on touch devices when the custom interaction is active
    const pinchZoom = new PinchZoom();
    pinchZoom.setActive(false);
    map.addInteraction(pinchZoom);
  } else {
    // Add default MouseWheelZoom, DragPan and PinchZoom interactions
    map.addInteraction(new MouseWheelZoom());
    map.addInteraction(new DragPan());
    map.addInteraction(new PinchZoom());
  }
}

/**
 * Removes interactions that prevent scroll behavior from the specified OpenLayers map.
 *
 * @param {import("ol").Map} map - The OpenLayers map from which the interactions should be removed.
 */
export function removeDefaultScrollInteractions(map) {
  // Iterate through all interactions on the map and remove those related to scrolling (MouseWheelZoom and DragPan)
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
