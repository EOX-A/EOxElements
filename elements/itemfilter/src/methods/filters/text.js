import { resetFilter } from "../../helpers/index.js";

/**
 * Resets the text filter to its default state and updates the component.
 *
 * @param {Object} EOxItemFilterText - The EOxItemFilterText component instance.
 */
export function resetTextMethod(EOxItemFilterText) {
  const searchInput =
    EOxItemFilterText.renderRoot.querySelector("input[type='text']");
  searchInput.value = "";
  resetFilter(EOxItemFilterText.filterObject);
  EOxItemFilterText.requestUpdate();
}

/**
 * Handles input changes for the text filter and updates the filter state accordingly.
 *
 * @param {Object} EOxItemFilterText - The EOxItemFilterText component instance.
 */
export function textInputHandlerMethod(EOxItemFilterText) {
  console.log(EOxItemFilterText.filterObject)
  const searchInput =
    EOxItemFilterText.renderRoot.querySelector("input[type='text']");
  EOxItemFilterText.filterObject.keys.forEach((key) => {
    EOxItemFilterText.filterObject.state[key] = searchInput.value;
  });
  EOxItemFilterText.filterObject.dirty = true;
  EOxItemFilterText.filterObject.stringifiedState = searchInput.value;
  EOxItemFilterText.dispatchEvent(new CustomEvent("filter"));
  if (searchInput.value === "") EOxItemFilterText.reset();
}
