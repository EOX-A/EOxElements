/**
 * Handles actions after drawing ends -
 * emits drawn features, deactivates drawing, and requests an update.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @param {{ [p: string]: any }} geoJSON - Encoded features in geo-json format
 */
const onDrawEndMethod = (EoxDrawTool, geoJSON) => {
  // Function to handle actions when drawing ends
  const handleDrawEnd = () => {
    EoxDrawTool.emitDrawnFeatures(); // Emit drawn features
    if (!EoxDrawTool.multipleFeatures) {
      EoxDrawTool.draw.setActive(false); // Deactivate drawing
      EoxDrawTool.currentlyDrawing = false; // Update drawing status flag
    }
    EoxDrawTool.geoJSON = geoJSON;
  };

  // Execute actions on draw end
  handleDrawEnd();
  EoxDrawTool.requestUpdate();
};

export default onDrawEndMethod;
