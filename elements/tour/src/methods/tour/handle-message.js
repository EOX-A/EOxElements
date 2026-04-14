/**
 * @param {MessageEvent} event
 * @param {import("../../main").EOxTour} EOxTour
 */
export async function handleMessage(event, EOxTour) {
  const data = event.data;
  if (!data || data.tourId !== EOxTour.id) return;

  if (data.type === "EOX_TOUR_HANDOFF") {
    let shouldUpdateConfig = true;
    if (EOxTour.config?.steps?.length > 0 && !data.forceConfigOverride) {
      shouldUpdateConfig = false;
    }

    if (shouldUpdateConfig && data.config) {
      EOxTour.config = data.config;
      await EOxTour.updateComplete;
    }

    // Support both unified index and advanced explicit offsets
    let startIndex = data.stepIndex !== undefined ? data.stepIndex : 0;
    if (data.childStepIndex !== undefined) {
      startIndex = data.childStepIndex;
    }

    if (startIndex === -1 && EOxTour.config?.steps) {
      startIndex = EOxTour.config.steps.length - 1;
    }

    EOxTour.start(startIndex);
  } else if (data.type === "EOX_TOUR_RESUME") {
    const startIndex = data.parentStepIndex ?? data.stepIndex ?? 0;
    EOxTour.start(startIndex);
  } else if (data.type === "EOX_TOUR_DESTROY") {
    if (EOxTour.driver) EOxTour.driver.destroy();
  }
}
