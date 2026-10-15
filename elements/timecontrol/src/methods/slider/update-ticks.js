/**
 * Keeps labeled year ticks and minor ticks spaced at least 12 pixels apart.
 * Hidden year labels can still contribute a smaller intermediate tick.
 *
 * @param {import("../../components/timecontrol-slider.js").EOxTimeControlSlider} EOxTimeControlSlider - The slider component instance.
 */
export default function updateTicksMethod(EOxTimeControlSlider) {
  const container = EOxTimeControlSlider.renderRoot.querySelector(
    ".custom-marks-container",
  );
  if (!container) return;

  const width = container.getBoundingClientRect().width;
  const ticks = Array.from(container.querySelectorAll(".custom-mark")).map(
    (element) => {
      const label = element.querySelector(".custom-mark-year-label");
      return {
        element,
        position:
          (parseFloat(/** @type {HTMLElement} */ (element).style.left) / 100) *
          width,
        major: Boolean(label && !label.hasAttribute("data-overlapping")),
      };
    },
  );
  const majorPositions = ticks
    .filter((tick) => tick.major)
    .map((tick) => tick.position);
  let nextMajor = 0;
  let previousPosition = -Infinity;

  ticks.forEach(({ element, position, major }) => {
    element.toggleAttribute("data-minor", !major);
    if (major) {
      element.removeAttribute("data-hidden");
      previousPosition = position;
      nextMajor++;
      return;
    }

    const left = majorPositions[nextMajor - 1] ?? 0;
    const right = majorPositions[nextMajor] ?? width;
    const spacing = 12;
    const hidden =
      position - left < spacing ||
      right - position < spacing ||
      position - previousPosition < spacing;
    element.toggleAttribute("data-hidden", hidden);
    if (!hidden) previousPosition = position;
  });
}
