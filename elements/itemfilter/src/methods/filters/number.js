import { resetFilter } from "../../helpers/index.js";

/**
 * Resets the text filter to its default state and updates the component.
 *
 * @param {Object} EOxItemFilterNumber - The EOxItemFilterNumber component instance.
 */
export function resetNumberMethod(EOxItemFilterNumber) {
  const searchInput =
    EOxItemFilterNumber.renderRoot.querySelector("input[type='text']");
  searchInput.value = "";
  resetFilter(EOxItemFilterNumber.filterObject);
  EOxItemFilterNumber.requestUpdate();
}

/**
 * Handles input changes for the number filter and updates the filter state accordingly.
 *
 * @param {Object} EOxItemFilterNumber - The EOxItemFilterNumber component instance.
 */
export function numberInputHandlerMethod(EOxItemFilterNumber) {
  console.log(EOxItemFilterNumber.filterObject);
  const searchInput =
    EOxItemFilterNumber.renderRoot.querySelector("input[type='number']");
  EOxItemFilterNumber.filterObject.keys.forEach((key) => {
    EOxItemFilterNumber.filterObject.state[key] = searchInput.value;
  });
  EOxItemFilterNumber.filterObject.dirty = true;
  EOxItemFilterNumber.filterObject.stringifiedState = searchInput.value;
  EOxItemFilterNumber.dispatchEvent(new CustomEvent("filter"));
  if (searchInput.value === "") EOxItemFilterNumber.reset();
}
