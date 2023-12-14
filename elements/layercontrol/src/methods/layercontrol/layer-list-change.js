/**
 * Deletes a feature when clicked on the delete button.
 *
 * @param {CustomEvent & {target: Element}} evt
 * @param {import("../../main").EOxLayerControl} EOxLayerControl
 */
const layerListChangeMethod = (evt, EOxLayerControl) => {
  EOxLayerControl.requestUpdate();
  if (evt.target.tagName === "EOX-LAYERCONTROL-LAYER-TOOLS") {
    /**
     * @type Element & { requestUpdate: function }
     */
    const optionalListEl = EOxLayerControl.renderRoot.querySelector(
      "eox-layercontrol-optional-list"
    );
    optionalListEl?.requestUpdate();
  }
};

export default layerListChangeMethod;
