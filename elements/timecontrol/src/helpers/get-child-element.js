/**
 * @typedef {import("../types").EOxTimeControlType} EOxTimeControlType
 * @typedef {import("../types").EOxTimeControlChild} EOxTimeControlChild
 */

/**
 * Gets a child element of the timecontrol component.
 *
 * @param {EOxTimeControlType} EOxTimeControl - The timecontrol component instance.
 * @param {string} selector - CSS selector to find the child element.
 * @returns {EOxTimeControlChild | null} The child element or null if not found.
 */
export default function getChildElement(EOxTimeControl, selector) {
  return EOxTimeControl.querySelector(selector);
}
