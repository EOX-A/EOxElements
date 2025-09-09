import setSelectedDate from "../../helpers/set-selected-date";

/**
 * Handles date input changes
 * @param {Event} e - Input change event
 * @param {Object} EOxTimeSlider - The timeslider component instance
 */
export default function dateChangeHandler(e, EOxTimeSlider) {
  setSelectedDate(
    e.target.value,
    EOxTimeSlider.visTimeline,
    EOxTimeSlider.eoxMap,
    EOxTimeSlider,
  );
}
