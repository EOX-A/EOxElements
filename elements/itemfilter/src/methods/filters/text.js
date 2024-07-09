import { resetFilter } from "../../helpers/index.js";

export function resetTextMethod(EOxItemFilterText) {
  const searchInput =
    EOxItemFilterText.renderRoot.querySelector("input[type='text']");
  searchInput.value = "";
  resetFilter(EOxItemFilterText.filterObject);
  EOxItemFilterText.requestUpdate();
}

export function textInputHandlerMethod(EOxItemFilterText) {
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
