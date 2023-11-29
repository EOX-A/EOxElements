/**
 * Deletes a feature when clicked on the delete button.
 *
 * @param {Event & { target: HTMLButtonElement }} evt - Event object containing button target.
 * @param {import("../components/list").EOxDrawToolsList} EoxDrawToolList - The list of drawn features.
 */
export const deleteFeatureMethod = (evt, EoxDrawToolList) => {
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

/**
 * Handles selecting and deselecting a feature on the map.
 *
 * @param {import("ol").Feature} feature - The selected feature.
 * @param {import("../components/list").EOxDrawToolsList} EoxDrawToolList - The list of drawn features.
 */
export const selectAndDeselectFeatureMethod = (feature, EoxDrawToolList) => {
  const selectedFeatureId = feature.get("id");

  if (EoxDrawToolList.clickId === selectedFeatureId) {
    // Deselect the selected feature and fit the view to its extent
    const newExtent = EoxDrawToolList.drawLayer.getSource().getExtent();
    EoxDrawToolList.olMap.getView().fit(newExtent, { duration: 750 });
    EoxDrawToolList.clickInteraction.highlightById([]);
  } else {
    // Select the clicked feature and fit the view to its extent
    EoxDrawToolList.clickInteraction.highlightById([selectedFeatureId]);
    EoxDrawToolList.olMap
      .getView()
      .fit(feature.getGeometry().getExtent(), { duration: 750 });
  }

  EoxDrawToolList.requestUpdate();
};

/**
 * Handles initial settings and event triggers upon component's first update.
 *
 * @param {import("../components/list").EOxDrawToolsList} EoxDrawToolList - The list of drawn features.
 */
export const firstUpdatedMethod = (EoxDrawToolList) => {
  // Set hover and click interactions
  EoxDrawToolList.hoverInteraction =
    EoxDrawToolList.eoxMap.selectInteractions["selectHover"];
  EoxDrawToolList.clickInteraction =
    EoxDrawToolList.eoxMap.selectInteractions["selectClick"];

  // Trigger an update when the style changes due to interaction
  const handleInteractionStyleChange = () => {
    EoxDrawToolList.requestUpdate();
  };

  // Event triggers for style change due to interaction
  EoxDrawToolList.hoverInteraction.selectStyleLayer.on(
    "change",
    handleInteractionStyleChange
  );
  EoxDrawToolList.clickInteraction.selectStyleLayer.on(
    "change",
    handleInteractionStyleChange
  );
};
