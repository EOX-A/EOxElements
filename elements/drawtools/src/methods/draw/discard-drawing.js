import { emitDrawnFeaturesMethod } from "./";

/**
 * Discards drawing on the map, resets drawing interactions and features,
 * clears the source, and triggers updates.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @param {import("../../../../map/main").EOxMap} EoxMap - The map instance.
 * @param {import("ol").Map} OlMap - The OL map instance.
 */
const discardDrawingMethod = (EoxDrawTool, EoxMap, OlMap) => {
  const discardDrawing = () => {
    EoxDrawTool.drawnFeatures = [];
    EoxDrawTool.draw.setActive(false);
    EoxDrawTool.drawLayer.getSource().clear();
    EoxMap.removeInteraction("drawInteraction");
    OlMap.removeLayer(EoxDrawTool.drawLayer);
  };

  const triggerUpdates = () => {
    emitDrawnFeaturesMethod(EoxDrawTool);
    EoxDrawTool.currentlyDrawing = false;
    EoxDrawTool.requestUpdate();
  };

  discardDrawing();
  triggerUpdates();
};

export default discardDrawingMethod;
