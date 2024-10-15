/**
 * Handles actions after drawing ends -
 * emits drawn features, deactivates drawing, and requests an update.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const onDrawEndMethod = (EoxDrawTool) => {
  
  // Function to handle actions when drawing ends
  const handleDrawEnd = () => {
    console.log("feature added, drawing ended");
    EoxDrawTool.emitDrawnFeatures(); // Emit drawn features
    if (!EoxDrawTool.multipleFeatures) {
      // if (!EoxDrawTool.selectionLayer) { 
        EoxDrawTool.draw.setActive(false); // Deactivate drawing
        EoxDrawTool.eoxMap.selectInteractions["hoverInteraction"].setActive(false)
        EoxDrawTool.selectionEvents.removeSelectionEvent()
        // }
        EoxDrawTool.currentlyDrawing = false; // Update drawing status flag
    }
  };

    // Execute actions on draw end
    handleDrawEnd();
  EoxDrawTool.requestUpdate();
};

export default onDrawEndMethod;
