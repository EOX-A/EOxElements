import Fuse from "fuse.js";
import { INLINE_SEARCH_TITLE_THRESHOLD } from "../../enums/index.js";

/**
 * Filters the items in the EOxItemFilterContainer based on the search input.
 *
 * @param {Event} event - The input event that triggers the search.
 * @param {Object} EOxItemFilterContainer - The EOxItemFilterContainer component instance.
 */
function searchFilterMethod(event, EOxItemFilterContainer) {
  const isInlineSearch = (filter) =>
    filter.inlineSearch && filter.type === "text";
  // Create a Fuse instance for fuzzy searching with the filter properties
  const fuse = new Fuse(EOxItemFilterContainer.filterProperties, {
    keys: ["title"],
    // Stricter title matching for inlineSearch
    ...(EOxItemFilterContainer.filterProperties.some(isInlineSearch) && {
      threshold: INLINE_SEARCH_TITLE_THRESHOLD,
    }),
  });
  if (!(event.target instanceof HTMLInputElement)) {
    return;
  }
  const inputText = event.target.value;
  const result = fuse.search(inputText);
  const matches = result.map((res) => res.item.key || res.item.keys.join("|"));

  // Update the display of filter elements based on the search results
  Object.keys(EOxItemFilterContainer.filters).forEach((filter) => {
    // Hidden in inline mode (see main.js), as the inline search box is its input
    if (isInlineSearch(EOxItemFilterContainer.filters[filter])) return;
    EOxItemFilterContainer.querySelector(
      `[data-details="${filter}"]`,
    ).parentElement.style.display =
      matches.includes(filter) || !inputText ? "" : "none";
  });
}

export default searchFilterMethod;
