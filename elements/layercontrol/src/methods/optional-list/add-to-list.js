import { filterLayers } from "../../helpers";

/**
 * Adds the selected layer to the optional list in the layer control.
 *
 * @param {import("../../components/optionalList").EOxLayerControlOptionalList} EOxLayerControlOptionalList - The optional list component.
 */
const addToListMethod = (EOxLayerControlOptionalList) => {
  // Get the selected layer based on the value from the dropdown
  /** @type HTMLInputElement*/
  const optionalSelect = EOxLayerControlOptionalList.querySelector(
    "select[name=optional]"
  );
  const selectedValue = optionalSelect ? optionalSelect.value : null;

  const selectedLayer = filterLayers(
    EOxLayerControlOptionalList.layers.getArray(),
    "layerControlOptional",
    true
  ).find(
    (layer) =>
      // @ts-ignore
      (layer.get(EOxLayerControlOptionalList.idProperty) || layer.ol_uid) ===
      selectedValue
  );

  // Update visibility and dispatch 'changed' event
  selectedLayer?.set("layerControlOptional", false);
  selectedLayer?.setVisible(true);
  EOxLayerControlOptionalList.dispatchEvent(
    new CustomEvent("changed", { bubbles: true })
  );

  // Update related components
  EOxLayerControlOptionalList.renderRoot.parentNode
    .querySelectorAll("eox-layercontrol-layer-list")
    .forEach((layerList) =>
      /** @type {import("lit").LitElement} */ (layerList).requestUpdate()
    );

  EOxLayerControlOptionalList.requestUpdate();
};

export default addToListMethod;
