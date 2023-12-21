/**
 * Handles the change event in the URL input field
 * and updates the stored URL input.
 *
 * @param {Event} evt - The input change event.
 * @param {import("../../components/add-layers").EOxLayerControlAddLayers} EoxLayerControlAddLayers - Instance of EOxLayerControlAddLayers
 */
const urlInputChange = (evt, EoxLayerControlAddLayers) => {
  // Update the stored URL input value in the EOxLayerControlAddLayers instance
  //@ts-ignore
  EoxLayerControlAddLayers.urlInput = evt.target.value;

  // Request an update in the UI to reflect the changes
  EoxLayerControlAddLayers.requestUpdate();
};

export default urlInputChange;
