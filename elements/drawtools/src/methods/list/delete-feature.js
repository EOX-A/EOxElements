/**
 * Deletes a feature when clicked on the delete button.
 *
 * @param {Event & { target: HTMLButtonElement }} evt - Event object containing button target.
 * @param {import("../../components/list").EOxDrawToolsList} EoxDrawToolList - The list of drawn features.
 */
const deleteFeatureMethod = (evt, EoxDrawToolList) => {
  evt.stopPropagation();

  // Get the index of the feature to delete
  const index = Number(evt.target.getAttribute("index"));
  const feature = EoxDrawToolList.drawnFeatures[index];

  // Remove the feature from the draw layer and update the drawnFeatures array
  EoxDrawToolList.drawLayer.getSource().removeFeature(feature);
  EoxDrawToolList.drawnFeatures.splice(index, 1);

  // Request an update to reflect changes
  EoxDrawToolList.requestUpdate();
};

export default deleteFeatureMethod;
