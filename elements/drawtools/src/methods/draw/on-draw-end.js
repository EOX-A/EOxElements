/**
 * Handles actions after drawing ends -
 * emits drawn features, deactivates drawing, and requests an update.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @param {import("ol/Feature").default} [selectedFeature] - The feature that was selected by the user.
 */
const onDrawEndMethod = (EoxDrawTool, selectedFeature) => {
  // Function to handle actions when drawing ends
  const handleDrawEnd = () => {
    EoxDrawTool.emitDrawnFeatures(selectedFeature); // Emit drawn features
    if (!EoxDrawTool.multipleFeatures) {
      EoxDrawTool.draw.setActive(false); // Deactivate drawing
      EoxDrawTool.selectionEvents.removeSelectionEvent();
      EoxDrawTool.currentlyDrawing = false; // Update drawing status flag
    } else {
      if (EoxDrawTool.continuous) {
        // the selection event selects the feature after draw ends
        if (!EoxDrawTool.layerId) {
          EoxDrawTool.drawLayer.getSource().clear(true);
          EoxDrawTool.drawnFeatures = [];
        } else {
          let latest;
          if (selectedFeature) {
            latest = EoxDrawTool.drawnFeatures.at(-1);
          } else {
            const features = EoxDrawTool.drawLayer.getSource().getFeatures();
            latest = features.at(-1);
            EoxDrawTool.drawLayer.getSource().clear(true);
            EoxDrawTool.drawLayer.getSource().addFeature(latest);
          }
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
