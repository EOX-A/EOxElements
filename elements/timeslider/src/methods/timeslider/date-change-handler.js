import setSelectedDate from "../../helpers/set-selected-date";

/**
 * Handles date input changes
 * @param {string} value - Input change value
 * @param {Object} EOxTimeSlider - The timeslider component instance
 */
export default function dateChangeHandler(value, EOxTimeSlider) {
  setSelectedDate(
    value,
    EOxTimeSlider.visTimeline,
    EOxTimeSlider.eoxMap,
    EOxTimeSlider,
  );
}
