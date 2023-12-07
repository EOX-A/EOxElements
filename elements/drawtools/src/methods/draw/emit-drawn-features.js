/**
 * Emits drawn features after a timeout to allow updating drawn features.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @param {Function} drawUpdateEvent - event to be triggered after drawFeature is updated
 */
const emitDrawnFeaturesMethod = (EoxDrawTool, drawUpdateEvent) => {
  // Function to emit features after a timeout (ensures update)
  const emitFeatures = () => {
    // Update drawnFeatures with features from drawLayer's source
    EoxDrawTool.drawnFeatures = EoxDrawTool.drawLayer.getSource().getFeatures();
    EoxDrawTool.requestUpdate();

    // Triggering `drawupdate` event after drawFeature is updated
    drawUpdateEvent();
  };

  // Emit features after a timeout (ensures update)
  setTimeout(emitFeatures, 0);
};

export default emitDrawnFeaturesMethod;
