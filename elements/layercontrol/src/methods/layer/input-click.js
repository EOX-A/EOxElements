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
      ".layers > ul",
    ).querySelectorAll("eox-layercontrol-layer");

    console.log(siblings);

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

  //console.log(document.querySelector("eox-layercontrol").isGloballyExclusive);

  // Handle globally exclusive layers
  let layerControl = document.querySelector("eox-layercontrol");

  if (
    evt.target.checked &&
    layer.get("layerControlExclusive") &&
    layerControl.isGloballyExclusive
  ) {
    // eox-layercontrol-layer-group
    const parent = EOxLayerControlLayer.closest("eox-layercontrol-layer-group");
    const layerList = parent.closest("eox-layercontrol-layer-list");

    console.log(parent.group.get("title"));
    parent.group.setVisible(false);
    parent.requestUpdate();

    const groupSiblings = parent.closest(
      ".layers > ul",
    ).querySelectorAll("eox-layercontrol-layer");
    console.log(`groupSiblings`);
    console.log(groupSiblings);
    console.log(layerList);

    groupSiblings.forEach((sibling) => {
      console.log(`hiding layer "${sibling.layer.get("title")}"`)
      sibling.layer.setVisible(false)
    });
    parent.group.setVisible(false);

    console.log(parent.group);
  }

  // Dispatch a 'changed' event to signal a change in the layer's state.
  EOxLayerControlLayer.dispatchEvent(
    new CustomEvent("changed", { bubbles: true, detail: layer }),
  );

  // Request an update for the layer control to reflect the changes.
  EOxLayerControlLayer.requestUpdate();
};

export default inputClickMethod;
