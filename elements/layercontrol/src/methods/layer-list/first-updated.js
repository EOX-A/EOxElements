// Importing helper functions from the 'helpers' directory
import { checkProperties, createSortable } from "../../helpers";

/**
 * Handles initial settings and event triggers upon the component's first update.
 *
 * @param {import("../../components/layerList").EOxLayerControlLayerList} EOxLayerControlLayerList - The EOxLayerControlLayerList object containing layers.
 */
const firstUpdatedMethod = (EOxLayerControlLayerList) => {
  // Destructuring properties from the EOxLayerControlLayerList object
  const { layers, idProperty, titleProperty, renderRoot } =
    EOxLayerControlLayerList;

  // Checking if layers exist
  if (layers) {
    // Selecting the unordered list element from the renderRoot
    const element = renderRoot.querySelector("ul");

    // Checking properties of the layers
    checkProperties(layers, idProperty, titleProperty);

    // Creating a sortable list using helper function createSortable
    createSortable(element, layers, idProperty, EOxLayerControlLayerList);
  }
};

export default firstUpdatedMethod;
