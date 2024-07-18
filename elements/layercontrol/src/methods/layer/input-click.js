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

  // Check if the layer is checked and marked as 'layerControlExclusive'.
  if (evt.target.checked && layer.get("layerControlExclusive")) {
    /**
     * @type NodeListOf<Element & {layer: any, requestUpdate: function}>
     */
    const siblings = EOxLayerControlLayer.closest(
      ".layers > ul"
    ).querySelectorAll("eox-layercontrol-layer");

    // Loop through the sibling layers to handle exclusive visibility.
    siblings.forEach((sibling) => {
      if (
        sibling.layer !== layer &&
        sibling.layer?.get("layerControlExclusive")
      ) {
        sibling.layer.setVisible(false);
        sibling.requestUpdate();
      }
    });
  }

  // Dispatch a 'changed' event to signal a change in the layer's state.
  EOxLayerControlLayer.dispatchEvent(
    new CustomEvent("changed", { bubbles: true, detail: layer })
  );

  // Request an update for the layer control to reflect the changes.
  EOxLayerControlLayer.requestUpdate();
};

export default inputClickMethod;
