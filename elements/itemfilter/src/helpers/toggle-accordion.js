/**
 * Handles the toggle event for the accordion.
 *
 * @param {Event} event - The toggle event.
 * @param {Element} that
 */
function toggleAccordion(event, that) {
  let detailsElement;

  if (event.detail) {
    detailsElement = event.detail.target;
  } else {
    // detailsElement = event.target;
  }

  if (detailsElement?.classList.contains("details-filter")) {
    if (!detailsElement.open || that?.config.expandMultipleFilters) return;

    that.shadowRoot
      .querySelectorAll("eox-itemfilter-expandcontainer")
      .forEach((container) => {
        const details = container.shadowRoot.querySelector(".details-filter");
        if (details && details !== detailsElement) {
          details.removeAttribute("open");
        }
      });
  } else {
    if (!detailsElement?.open || that?.config.expandMultipleResults) return;

    that.querySelectorAll("details").forEach((details) => {
      if (details !== detailsElement) {
        details.removeAttribute("open");
      }
    });
  }
}

export default toggleAccordion;
