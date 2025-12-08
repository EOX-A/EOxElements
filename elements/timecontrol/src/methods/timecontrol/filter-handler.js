/**
 * Handles filtering of timeline items
 * @param {CustomEvent} e - Filter event
 * @param {Object} EOxTimeControl - The timecontrol component instance
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

    if (
      EOxTimeControlTimeline.visTimeline.itemsData.get().length !=
      results.length
    ) {
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
