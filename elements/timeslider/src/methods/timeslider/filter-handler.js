/**
 * Handles filtering of timeline items
 * @param {CustomEvent} e - Filter event
 * @param {Object} EOxTimeSlider - The timeslider component instance
 */
export default function filterHandler(e, EOxTimeSlider) {
  const filterItems = EOxTimeSlider.renderRoot.querySelectorAll(
    ".vis-item.milestone.vis-point",
  );
  filterItems.forEach((item) => {
    item.classList.remove("vis-filtered");
    item.classList.remove("vis-not-filtered");
  });

  if (
    EOxTimeSlider.visTimeline.itemsData.get().length != e.detail.results.length
  ) {
    for (const result of e.detail.results) {
      const item = EOxTimeSlider.renderRoot.querySelector(
        `.vis-item.milestone.vis-point.item-${result.id}`,
      );
      if (item) {
        item.classList.add("vis-filtered");
      }
    }
    const notFilteredItem = EOxTimeSlider.renderRoot.querySelectorAll(
      `.vis-item.milestone.vis-point:not(.vis-filtered)`,
    );
    notFilteredItem.forEach((item) => {
      item.classList.add("vis-not-filtered");
    });
  }
}
