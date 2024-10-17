/**
 * Factory function to create a select event handler
 * @param {import("../../main").EOxDrawTools} EoxDrawTool - The drawing tool instance.
 */
const createSelectHandler = (EoxDrawTool) => {
  /**
   * Copy the selected feature to the draw layer
   * and dispatches an event to add the feature to the map.
   *
   * @param {*} e
   */
  const selectHandler = (e) => {
    if (e?.detail.id !== "SelectLayerClickInteraction" || !e.detail.feature) {
      return;
    }
    EoxDrawTool.drawLayer.getSource().addFeature(e.detail.feature);
    EoxDrawTool.eoxMap.dispatchEvent(
      new CustomEvent("addfeatures", { detail: e.detail }),
    );
  };

  /**
   * Adds the selection event to the map
   **/
  const addSelectionEvent = () => {
    if (EoxDrawTool.layerId) {
      const hoverInteraction =
        EoxDrawTool.eoxMap.selectInteractions["SelectLayerHoverInteraction"];
      hoverInteraction.setActive(true);
      EoxDrawTool.eoxMap.addEventListener("select", selectHandler);
    }
  };
  /**
   * Removes the selection event from the map and resets the selected features
   **/
  const removeSelectionEvent = () => {
    const hoverInteraction =
      EoxDrawTool.eoxMap.selectInteractions["SelectLayerHoverInteraction"];
    if (hoverInteraction) {
      hoverInteraction.selectedFids = [];
      hoverInteraction.setActive(false);
    }
    EoxDrawTool.eoxMap.removeEventListener("select", selectHandler);
  };

  return { addSelectionEvent, removeSelectionEvent };
};

export default createSelectHandler;
