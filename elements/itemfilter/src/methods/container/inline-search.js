import resetSearchMethod from "./reset-search.js";

/**
 * Adds the inline search box text to every text filter with `inlineSearch` enabled,
 * then clears the box and closes the dropdown.
 *
 * @param {object} EOxItemFilterContainer - The EOxItemFilterContainer component instance.
 */
export function applyInlineSearchMethod(EOxItemFilterContainer) {
  const input = EOxItemFilterContainer.renderRoot.querySelector(
    "#eox-itemfilter-input-search",
  );
  const text = input.value.trim();
  const inlineSearchFilters = getInlineSearchFilters(EOxItemFilterContainer);
  if (!text || !inlineSearchFilters.length) {
    return;
  }

  inlineSearchFilters.forEach((filter) => {
    // Filter ids only replace the first "|" (see create-filter.js), so they must be escaped
    EOxItemFilterContainer.querySelector(
      `#${CSS.escape(`filter-${filter.key}`.replace("|", "-"))}`,
    )?.appendText(text);
  });

  resetSearchMethod(EOxItemFilterContainer);
  // Focusing the box opens the dropdown, so focus it before closing the dropdown
  input.focus();
  EOxItemFilterContainer.showDropdown = false;
}

/**
 * Handles the keydown event of the inline search box, applying the inline search on Enter.
 *
 * @param {KeyboardEvent} event - The keydown event.
 * @param {object} EOxItemFilterContainer - The EOxItemFilterContainer component instance.
 */
export function handleInlineSearchKeyDownMethod(event, EOxItemFilterContainer) {
  // Enter that confirms an IME composition (e.g. Japanese input) is not a search
  if (event.key !== "Enter" || event.isComposing) return;
  applyInlineSearchMethod(EOxItemFilterContainer);
}

/**
 * Returns the text filters that receive the text of the inline search box.
 *
 * @param {object} EOxItemFilterContainer - The EOxItemFilterContainer component instance.
 * @returns {Array<object>} The text filters with `inlineSearch` enabled.
 */
export function getInlineSearchFilters(EOxItemFilterContainer) {
  return Object.values(EOxItemFilterContainer.filters).filter(
    (filter) => filter.inlineSearch && filter.type === "text",
  );
}
