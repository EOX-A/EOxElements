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
      EoxDrawTool.currentlyDrawing = false; // Update drawing status flag
    }
  };

  // Execute actions on draw end
  handleDrawEnd();
  EoxDrawTool.requestUpdate();
};

export default onDrawEndMethod;
