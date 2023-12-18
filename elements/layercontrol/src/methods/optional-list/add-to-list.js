import { filterLayers } from "../../helpers";

/**
 * @param {import("../../components/optionalList").EOxLayerControlOptionalList} EOxLayerControlOptionalList
 */
const addToListMethod = (EOxLayerControlOptionalList) => {
  const selectedLayer = filterLayers(
    EOxLayerControlOptionalList.layers.getArray(),
    "layerControlOptional",
    true
  ).find((l) => {
    return (
      // @ts-ignore
      (l.get(EOxLayerControlOptionalList.idProperty) || l.ol_uid) ===
      /** @type HTMLInputElement*/ (
        EOxLayerControlOptionalList.querySelector("select[name=optional]")
      ).value
    );
  });
  // TODO always set the new layer at the first position
  selectedLayer?.set("layerControlOptional", false);
  selectedLayer?.setVisible(true);
  EOxLayerControlOptionalList.dispatchEvent(
    new CustomEvent("changed", { bubbles: true })
  );
  EOxLayerControlOptionalList.renderRoot.parentNode
    .querySelectorAll("eox-layercontrol-layer-list")
    .forEach((layerList) =>
      /** @type {import("lit").LitElement} */ (layerList).requestUpdate()
    );
  EOxLayerControlOptionalList.requestUpdate();
};

export default addToListMethod;
