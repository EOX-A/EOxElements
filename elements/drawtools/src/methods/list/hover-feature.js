/**
 * Handles the hover effect on a feature within the list.
 *
 * @param {import("../../components/list").EOxDrawToolsList} EoxDrawToolList - The list of drawn features.
 * @param {Number} featureId - The ID of the feature to hover.
 * @param {Boolean} mouseOut - Flag indicating mouse out event.
 */
const hoverFeatureMethod = (EoxDrawToolList, featureId, mouseOut) => {
  // Check if the feature is currently clicked; if so, don't perform hover effect
  if (EoxDrawToolList.clickId === featureId) return;

  // Apply or remove hover effect based on mouse in/out event
  const featuresToHighlight = mouseOut ? [] : [featureId]; // Create an array of feature IDs to highlight
  EoxDrawToolList.hoverInteraction.highlightById(featuresToHighlight); // Apply hover effect
};

export default hoverFeatureMethod;
