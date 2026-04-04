import stopDrawingMethod from "./stop-drawing.js";

/** @type {((e: KeyboardEvent) => void) | null} */
let escapeHandler = null;

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
    EoxDrawTool.draw?.setActive(true);
    // Add selection
    EoxDrawTool.selectionEvents.addSelectionEvent();
  };

  // Function to update the drawing status and request an update
  const updateDrawingStatus = () => {
    EoxDrawTool.currentlyDrawing = true;
    EoxDrawTool.requestUpdate();
  };

  // Remove any previous Escape listener to avoid accumulation
  if (escapeHandler) {
    document.removeEventListener("keydown", escapeHandler);
    escapeHandler = null;
  }

  // Initialize the drawing process
  initializeDrawing();
  // Update the drawing status
  updateDrawingStatus();

  // Abort drawing on Esc key — delegates to stopDrawingMethod for
  // consistent state cleanup (isDrawingEnabled, selectionEvents, etc.)
  escapeHandler = ({ key }) => {
    if (key === "Escape" && EoxDrawTool.currentlyDrawing) {
      stopDrawingMethod(EoxDrawTool);
    }
  };
  document.addEventListener("keydown", escapeHandler);
};

export default startDrawingMethod;
