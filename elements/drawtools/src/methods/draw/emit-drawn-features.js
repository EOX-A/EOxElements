/**
 * Emits drawn features after a timeout to allow updating drawn features.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const emitDrawnFeaturesMethod = (EoxDrawTool) => {
  // Function to emit features after a timeout (ensures update)
  const emitFeatures = () => {
    // Update drawnFeatures with features from drawLayer's source
    EoxDrawTool.drawnFeatures = EoxDrawTool.drawLayer.getSource().getFeatures();
    EoxDrawTool.requestUpdate();

    // Dispatch a 'drawupdate' event with drawn features as detail
    EoxDrawTool.dispatchEvent(
      new CustomEvent("drawupdate", {
        detail: EoxDrawTool.drawnFeatures,
      })
    );
  };

  // Emit features after a timeout (ensures update)
  setTimeout(emitFeatures, 0);
};

export default emitDrawnFeaturesMethod;
