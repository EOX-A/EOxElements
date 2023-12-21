import { cleanJSONInput } from "../../helpers";

/**
 * Handles the addition of one or multiple layers to the map based on the input.
 * Parses the layers input into JSON format and adds or updates the layers accordingly.
 * Supports both single and multiple layer additions.
 *
 * @param {import("../../components/add-layers").EOxLayerControlAddLayers} EoxLayerControlAddLayers - Instance of EOxLayerControlAddLayers
 */
const addLayer = (EoxLayerControlAddLayers) => {
  /**
   * @type {{data: []}} Converting any array into json and parsing it using JSON.parse
   **/
  const layers = JSON.parse(
    `{"data":${cleanJSONInput(EoxLayerControlAddLayers.jsonInput)}}`
  );
  // Check if the parsed data is an array
  if (Array.isArray(layers.data)) {
    // Iterate over each layer in the array and add/update it in the map
    layers.data.forEach((layer) => {
      EoxLayerControlAddLayers.eoxMap.addOrUpdateLayer(layer);
    });
  } else {
    // If the parsed data is not an array, directly add/update the layer in the map
    EoxLayerControlAddLayers.eoxMap.addOrUpdateLayer(layers.data);
  }

  // Resetting `jsonInput` with null value and re-rendering the component
  EoxLayerControlAddLayers.jsonInput = null;
  EoxLayerControlAddLayers.requestUpdate();
};

export default addLayer;
