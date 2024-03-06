/**
 * Triggers an update request for the EOxLayerControl and optional list elements upon a layer list change event.
 *
 * @param {CustomEvent & { target: Element }} evt - The custom event containing the target element.
 * @param {import("../../main").EOxLayerControl} EOxLayerControl - The EOxLayerControl element.
 */
const layerListChangeMethod = (evt, EOxLayerControl) => {
  // Request an update for the EOxLayerControl
  EOxLayerControl.requestUpdate();

  // Check if the event target matches the specified element tag
  if (evt.target.tagName === "EOX-LAYERCONTROL-LAYER-TOOLS") {
    const optionalListEl = EOxLayerControl.renderRoot.querySelector(
      "eox-layercontrol-optional-list"
    );

    // Request an update for the optional list element if found
    /** * @type {Element & { requestUpdate: function }} */
    (optionalListEl)?.requestUpdate();
  }
};

export default layerListChangeMethod;
