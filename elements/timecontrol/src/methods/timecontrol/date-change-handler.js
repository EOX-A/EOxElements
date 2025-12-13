import { setSelectedDate } from "../../helpers/";

/**
 * @typedef {import("../../types").DateRange} DateRange
 * @typedef {import("../../main").EOxTimeControl} EOxTimeControl
 */

/**
 * Handles date change events from timecontrol child components.
 * Updates the selected date on map layers by calling the setSelectedDate helper function.
 *
 * @param {DateRange} value - The new date range as [startDate, endDate] in ISO format.
 * @param {EOxTimeControl} EOxTimeControl - The timecontrol component instance.
 */
export default function dateChangeHandler(value, EOxTimeControl) {
  setSelectedDate(value, EOxTimeControl.eoxMap, EOxTimeControl);
}
