/**
 * Discards drawing on the map, resets drawing interactions and features,
 * clears the source, and triggers updates.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @param {import("../../../../map/main").EOxMap} EoxMap - The map instance.
 * @param {import("ol").Map} OlMap - The OL map instance.
 */
const discardDrawingMethod = (EoxDrawTool, EoxMap, OlMap) => {
  // Function to discard drawing interactions and features
  const discardDrawingActions = () => {
    // Reset drawnFeatures, deactivate drawing, and clear drawLayer's source
    EoxDrawTool.drawnFeatures = [];
    EoxDrawTool.draw.setActive(false);
    EoxDrawTool.drawLayer.getSource().clear();

    // Remove draw interaction and drawLayer from the map
    EoxMap.removeInteraction("drawInteraction");
    OlMap.removeLayer(EoxDrawTool.drawLayer);
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
