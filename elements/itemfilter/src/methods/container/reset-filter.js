/**
 * Resets a specific filter in the EOxItemFilterContainer based on the event target.
 *
 * @param {Event} event - The event that triggers the filter reset.
 * @param {object} EOxItemFilterContainer - The EOxItemFilterContainer component instance.
 */
function resetFilterMethod(event, EOxItemFilterContainer) {
  if (!(event.target instanceof HTMLElement)) {
    return;
  }
  const filterKey = event.target.getAttribute("data-close").replace("|", "-");
  // Filter ids only replace the first "|" (see create-filter.js), so they must be escaped
  EOxItemFilterContainer.querySelector(
    `#${CSS.escape(`filter-${filterKey}`)}`,
  ).reset();
  EOxItemFilterContainer.dispatchEvent(new CustomEvent("filter"));
  EOxItemFilterContainer.requestUpdate();
}

export default resetFilterMethod;
