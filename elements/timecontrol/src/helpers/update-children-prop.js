/**
 * @typedef {import("../types").DateRange} DateRange
 * @typedef {import("../main").EOxTimeControl} EOxTimeControl
 */

/**
 * Updates properties on multiple child components of the timecontrol element.
 * Iterates through the provided selectors, finds each matching child element, and sets the provided properties on it.
 *
 * @param {EOxTimeControl} EOxTimeControl - The timecontrol component instance.
 * @param {Array<string>} selectors - Array of CSS selectors for child elements to update.
 * @param {Object<string, any>} values - Object with property names as keys and values to set.
 */
export default function updateChildrenProp(EOxTimeControl, selectors, values) {
  selectors.forEach((selector) => {
    const Ele =
      /** @type {EOxTimeControlDate | EOxTimeControlSlider | EOxTimeControlTimeline | EOxTimeControlTimelapse | EOxTimeControlPicker} */ (
        EOxTimeControl.querySelector(selector)
      );
    if (Ele) {
      Object.keys(values).forEach((key) => {
        if (Ele[key] !== undefined) {
          Ele[key] = values[key];
        }
      });
    }
  });
}
