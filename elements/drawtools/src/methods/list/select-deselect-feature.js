import { TRANSITION_DURATION } from "../../enums";

/**
 * Handles selecting and deselecting a feature on the map.
 *
 * @param {import("ol").Feature} feature - The selected feature.
 * @param {import("../../components/list").EOxDrawToolsList} EoxDrawToolList - The list of drawn features.
 */
const selectAndDeselectFeatureMethod = (feature, EoxDrawToolList) => {
  const selectedFeatureId = feature.get("id");

  if (EoxDrawToolList.clickId === selectedFeatureId) {
    // Deselect the selected feature and fit the view to its extent
    const newExtent = EoxDrawToolList.drawLayer.getSource().getExtent();
    EoxDrawToolList.olMap.getView().fit(newExtent, TRANSITION_DURATION);
    EoxDrawToolList.clickInteraction.highlightById([]);
  } else {
    // Select the clicked feature and fit the view to its extent
    EoxDrawToolList.clickInteraction.highlightById([selectedFeatureId]);
    EoxDrawToolList.olMap
      .getView()
      .fit(feature.getGeometry().getExtent(), TRANSITION_DURATION);
  }

  EoxDrawToolList.requestUpdate();
};

export default selectAndDeselectFeatureMethod;
