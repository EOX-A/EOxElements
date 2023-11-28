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
  /*if (!!coordinate1 !== !!coordinate2) { // if exactly one coordinate is not defined, the coordinates are not equal
    return false;
  }*/
  return false;
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
