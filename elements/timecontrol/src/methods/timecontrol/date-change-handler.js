import { setSelectedDate } from "../../helpers/";

/**
 * Handles date input changes
 * @param {Array<string>} value - Input change value
 * @param {Object} EOxTimeControl - The timeslider component instance
 */
export default function dateChangeHandler(value, EOxTimeControl) {
  setSelectedDate(value, EOxTimeControl.eoxMap, EOxTimeControl);
}
