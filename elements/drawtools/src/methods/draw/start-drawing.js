/**
 * Starts the drawing method by initializing the draw layer,
 * activating drawing, and requesting an update.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const startDrawingMethod = (EoxDrawTool) => {
  const initializeDrawing = () => {
    EoxDrawTool.initDrawLayer();
    EoxDrawTool.draw.setActive(true);
  };

  const updateDrawingStatus = () => {
    EoxDrawTool.currentlyDrawing = true;
    EoxDrawTool.requestUpdate();
  };

  initializeDrawing();
  updateDrawingStatus();
};

export default startDrawingMethod;
