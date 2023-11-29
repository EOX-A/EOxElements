import { emitDrawnFeaturesMethod } from "./";

/**
 * Handles actions after drawing ends -
 * emits drawn features, deactivates drawing, and requests an update.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const onDrawEndMethod = (EoxDrawTool) => {
  const handleDrawEnd = () => {
    emitDrawnFeaturesMethod(EoxDrawTool);
    EoxDrawTool.draw.setActive(false);
    EoxDrawTool.currentlyDrawing = false;
  };

  handleDrawEnd();
  EoxDrawTool.requestUpdate();
};

export default onDrawEndMethod;
