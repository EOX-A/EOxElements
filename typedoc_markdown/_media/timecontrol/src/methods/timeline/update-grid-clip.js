/**
 * Clips the axis grid to the data rows so it does not show through transparent
 * date labels. Called after redraws to follow changes in axis height.
 *
 * @param {import("../../components/timecontrol-timeline.js").EOxTimeControlTimeline} EOxTimeControlTimeline - The timeline component instance.
 */
export default function updateGridClipMethod(EOxTimeControlTimeline) {
  const container = EOxTimeControlTimeline.getContainer();
  const grid = /** @type {HTMLElement} */ (
    container.querySelector(".vis-time-axis.vis-background")
  );
  const top = /** @type {HTMLElement} */ (
    container.querySelector(".vis-panel.vis-top")
  );
  const bottom = /** @type {HTMLElement} */ (
    container.querySelector(".vis-panel.vis-bottom")
  );

  if (grid && top && bottom) {
    grid.style.clipPath = `inset(${top.offsetHeight}px 0 ${bottom.offsetHeight}px 0)`;
  }
}
