/**
 * A helper function to determine approximate equality between two coordinates.
 * This function is based on OpenLayers' "equals" method but includes a tolerance (epsilon).
 *
 * @param {import("ol/coordinate")} coordinate1 - The first coordinate to compare.
 * @param {import("ol/coordinate")} coordinate2 - The first coordinate to compare.
 * @param {number?} [epsilon] - The first coordinate to compare.
 *
 * @return {boolean} - True if the coordinates are approximately equal, false otherwise.
 */
export default function coordinatesRoughlyEquals(
  coordinate1,
  coordinate2,
  epsilon = 0.001
) {
  let equals = true;

  // Iterate through each dimension of the coordinates (e.g., [x, y] or [longitude, latitude])
  for (let i = coordinate1.length - 1; i >= 0; --i) {
    // Use a helper function to compare each coordinate component with the specified tolerance (epsilon)
    if (!numbersRoughlyEquals(coordinate1[i], coordinate2[i], epsilon)) {
      equals = false;
      break;
    }
  }

  // Return true if all components are approximately equal, false otherwise
  return equals;
}

/**
 * helper function to roughly compare number, e.g. for coordinate or zoom comparison
 * @param {number} number1 - The first number to compare.
 * @param {number} number2 - The second number to compare.
 * @param {number?} [epsilon] - The first coordinate to compare.
 * @return {boolean} - True if the numbers are approximately equal within the given tolerance, false otherwise.
 */
function numbersRoughlyEquals(number1, number2, epsilon = 0.001) {
  // Check if the absolute difference between the numbers is less than the tolerance
  return Math.abs(number1 - number2) < epsilon;
}
