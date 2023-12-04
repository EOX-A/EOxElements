/**
 * Deletes a feature when clicked on the delete button.
 *
 * @param {Event & { target: HTMLButtonElement }} evt - Event object containing button target.
 * @param {import("../../components/list").EOxDrawToolsList} EoxDrawToolList - The list of drawn features.
 */
const deleteFeatureMethod = (evt, EoxDrawToolList) => {
  evt.stopPropagation();

  // Extract the index of the feature to delete from the button's attribute
  const index = Number(evt.target.getAttribute("index"));

  // Retrieve the feature to be deleted from the drawnFeatures array
  const feature = EoxDrawToolList.drawnFeatures[index];

  // Remove the feature from the draw layer and update the drawnFeatures array
  EoxDrawToolList.drawLayer.getSource().removeFeature(feature);
  EoxDrawToolList.drawnFeatures.splice(index, 1);

  // Request an update to reflect the changes
  EoxDrawToolList.requestUpdate();
};

export default deleteFeatureMethod;
