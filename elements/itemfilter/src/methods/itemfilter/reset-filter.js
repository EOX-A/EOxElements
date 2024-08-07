/**
 * Resets all filters in the EOxItemFilter component and triggers a search update.
 *
 * @param {Object} EOxItemFilter - The EOxItemFilter component instance.
 */
export default function resetFilterMethod(EOxItemFilter) {
  EOxItemFilter.renderRoot
    .querySelectorAll("[data-type='filter']")
    .forEach((filter) => {
      if (typeof filter.reset === "function") filter.reset();
    });
  EOxItemFilter.search();
}
