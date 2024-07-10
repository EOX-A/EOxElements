import searchFilterMethod from "./search-filter.js";

/**
 * Resets the search input in the EOxItemFilterContainer and triggers a search filter update.
 *
 * @param {Object} EOxItemFilterContainer - The EOxItemFilterContainer component instance.
 */
function resetSearchMethod(EOxItemFilterContainer) {
  EOxItemFilterContainer.renderRoot.querySelector(
    "#itemfilter-input-search"
  ).value = "";
  const event = { target: { value: "" } };
  searchFilterMethod(event, EOxItemFilterContainer);
}

export default resetSearchMethod;
