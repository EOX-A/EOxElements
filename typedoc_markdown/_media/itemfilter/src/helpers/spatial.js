import booleanIntersects from "@turf/boolean-intersects";
import booleanWithin from "@turf/boolean-within";

/**
 * Checks if the item geometry intersects with the filter geometry.
 *
 * @param {Object} itemGeometry - The geometry of the item to check.
 * @param {Object} filterGeometry - The geometry of the filter to check against.
 * @returns {boolean} True if the item geometry intersects with the filter geometry, otherwise false.
 */
export const intersects = (itemGeometry, filterGeometry) => {
  // If no filter geometry is provided, assume it intersects
  if (!filterGeometry) {
    return true;
  }
  // Use Turf.js booleanIntersects to check for intersection
  return booleanIntersects(itemGeometry, filterGeometry);
};

/**
 * Checks if the item geometry is within the filter geometry.
 *
 * @param {Object} itemGeometry - The geometry of the item to check.
 * @param {Object} filterGeometry - The geometry of the filter to check against.
 * @returns {boolean} True if the item geometry is within the filter geometry, otherwise false.
 */
export const within = (itemGeometry, filterGeometry) => {
  // If no filter geometry is provided, assume it is within
  if (!filterGeometry) {
    return true;
  }

  // Use Turf.js booleanWithin to check if the item is within the filter
  return booleanWithin(itemGeometry, filterGeometry);
};
