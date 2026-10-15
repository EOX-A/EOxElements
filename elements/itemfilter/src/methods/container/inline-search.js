import searchFilterMethod from "./search-filter.js";

/**
 * On Enter, applies the inline search box text to every text filter flagged with `inlineSearch`,
 * then clears the box and closes the dropdown.
 *
 * @param {KeyboardEvent} event - The keydown event of the inline search box.
 * @param {Object} EOxItemFilterContainer - The EOxItemFilterContainer component instance.
 */
function inlineSearchMethod(event, EOxItemFilterContainer) {
  if (
    event.key !== "Enter" ||
    // Enter that confirms an IME composition is not a search
    event.isComposing ||
    !(event.target instanceof HTMLInputElement)
  ) {
    return;
  }
  const inputText = event.target.value;
  const inlineSearchFilters = Object.values(
    EOxItemFilterContainer.filters,
  ).filter((filter) => filter.inlineSearch && filter.type === "text");
  if (!inputText || !inlineSearchFilters.length) {
    return;
  }

  inlineSearchFilters.forEach((filter) => {
    const textFilter = EOxItemFilterContainer.querySelector(
      `#${CSS.escape(`filter-${filter.key}`.replace("|", "-"))}`,
    );
    if (!textFilter) return;
    const textInput = textFilter.renderRoot.querySelector("input[type='text']");
    textInput.value = [textInput.value, inputText].filter(Boolean).join(" ");
    textFilter.debouncedInputHandler();
  });

  event.target.value = "";
  searchFilterMethod(event, EOxItemFilterContainer);
  EOxItemFilterContainer.showDropdown = false;
}

export default inlineSearchMethod;
