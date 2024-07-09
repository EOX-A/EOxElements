import { resetFilter } from "../../helpers/index.js";
import Fuse from "fuse.js";

export function resetSelectorMethod(EOxItemFilterSelector) {
  removeItemSelectorMethod(-1, EOxItemFilterSelector);

  resetFilter(EOxItemFilterSelector.filterObject);
  EOxItemFilterSelector.requestUpdate();
}

export function removeItemSelectorMethod(index, EOxItemFilterSelector) {
  EOxItemFilterSelector.selectedItems =
    index === -1
      ? []
      : EOxItemFilterSelector.selectedItems.filter((_, i) => i !== index);

  updateSuggestions(EOxItemFilterSelector);
  updateFilterList(EOxItemFilterSelector);
}

export function toggleItemSelectorMethod(item, EOxItemFilterSelector) {
  const itemIndex = EOxItemFilterSelector.selectedItems.indexOf(item);
  if (itemIndex >= 0) {
    EOxItemFilterSelector.selectedItems =
      EOxItemFilterSelector.selectedItems.filter((_, i) => i !== itemIndex);
  } else {
    if (EOxItemFilterSelector.type === "multiselect") {
      EOxItemFilterSelector.selectedItems = [
        ...EOxItemFilterSelector.selectedItems,
        item,
      ];
    } else {
      EOxItemFilterSelector.selectedItems = [item];
      EOxItemFilterSelector.showSuggestions = false;
    }
  }
  EOxItemFilterSelector.query = "";

  updateSuggestions(EOxItemFilterSelector);
  updateFilterList(EOxItemFilterSelector);
}

export function handleInputSelectorMethod(event, EOxItemFilterSelector) {
  EOxItemFilterSelector.query = event.target.value;
  EOxItemFilterSelector.showSuggestions = true;
}

export function handleKeyDownSelectorMethod(event, EOxItemFilterSelector) {
  switch (event.key) {
    case "ArrowDown":
      EOxItemFilterSelector.highlightedIndex = Math.min(
        EOxItemFilterSelector.highlightedIndex + 1,
        EOxItemFilterSelector.filteredSuggestions.length - 1
      );
      break;
    case "ArrowUp":
      EOxItemFilterSelector.highlightedIndex = Math.max(
        EOxItemFilterSelector.highlightedIndex - 1,
        0
      );
      break;
    case "Enter":
      if (EOxItemFilterSelector.highlightedIndex >= 0)
        toggleItemSelectorMethod(
          EOxItemFilterSelector.filteredSuggestions[
            EOxItemFilterSelector.highlightedIndex
          ],
          EOxItemFilterSelector
        );
      break;
    case "Escape":
      EOxItemFilterSelector.showSuggestions = false;
      break;
  }
}

export function updatedSelectorMethod(
  changedProperties,
  EOxItemFilterSelector
) {
  if (changedProperties.has("suggestions")) {
    EOxItemFilterSelector.fuse = new Fuse(EOxItemFilterSelector.suggestions, {
      threshold: 0.3,
    });
    updateSuggestions(EOxItemFilterSelector);
  }
  if (changedProperties.has("query")) updateSuggestions(EOxItemFilterSelector);
}

function updateSuggestions(EOxItemFilterSelector) {
  if (EOxItemFilterSelector.query) {
    EOxItemFilterSelector.filteredSuggestions = EOxItemFilterSelector.fuse
      .search(EOxItemFilterSelector.query)
      .map((result) => result.item);
  } else {
    EOxItemFilterSelector.filteredSuggestions =
      EOxItemFilterSelector.suggestions;
  }
  EOxItemFilterSelector.highlightedIndex = -1;
}

function updateFilterList(EOxItemFilterSelector) {
  Object.keys(EOxItemFilterSelector.filterObject.state).forEach((k) => {
    EOxItemFilterSelector.filterObject.state[k] =
      EOxItemFilterSelector.selectedItems.map((i) => i).includes(k);
  });
  EOxItemFilterSelector.filterObject.stringifiedState =
    Object.keys(EOxItemFilterSelector.filterObject.state)
      .filter((k) => EOxItemFilterSelector.filterObject.state[k])
      .join(", ") || "";

  EOxItemFilterSelector.filterObject.dirty = Boolean(
    EOxItemFilterSelector.filterObject.stringifiedState.length > 0
  );

  EOxItemFilterSelector.dispatchEvent(new CustomEvent("filter"));
  EOxItemFilterSelector.requestUpdate();
}
