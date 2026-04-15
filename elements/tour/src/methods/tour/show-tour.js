/**
 * @param {import("../../main").EOxTour} EOxTour
 */
export function showTourOrNot(EOxTour) {
  if (!EOxTour.config || EOxTour.preventAutoStart) return;

  if (EOxTour.showEveryTime) {
    EOxTour.driver.drive();
    return;
  }

  const stored = localStorage.getItem(EOxTour.TOUR_KEY);
  let parsed = null;
  try {
    parsed = JSON.parse(stored);
  } catch (_e) {
    /* ignore */
  }

  const shouldSkip =
    parsed === true ||
    (parsed && typeof parsed === "object" && parsed[EOxTour.id]);

  if (shouldSkip) {
    if (typeof parsed === "boolean" && parsed === true && EOxTour.id) {
      localStorage.removeItem(EOxTour.TOUR_KEY);
      showTourOrNot(EOxTour);
      return;
    }
    return;
  }

  EOxTour.driver.drive();
  if (EOxTour.id) {
    const updated = typeof parsed === "object" && parsed !== null ? parsed : {};
    updated[EOxTour.id] = true;
    localStorage.setItem(EOxTour.TOUR_KEY, JSON.stringify(updated));
  } else {
    localStorage.setItem(EOxTour.TOUR_KEY, "true");
  }
}
