/**
 * @typedef {import("../../main").EOxTimeControl} EOxTimeControl
 * @typedef {import("../../components/timecontrol-timeline").EOxTimeControlTimeline} EOxTimeControlTimeline
 */

/**
 * Handles filtering of timeline items based on filter events from the eox-itemfilter component.
 * Updates the visual state of timeline items to show which items are filtered, not filtered, or visible.
 *
 * @param {CustomEvent | undefined} e - The filter event containing results, or undefined to use current filter results.
 * @param {EOxTimeControl} EOxTimeControl - The timecontrol component instance.
 */
export default function filterHandlerMethod(e, EOxTimeControl) {
  const EOxItemFilter = /** @type {EOxItemFilter} */ (
    EOxTimeControl.querySelector("eox-itemfilter")
  );
  if (!EOxItemFilter) return;

  const EOxTimeControlTimeline = /** @type {EOxTimeControlTimeline} */ (
    EOxTimeControl.querySelector("eox-timecontrol-timeline")
  );
  if (EOxTimeControlTimeline && EOxTimeControlTimeline.visTimeline) {
    const filterItems = EOxTimeControlTimeline.renderRoot.querySelectorAll(
      ".vis-item.milestone.vis-point",
    );
    filterItems.forEach((item) => {
      item.classList.remove("vis-filtered");
      item.classList.remove("vis-not-filtered");
    });

    const results = e?.detail?.results || EOxItemFilter.results;

    if (EOxTimeControl.items.get().length != results.length) {
      for (const result of results) {
        const item = EOxTimeControlTimeline.renderRoot.querySelector(
          `.vis-item.milestone.vis-point.item-${result.id}`,
        );
        if (item) {
          item.classList.add("vis-filtered");
        }
      }
      const notFilteredItem =
        EOxTimeControlTimeline.renderRoot.querySelectorAll(
          `.vis-item.milestone.vis-point:not(.vis-filtered)`,
        );
      notFilteredItem.forEach((item) => {
        item.classList.add("vis-not-filtered");
      });
    }
  }
}
