/**
 * Stops the active drawing interaction without discarding existing features.
 * This deactivates the draw tool and selection, but preserves all drawn features
 * on the layer. Use discardDrawing() to also clear features.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const stopDrawingMethod = (EoxDrawTool) => {
  if (!EoxDrawTool.currentlyDrawing) return;

  // Deactivate draw interaction but leave features intact
  EoxDrawTool.draw?.setActive(false);

  // Mark layer as not drawing — prevents re-activation on layer updates
  EoxDrawTool.drawLayer?.set("isDrawingEnabled", false);

  // Remove selection event listener
  EoxDrawTool.selectionEvents?.removeSelectionEvent();

  // Update state
  EoxDrawTool.currentlyDrawing = false;
  EoxDrawTool.requestUpdate();
};

export default stopDrawingMethod;
