/**
 * a helper function to determin approximate equality between 2 coordinates.
 * based on ol "equals"
 * @param {import("ol/coordinate")} coordinate1 First coordinate.
 * @param {import("ol/coordinate")} coordinate2 Second coordinate.
 * @param {number?} epsilon tolerance
 * @return {boolean} The two coordinates are equal.
 */
export default function coordinatesRoughlyEquals(
  coordinate1,
  coordinate2,
  epsilon = 0.001
) {
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
function numbersRoughlyEquals(number1, number2, epsilon = 0.001) {
  return Math.abs(number1 - number2) < epsilon;
}
