/**
 * @param {MessageEvent} event
 * @param {import("../../main").EOxTour} EOxTour
 */
export function handleMessage(event, EOxTour) {
  const data = event.data;
  if (data && data.type === "EOX_TOUR_HANDOFF" && data.tourId === EOxTour.id) {
    let startIndex =
      data.childStepIndex !== undefined ? data.childStepIndex : 0;
    if (startIndex === -1 && EOxTour.config?.steps) {
      startIndex = EOxTour.config.steps.length - 1;
    }
    EOxTour.start(startIndex);
  } else if (
    data &&
    data.type === "EOX_TOUR_RESUME" &&
    data.tourId === EOxTour.id
  ) {
    EOxTour.start(data.parentStepIndex || 0);
  } else if (
    data &&
    data.type === "EOX_TOUR_DESTROY" &&
    data.tourId === EOxTour.id
  ) {
    if (EOxTour.driver) EOxTour.driver.destroy();
  }
}
