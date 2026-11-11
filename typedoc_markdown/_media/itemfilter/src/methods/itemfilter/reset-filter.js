/**
 * Resets all filters in the EOxItemFilter component and triggers a search update.
 *
 * @param {object} EOxItemFilter - The EOxItemFilter component instance.
 * @param {boolean} [isUser=false] - Whether the reset was triggered by user interaction.
 */
export default function resetFilterMethod(EOxItemFilter, isUser = false) {
  EOxItemFilter.renderRoot
    .querySelectorAll("[data-type='filter']")
    .forEach((filter) => {
      if (typeof filter.reset === "function") filter.reset();
    });
  EOxItemFilter.search(isUser);
}
