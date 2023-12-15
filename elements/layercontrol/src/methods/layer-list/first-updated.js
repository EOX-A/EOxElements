import { checkProperties, createSortable } from "../../helpers";

/**
 * Handles initial settings and event triggers upon the component's first update.
 *
 * @param {import("../../components/layerList").EOxLayerControlLayerList} EOxLayerControlLayerList
 */
const firstUpdatedMethod = (EOxLayerControlLayerList) => {
  const { layers, idProperty, titleProperty, renderRoot } =
    EOxLayerControlLayerList;

  if (layers) {
    const element = renderRoot.querySelector("ul");
    checkProperties(layers, idProperty, titleProperty);
    createSortable(element, layers, idProperty, EOxLayerControlLayerList);
  }
};

export default firstUpdatedMethod;
