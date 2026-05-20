import stopDrawingMethod from "./stop-drawing";

/**
 * Handles keydown events for the drawing tool.
 * Specifically, it aborts the drawing process when the Escape key is pressed.
 *
 * @param {KeyboardEvent} event - The keyboard event.
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const onKeyDownMethod = (event, EoxDrawTool) => {
  if (event.key === "Escape") {
    stopDrawingMethod(EoxDrawTool);
  }
};

export default onKeyDownMethod;
