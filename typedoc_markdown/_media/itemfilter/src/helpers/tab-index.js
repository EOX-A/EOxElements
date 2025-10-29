/**
 * Calculates the tab index based on the main index and sub-index.
 *
 * @param {number} index - The main index.
 * @param {number} subIndex - The sub-index.
 * @returns {number} The calculated tab index.
 */
export default function getTabIndex(index, subIndex) {
  const totalComponentInAFilter = 2;

  // Calculate the tab index based on the main index and sub-index
  return index * totalComponentInAFilter + subIndex;
}
