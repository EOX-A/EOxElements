/**
 * @param {{target: { checked: boolean }}} evt - The input change event triggering the method.
 * @param {import("../../components/layer").EOxLayerControlLayer} EOxLayerControlLayer - Instance of EOxLayerControlLayer
 */
const inputClick = (evt, EOxLayerControlLayer) => {
  const layer = EOxLayerControlLayer.layer;
  layer.setVisible(evt.target.checked);
  if (evt.target.checked && layer.get("layerControlExclusive")) {
    /**
     * @type NodeListOf<Element & {layer: any, requestUpdate: function}>
     */
    const siblings =
      EOxLayerControlLayer.parentNode.parentNode.querySelectorAll(
        "li > eox-layercontrol-layer"
      );
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
  EOxLayerControlLayer.dispatchEvent(
    new CustomEvent("changed", { bubbles: true })
  );
  EOxLayerControlLayer.requestUpdate();
};

export default inputClick;
