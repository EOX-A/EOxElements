/**
 * Checks if the filterObject format is date-like.
 *
 * @param {object} filterObject - The filter object.
 * @returns {boolean} True if it is a date, otherwise false.
 */
export default function isDate(filterObject) {
  return Boolean(filterObject.format === "date");
}
