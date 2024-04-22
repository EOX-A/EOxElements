// Importing helper functions from the 'helpers' directory
import { checkProperties, createSortable } from "../../helpers";
import _debounce from "lodash.debounce";

/**
 * Handles initial settings and event triggers upon the component's first update.
 * Handles updating and triggering events when the layers change length upon component update.
 *
 * @param {import("../../components/layer-list").EOxLayerControlLayerList} EOxLayerControlLayerList - The EOxLayerControlLayerList object containing layers.
 */
const firstUpdatedMethod = (EOxLayerControlLayerList) => {
  // Destructuring properties from the EOxLayerControlLayerList object
  const { layers, idProperty, titleProperty, renderRoot } =
    EOxLayerControlLayerList;

  // Debounced function for handling changes in layers' length
  const debHandleLayersChangeLength = _debounce(() => {
    EOxLayerControlLayerList.requestUpdate();
    EOxLayerControlLayerList.dispatchEvent(
      new CustomEvent("changed", { bubbles: true })
    );
  }, 50);

  // Function to handle changes in layers' length
  const handleLayersChangeLength = () => debHandleLayersChangeLength();

  // If layers do not exist, exit the function
  if (!layers) return;

  // Unregister previous listeners to prevent duplicates
  if (layers.hasListener("change:length"))
    layers?.un("change:length", handleLayersChangeLength);

  // Register a listener for changes in the layers' length
  layers.on("change:length", handleLayersChangeLength);

  // Checking if layers exist
  if (layers) {
    // Selecting the unordered list element from the renderRoot
    const element = renderRoot.querySelector("ul");

    // Checking properties of the layers
    checkProperties(
      layers,
      idProperty,
      titleProperty,
      EOxLayerControlLayerList
    );

    // Creating a sortable list using helper function createSortable
    createSortable(element, layers, idProperty, EOxLayerControlLayerList);
  }
};

export default firstUpdatedMethod;
