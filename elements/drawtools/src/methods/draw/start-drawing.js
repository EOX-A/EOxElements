/**
 * Initiates the drawing process by initializing the draw layer,
 * activating drawing, and updating the drawing status.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const startDrawingMethod = (EoxDrawTool) => {
  // Function to initialize the drawing process
  const initializeDrawing = () => {
    EoxDrawTool.drawLayer.set("isDrawingEnabled", true);
    EoxDrawTool.draw.setActive(true);
    // Add selection
    EoxDrawTool.selectionEvents.addSelectionEvent();
  };

  // Function to update the drawing status and request an update
  const updateDrawingStatus = () => {
    EoxDrawTool.currentlyDrawing = true;
    EoxDrawTool.requestUpdate();
  };

  // Initialize the drawing process
  initializeDrawing();
  // Update the drawing status
  updateDrawingStatus();

  // Abort drawing on Esc key
  document.addEventListener("keydown", ({ key }) => {
    if (key === "Escape" && EoxDrawTool.currentlyDrawing) {
      EoxDrawTool.draw.setActive(false);
      EoxDrawTool.currentlyDrawing = false;
      EoxDrawTool.requestUpdate();
    }
  });
};

export default startDrawingMethod;
