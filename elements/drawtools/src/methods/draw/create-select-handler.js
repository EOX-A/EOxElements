/**
 * Factory function to create a select event handler
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const createSelectHandler = (EoxDrawTool) => {
  const selectHandler = (e) => {
    if (e?.detail.id !== "SelectLayerClickInteraction" || !e.detail.feature) {
      return;
    }
    EoxDrawTool.drawLayer.getSource().addFeature(e.detail.feature);
    EoxDrawTool.eoxMap.dispatchEvent(
      new CustomEvent("addfeatures", { detail: e.detail }),
    );
  };

  const hoverInteraction =
    EoxDrawTool.eoxMap.selectInteractions["SelectLayerHoverInteraction"];

  const addSelectionEvent = () => {
    if (EoxDrawTool.layerId) {
      hoverInteraction.setActive(true);
      EoxDrawTool.eoxMap.addEventListener("select", selectHandler);
    }
  };
  const removeSelectionEvent = () => {
    if (EoxDrawTool.layerId) {
      hoverInteraction.selectedFids = [];
      hoverInteraction.setActive(false);
      EoxDrawTool.eoxMap.removeEventListener("select", selectHandler);
    }
  };

  return { addSelectionEvent, removeSelectionEvent };
};

export default createSelectHandler;
