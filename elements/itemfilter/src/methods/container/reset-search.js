import searchFilterMethod from "./search-filter.js";

/**
 * Resets the search input in the EOxItemFilterContainer and triggers a search filter update.
 *
 * @param {object} EOxItemFilterContainer - The EOxItemFilterContainer component instance.
 */
function resetSearchMethod(EOxItemFilterContainer) {
  const input = EOxItemFilterContainer.renderRoot.querySelector(
    "#eox-itemfilter-input-search",
  );
  input.value = "";
  EOxItemFilterContainer.inlineSearchText = "";
  // searchFilterMethod only accepts events targeting a real input element
  const event = { target: input };
  searchFilterMethod(
    /** @type {Event} **/ (/** @type {unknown} **/ (event)),
    EOxItemFilterContainer,
  );
}

export default resetSearchMethod;
