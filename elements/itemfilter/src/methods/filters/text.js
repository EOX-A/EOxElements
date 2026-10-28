import { resetFilter } from "../../helpers/index.js";

/**
 * Resets the text filter to its default state and updates the component.
 *
 * @param {object} EOxItemFilterText - The EOxItemFilterText component instance.
 */
export function resetTextMethod(EOxItemFilterText) {
  const searchInput =
    EOxItemFilterText.renderRoot.querySelector("input[type='text']");
  searchInput.value = "";
  resetFilter(EOxItemFilterText.filterObject);
  EOxItemFilterText.requestUpdate();
}

/**
 * Appends text to the text filter input and applies it.
 *
 * @param {string} text - The text to append.
 * @param {object} EOxItemFilterText - The EOxItemFilterText component instance.
 */
export function appendTextMethod(text, EOxItemFilterText) {
  const searchInput =
    EOxItemFilterText.renderRoot.querySelector("input[type='text']");
  searchInput.value = [searchInput.value, text].filter(Boolean).join(" ");
  EOxItemFilterText.debouncedInputHandler();
}

/**
 * Handles input changes for the text filter and updates the filter state accordingly.
 *
 * @param {object} EOxItemFilterText - The EOxItemFilterText component instance.
 */
export function textInputHandlerMethod(EOxItemFilterText) {
  const searchInput =
    EOxItemFilterText.renderRoot.querySelector("input[type='text']");
  EOxItemFilterText.isValid = searchInput.checkValidity();
  EOxItemFilterText.filterObject.keys.forEach((key) => {
    EOxItemFilterText.filterObject.state[key] = searchInput.value;
  });
  EOxItemFilterText.filterObject.dirty = true;
  EOxItemFilterText.filterObject.stringifiedState = searchInput.value;
  EOxItemFilterText.dispatchEvent(new CustomEvent("filter"));
  if (searchInput.value === "") EOxItemFilterText.reset();
}
