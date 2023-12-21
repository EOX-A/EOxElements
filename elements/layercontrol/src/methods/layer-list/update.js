// Importing the lodash debounce function for handling debouncing
import _debounce from "lodash.debounce";

/**
 * Handles updating and triggering events when the layers change length upon component update.
 *
 * @param {import("../../components/layer-list").EOxLayerControlLayerList} EOxLayerControlLayerList - The EOxLayerControlLayerList object containing layers.
 */
const updateMethod = (EOxLayerControlLayerList) => {
  // Destructuring layers from the EOxLayerControlLayerList object
  const { layers } = EOxLayerControlLayerList;

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
};

export default updateMethod;
