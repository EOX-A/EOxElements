/**
 * Discards drawing on the map, resets drawing interactions and features,
 * clears the source, and triggers updates.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const discardDrawingMethod = (EoxDrawTool) => {
  // Function to discard drawing interactions and features
  const discardDrawingActions = () => {
    // Reset drawnFeatures, deactivate drawing, and clear drawLayer's source
    EoxDrawTool.drawnFeatures = [];
    EoxDrawTool.draw.setActive(false);
    EoxDrawTool.drawLayer.getSource().clear();
  };

  // Function to trigger updates after discarding drawing
  const triggerUpdates = () => {
    EoxDrawTool.emitDrawnFeatures();
    EoxDrawTool.currentlyDrawing = false;
    EoxDrawTool.requestUpdate();
  };

  // Execute the discard actions and trigger updates
  discardDrawingActions();
  triggerUpdates();
};

export default discardDrawingMethod;
