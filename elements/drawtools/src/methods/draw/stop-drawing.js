/**
 * Stops the drawing interaction on the map.
 * This mimics the behavior of pressing the Escape key.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const stopDrawingMethod = (EoxDrawTool) => {
  if (EoxDrawTool.currentlyDrawing) {
    EoxDrawTool.draw?.setActive(false);
    EoxDrawTool.currentlyDrawing = false;
    EoxDrawTool.requestUpdate();
  }
};

export default stopDrawingMethod;
