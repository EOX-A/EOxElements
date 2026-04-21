/**
 * Handles the click event on an input element to control layer visibility.
 *
 * @param {{target: { checked: boolean }}} evt - The input change event triggering the method.
 * @param {import("../../components/layer").EOxLayerControlLayer} EOxLayerControlLayer - Instance of EOxLayerControlLayer.
 */
const inputClickMethod = (evt, EOxLayerControlLayer) => {
  const layer = EOxLayerControlLayer.layer; // The layer instance associated with the control.

  // Set the visibility of the layer based on the input's checked state.
  layer.setVisible(evt.target.checked);

  if (EOxLayerControlLayer.toolsAutoExpand) {
    /**
     * @type {import("../../components/layer-tools").EOxLayerControlLayerTools}
     */
    const layerTools = EOxLayerControlLayer.renderRoot.querySelector(
      "eox-layercontrol-layer-tools",
    );
    if (layerTools) {
      layerTools.open = evt.target.checked;
    }
  }

  // Check if the layer is checked and marked as 'layerControlExclusive'.
  if (evt.target.checked && layer.get("layerControlExclusive")) {
    /**
     * @type NodeListOf<import("../../components/layer").EOxLayerControlLayer>
     */
    const siblings = EOxLayerControlLayer.closest(
      `${EOxLayerControlLayer.globallyExclusiveLayers ? ".layers" : "eox-layercontrol-layer-list"} > ul`,
    ).querySelectorAll("eox-layercontrol-layer");

    // Loop through the sibling layers to handle exclusive visibility.
    siblings.forEach((sibling) => {
      if (
        sibling.layer !== layer &&
        sibling.layer?.get("layerControlExclusive")
      ) {
        sibling.layer.setVisible(false);
        if (sibling.toolsAutoExpand) {
          /**
           * @type {import("../../components/layer-tools").EOxLayerControlLayerTools}
           */
          const siblingLayerTools = sibling.renderRoot.querySelector(
            "eox-layercontrol-layer-tools",
          );
          if (siblingLayerTools) {
            siblingLayerTools.open = false;
          }
        }
        sibling.requestUpdate();
      }
    });
  }

  // Dispatch a 'changed' event to signal a change in the layer's state.
  EOxLayerControlLayer.dispatchEvent(
    new CustomEvent("changed", { bubbles: true, detail: layer }),
  );

  // Request an update for the layer control to reflect the changes.
  EOxLayerControlLayer.requestUpdate();
};

export default inputClickMethod;
