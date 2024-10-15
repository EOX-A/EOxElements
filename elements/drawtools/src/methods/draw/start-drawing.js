// import endSelection from './end-selection';
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
    EoxDrawTool.eoxMap.selectInteractions["hoverInteraction"].setActive(true);
  };

  // Function to update the drawing status and request an update
  const updateDrawingStatus = () => {
    EoxDrawTool.currentlyDrawing = true;
    EoxDrawTool.requestUpdate();
  };

  // Initialize the drawing process
  initializeDrawing();
  // Add selection
  EoxDrawTool.selectionEvents.addSelectionEvent();
  // Update the drawing status
  updateDrawingStatus();
};

export default startDrawingMethod;
