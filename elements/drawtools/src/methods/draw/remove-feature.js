/**
 * Removes a feature from the drawn features.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @param {import("ol").Feature} feature - The feature to remove.
 */
export function removeFeatureMethod(EoxDrawTool, feature) {
  const index = EoxDrawTool.drawnFeatures.indexOf(feature);
  if (index > -1) {
    removeFeatureByIndexMethod(EoxDrawTool, index);
  }
}

/**
 * Removes a feature from the drawn features by its index.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @param {number} index - The index of the feature to remove.
 */
export function removeFeatureByIndexMethod(EoxDrawTool, index) {
  if (index > -1 && index < EoxDrawTool.drawnFeatures.length) {
    const newFeatures = [...EoxDrawTool.drawnFeatures];
    newFeatures.splice(index, 1);
    EoxDrawTool.drawnFeatures = newFeatures;
    EoxDrawTool.emitDrawnFeatures();
  }
}
