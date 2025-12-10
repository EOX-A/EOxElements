/**
 * @typedef {import("../types").DateRange} DateRange
 * @typedef {import("../main").EOxTimeControl} EOxTimeControl
 */

/**
 * Updates the date range on multiple child components of the timecontrol element.
 * Iterates through the provided selectors, finds each matching child element, and calls
 * setDateRange on it with the provided date range and data.
 *
 * @param {EOxTimeControl} EOxTimeControl - The timecontrol component instance.
 * @param {Array<string>} selectors - Array of CSS selectors for child elements to update.
 * @param {DateRange} dateRange - The date range as [startDate, endDate] in ISO format.
 * @param {Array<any>} [data] - Optional data array to pass to setDateRange method.
 */
export default function updateChildrenDateRange(
  EOxTimeControl,
  selectors,
  dateRange,
  data,
) {
  selectors.forEach((selector) => {
    const Ele =
      /** @type {EOxTimeControlDate | EOxTimeControlSlider | EOxTimeControlTimeline | EOxTimeControlTimelapse | EOxTimeControlPicker} */ (
        EOxTimeControl.querySelector(selector)
      );
    if (Ele) {
      Ele.setDateRange(dateRange, data);
    }
  });
}
