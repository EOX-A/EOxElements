/**
 * @typedef {import("../main").EOxTimeControl} EOxTimeControl
 */

/**
 * Updates properties on a child element of the timecontrol component.
 * Finds the element by selector and sets the specified properties on it.
 *
 * @param {EOxTimeControl} EOxTimeControl - The timecontrol component instance.
 * @param {string} selector - CSS selector to find the child element.
 * @param {Object<string, any>} properties - Object with property names as keys and values to set.
 */
export default function updateProps(EOxTimeControl, selector, properties) {
  const Ele = EOxTimeControl.querySelector(selector);
  if (Ele) {
    Object.keys(properties).forEach((key) => {
      Ele[key] = properties[key];
    });
  }
}
