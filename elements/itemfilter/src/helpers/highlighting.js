/**
 * Highlights matched text in the Fuse.js search results.
 *
 * @param {Array<Object>} fuseSearchResult - The search results from Fuse.js.
 * @param {string} [highlightClassName="highlight"] - The CSS class name to be used for highlighting.
 * @param {string} [matchKey="title"] - The key of the object where matches should be highlighted.
 * @returns {Array<Object>} The search results with highlighted matches.
 */
function highlight(
  fuseSearchResult,
  highlightClassName = "highlight",
  matchKey = "title"
) {
  /**
   * Sets a value at a specified path within an object.
   *
   * @param {Object} obj - The object to modify.
   * @param {string} path - The dot-separated path specifying the location within the object.
   * @param {*} value - The value to set at the specified path.
   */
  const set = (obj, path, value) => {
    const pathValue = path.split(".");
    let i;

    for (i = 0; i < pathValue.length - 1; i++) {
      obj = obj[pathValue[i]];
    }

    obj[pathValue[i]] = value;
  };

  /**
   * Generates HTML string with highlighted regions.
   *
   * @param {string} inputText - The text to be highlighted.
   * @param {Array<Array<number>>} [regions=[]] - The regions to highlight, specified as an array of [start, end] indices.
   * @returns {string} The HTML string with highlighted regions.
   */
  const generateHighlightedText = (inputText, regions = []) => {
    let content = "";
    let nextUnhighlightedRegionStartingIndex = 0;

    regions.forEach((region) => {
      const lastRegionNextIndex = region[1] + 1;

      content += [
        inputText.substring(nextUnhighlightedRegionStartingIndex, region[0]),
        `<mark class="${highlightClassName}">`,
        inputText.substring(region[0], lastRegionNextIndex),
        "</mark>",
      ].join("");

      nextUnhighlightedRegionStartingIndex = lastRegionNextIndex;
    });

    content += inputText.substring(nextUnhighlightedRegionStartingIndex);

    return content;
  };

  return fuseSearchResult
    .filter(({ matches }) => matches && matches.length) // Filter results with matches
    .map(({ item, matches }) => {
      const highlightedItem = { ...item }; // Create a copy of the item

      matches.forEach((match) => {
        if (match.key !== matchKey) return; // Skip if the match key does not match
        set(
          highlightedItem,
          match.key,
          generateHighlightedText(match.value, match.indices) // Highlight the matched text
        );
      });

      return highlightedItem;
    });
}

export default highlight;
