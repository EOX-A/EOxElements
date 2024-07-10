import resetSearchMethod from "./reset-search.js";

export function handleFormClickMethod(event, EOxItemFilterContainer) {
  if (EOxItemFilterContainer.inlineMode) event.stopPropagation();
}

export function handleShowDropdownOnFocusMethod(EOxItemFilterContainer) {
  if (EOxItemFilterContainer.inlineMode) {
    EOxItemFilterContainer.showDropdown = true;
    EOxItemFilterContainer.requestUpdate();
  }
}

export function handleToggleDropdownMethod(event, EOxItemFilterContainer) {
  if (EOxItemFilterContainer.inlineMode) {
    event.stopPropagation();
    EOxItemFilterContainer.showDropdown = true;
    EOxItemFilterContainer.requestUpdate();
  }
}

export function handleKeyDownMethod(event, EOxItemFilterContainer) {
  if (
    EOxItemFilterContainer.inlineMode &&
    event.key === "Escape" &&
    EOxItemFilterContainer.showDropdown
  ) {
    resetSearchMethod(EOxItemFilterContainer);
    EOxItemFilterContainer.showDropdown = false;
    EOxItemFilterContainer.requestUpdate();
  }
}

export function handleClickOutsideMethod(event, EOxItemFilterContainer) {
  if (
    EOxItemFilterContainer.inlineMode &&
    event.target.tagName !== "DROPDOWN-FORM" &&
    event.target.tagName !== "EOX-ITEMFILTER" &&
    EOxItemFilterContainer.showDropdown
  ) {
    console.log(event.target.tagName);
    resetSearchMethod(EOxItemFilterContainer);
    EOxItemFilterContainer.showDropdown = false;
    EOxItemFilterContainer.requestUpdate();
  }
}
