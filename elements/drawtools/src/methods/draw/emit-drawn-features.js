/**
 * Emits drawn features after a timeout to allow updating drawn features.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const emitDrawnFeaturesMethod = (EoxDrawTool) => {
  const emitFeatures = () => {
    EoxDrawTool.drawnFeatures = EoxDrawTool.drawLayer.getSource().getFeatures();
    EoxDrawTool.requestUpdate();

    EoxDrawTool.dispatchEvent(
      new CustomEvent("drawupdate", {
        detail: EoxDrawTool.drawnFeatures,
      })
    );
  };

  setTimeout(emitFeatures, 0);
};

export default emitDrawnFeaturesMethod;
