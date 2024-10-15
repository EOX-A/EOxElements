/**
 * Factory function to create a select event handler
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 * @returns An object containing the selectHandler and a method to remove the event listener
 */
const createSelectHandler = (EoxDrawTool) => {

  const selectHandler = (e) => {
    if (e?.detail.id !== "SelectLayerClickInteraction" || !e.detail.feature) {
      return;
    }
    const id = e.detail.feature.getId();
    console.log("feature.getId:", id);
    EoxDrawTool.drawLayer.getSource().addFeature(e.detail.feature);
    EoxDrawTool.eoxMap.dispatchEvent(new CustomEvent("addfeatures", { detail: e.detail }));
  };

  const addSelectionEvent = () => {
    if (EoxDrawTool.layerId) {
      EoxDrawTool.eoxMap.selectInteractions["SelectLayerHoverInteraction"].setActive(true)
      EoxDrawTool.eoxMap.addEventListener("select", selectHandler);
    }
  }
  const removeSelectionEvent = () => {
    if (EoxDrawTool.layerId) {
      EoxDrawTool.eoxMap.selectInteractions["SelectLayerHoverInteraction"].setActive(false)
      EoxDrawTool.eoxMap.removeEventListener("select", selectHandler);
    }
  };

  return { addSelectionEvent, removeSelectionEvent };
};


export default createSelectHandler;