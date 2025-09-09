import initVisTimeline from "../../helpers/init-vis-timeline";
import { getElement } from "@eox/elements-utils";

/**
 * First updated lifecycle method for timeslider
 * @param {Object} EOxTimeSlider - The timeslider EOxTimeSlider instance
 */
export default function firstUpdatedMethod(EOxTimeSlider) {
  initVisTimeline(EOxTimeSlider);
  EOxTimeSlider.requestUpdate();

  // Update map reference
  const foundElement = getElement(EOxTimeSlider.for);
  if (foundElement) {
    const EoxMap = /** @type {import("@eox/map").EOxMap} */ (foundElement);
    EOxTimeSlider.eoxMap = EoxMap;
  }
}
