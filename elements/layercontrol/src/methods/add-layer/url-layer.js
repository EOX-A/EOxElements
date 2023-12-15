import { detectMapURLType } from "../../helpers";

/**
 * Handles changes in the input field and prepares EOxLayerControlAddLayers
 * properties based on the provided layer.
 *
 * @param {{"Name": string}} layer - The layer information to handle.
 * @param {import("../../components/addLayers").EOxLayerControlAddLayers} EoxLayerControlAddLayers - Instance of EOxLayerControlAddLayers.
 */
const urlLayer = (layer, EoxLayerControlAddLayers) => {
  // Extract the 'Name' property from the provided layer
  const { Name: id } = layer;

  // Detect the type of URL (WMS or XYZ) based on the URL input in EoxLayerControlAddLayers
  const urlType = detectMapURLType(EoxLayerControlAddLayers.urlInput) || "XYZ";

  // Create an EOxJSON layer object
  const layerEOxJSON = {
    type: "Tile",
    properties: {
      id: id,
      title: id, // Set the title property to the same as id
    },
    source: {
      type: urlType,
      url: EoxLayerControlAddLayers.urlInput, // Set the URL from the instance
      params: {
        LAYERS: id, // Set the 'LAYERS' parameter to the provided layer 'Name'
      },
    },
  };

  // Convert the layerEOxJSON object to a JSON string and assign it to the jsonInput property
  EoxLayerControlAddLayers.jsonInput = JSON.stringify(layerEOxJSON);
};

export default urlLayer;
