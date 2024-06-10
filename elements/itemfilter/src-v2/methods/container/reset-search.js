import searchFilterMethod from "./search-filter.js";

function resetSearchMethod(EOxItemFilterContainer) {
  EOxItemFilterContainer.renderRoot.querySelector(
    "#itemfilter-input-search"
  ).value = "";
  const event = { target: { value: "" } };
  searchFilterMethod(event, EOxItemFilterContainer);
}

export default resetSearchMethod;
