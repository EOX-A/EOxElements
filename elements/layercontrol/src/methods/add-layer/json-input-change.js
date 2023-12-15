/**
 * Handles changes in the input field, parsing entered data into JSON format.
 *
 * @param {{target: { value: string }}} evt - The input change event.
 * @param {import("../../components/addLayers").EOxLayerControlAddLayers} EoxLayerControlAddLayers - Instance of EOxLayerControlAddLayers
 */
const jsonInputChange = (evt, EoxLayerControlAddLayers) => {
  // Update the stored layers input with the cleaned JSON data
  EoxLayerControlAddLayers.jsonInput = evt.target.value;

  // Request a UI update to reflect changes
  EoxLayerControlAddLayers.requestUpdate();
};

export default jsonInputChange;
