import { DragPan, MouseWheelZoom } from "ol/interaction";
import { platformModifierKeyOnly } from "ol/events/condition";

/**
 * a helper function to determin approximate equality between 2 coordinates.
 * based on ol "equals"
 * @param {import("ol/coordinate")} coordinate1 First coordinate.
 * @param {import("ol/coordinate")} coordinate2 Second coordinate.
 * @param {number?} epsilon tolerance
 * @return {boolean} The two coordinates are equal.
 */
export function coordinatesRoughlyEquals(
  coordinate1: import("ol/coordinate").Coordinate,
  coordinate2: import("ol/coordinate").Coordinate,
  epsilon = 0.001
): boolean {
  let equals = true;
  for (let i = coordinate1.length - 1; i >= 0; --i) {
    if (!numbersRoughlyEquals(coordinate1[i], coordinate2[i], epsilon)) {
      equals = false;
      break;
    }
  }
  return equals;
}

/**
 * helper function to roughly compare number, e.g. for coordinate or zoom comparison
 * @param {number} number1
 * @param {number} number2
 * @param {number?} epsilon tolerance
 * @return {boolean}
 */
export function numbersRoughlyEquals(
  number1: number,
  number2: number,
  epsilon = 0.001
): boolean {
  return Math.abs(number1 - number2) < epsilon;
}

/**
 * Adds interactions for preventing scroll behavior on the specified OpenLayers map.
 *
 * @param {import("ol").Map} map - The OpenLayers map to which the interactions should be added.
 * @param {boolean} customInteraction - state if customInteraction to be added or default
 */
export function addScrollInteractions(
  map: import("ol").Map,
  customInteraction: boolean = false
) {
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
              (this as DragPan).getPointerCount() === 2 ||
              platformModifierKeyOnly(event)
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
export function removeDefaultScrollInteractions(map: import("ol").Map) {
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
