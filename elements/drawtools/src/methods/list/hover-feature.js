/**
 * Handles the hover effect on a feature within the list.
 *
 * @param {import("../../components/list").EOxDrawToolsList} EoxDrawToolList - The list of drawn features.
 * @param {Number} featureId - The ID of the feature to hover.
 * @param {Boolean} mouseOut - Flag indicating mouse out event.
 */
const hoverFeatureMethod = (EoxDrawToolList, featureId, mouseOut) => {
  // If the feature is currently clicked, don't perform hover effect
  if (EoxDrawToolList.clickId === featureId) return;

  // Apply or remove hover effect based on mouse in/out event
  EoxDrawToolList.hoverInteraction.highlightById(mouseOut ? [] : [featureId]);
};

export default hoverFeatureMethod;
