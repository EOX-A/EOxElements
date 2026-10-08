import updateTicksMethod from "./update-ticks.js";

/**
 * Preserves the first and last years, hiding intermediate labels that overlap.
 * Re-measures hidden labels so they return when the slider has enough space.
 *
 * @param {import("../../components/timecontrol-slider.js").EOxTimeControlSlider} EOxTimeControlSlider - The slider component instance.
 */
export default function updateYearLabelsMethod(EOxTimeControlSlider) {
  const labels = Array.from(
    /** @type {NodeListOf<HTMLElement>} */ (
      EOxTimeControlSlider.renderRoot.querySelectorAll(
        ".custom-mark-year-label",
      )
    ),
  );
  labels.forEach((label) => {
    label.removeAttribute("data-overlapping");
    label.style.translate = "";
  });
  const container = EOxTimeControlSlider.renderRoot.querySelector(
    ".custom-marks-container",
  );
  if (!container) return;

  // Keep labels within the slider bounds, including partial endpoint years.
  const containerBounds = container.getBoundingClientRect();
  const originalBounds = labels.map((label) => label.getBoundingClientRect());
  labels.forEach((label, index) => {
    const bounds = originalBounds[index];
    const shift = Math.max(
      containerBounds.left - bounds.left,
      Math.min(0, containerBounds.right - bounds.right),
    );
    label.style.translate = `${shift}px`;
  });
  const bounds = labels.map((label) => label.getBoundingClientRect());
  const gap = 4;
  const lastIndex = labels.length - 1;
  let previousRight = -Infinity;
  labels.forEach((label, index) => {
    // Reserve both endpoint labels before fitting the intermediate years.
    if (
      index > 0 &&
      index < lastIndex &&
      (bounds[index].left < previousRight + gap ||
        bounds[index].right + gap > bounds[lastIndex].left)
    ) {
      label.setAttribute("data-overlapping", "");
    } else {
      previousRight = bounds[index].right;
    }
  });
  updateTicksMethod(EOxTimeControlSlider);
}
