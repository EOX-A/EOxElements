/**
 * Handles actions after drawing ends -
 * emits drawn features, deactivates drawing, and requests an update.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const onDrawEndMethod = (EoxDrawTool) => {
  // Function to handle actions when drawing ends
  const handleDrawEnd = () => {
    EoxDrawTool.emitDrawnFeatures(); // Emit drawn features
    if (!EoxDrawTool.multipleFeatures) {
      EoxDrawTool.draw.setActive(false); // Deactivate drawing
      EoxDrawTool.selectionEvents.removeSelectionEvent();
      EoxDrawTool.currentlyDrawing = false; // Update drawing status flag
    } else {
      if (EoxDrawTool.continuous) {
        // the selection event selects the feature after draw ends
        if (!EoxDrawTool.layerId) {
          EoxDrawTool.drawLayer.getSource().clear();
          EoxDrawTool.drawnFeatures = [];
        } else {
          const features = EoxDrawTool.drawLayer.getSource().getFeatures();
          const latest = features.at(-1);
          EoxDrawTool.drawLayer.getSource().clear();
          EoxDrawTool.drawLayer.getSource().addFeature(latest);
          EoxDrawTool.drawnFeatures = [latest];
        }
      }
    }
  };

  // Execute actions on draw end
  handleDrawEnd();
  EoxDrawTool.requestUpdate();
};

export default onDrawEndMethod;
