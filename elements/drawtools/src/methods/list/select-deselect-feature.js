import { FIT_OPTIONS } from "../../enums";

/**
 * Handles selecting and deselecting a feature on the map.
 *
 * @param {import("ol").Feature} feature - The selected feature.
 * @param {import("../../components/list").EOxDrawToolsList} EoxDrawToolList - The list of drawn features.
 */
const selectAndDeselectFeature = (feature, EoxDrawToolList) => {
  const selectedFeatureId = feature.getId()
  const { clickId, drawLayer, olMap, clickInteraction } = EoxDrawToolList;

  const isSelectedFeature = clickId === selectedFeatureId;
  const featureGeometry = feature.getGeometry();

  if (isSelectedFeature) {
    // Deselect the selected feature and fit the view to its extent
    const newExtent = drawLayer.getSource().getExtent();
    olMap.getView().fit(newExtent, FIT_OPTIONS);
    clickInteraction.highlightById([]);
  } else {
    // Select the clicked feature and fit the view to its extent
    const featureExtent = featureGeometry.getExtent();
    clickInteraction.highlightById([selectedFeatureId]);
    olMap.getView().fit(featureExtent, FIT_OPTIONS);
  }

  EoxDrawToolList.requestUpdate();
};

export default selectAndDeselectFeature;
