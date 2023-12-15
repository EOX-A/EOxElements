import { detectMapURLType, fetchCapabilities } from "../../helpers";

/**
 * Handles the URL search process in the EOxLayerControlAddLayers context.
 * It utilizes the provided instance to process the URL input for WMS or XYZ layers.
 *
 * @param {import("../../components/addLayers").EOxLayerControlAddLayers} EoxLayerControlAddLayers - Instance of EOxLayerControlAddLayers.
 * @return {Promise<{"Name": string} | false>} - An object with layer information if URL type is XYZ, otherwise false.
 */
const wmsSearchURL = async (EoxLayerControlAddLayers) => {
  // Get the URL input from the EOxLayerControlAddLayers instance
  const url = EoxLayerControlAddLayers.urlInput;

  // Enable loader for search and reset `wmsCapabilities`
  EoxLayerControlAddLayers.wmsCapabilities = null;
  EoxLayerControlAddLayers.searchLoad = true;
  EoxLayerControlAddLayers.requestUpdate();

  // If URL input is empty, return false
  if (!url) return false;

  // Check if the URL type is XYZ
  if (detectMapURLType(url) === "XYZ") {
    // If the URL type is XYZ, return a layer object with the Name property set to the URL
    return { Name: url };
  } else {
    try {
      // If the URL type is not XYZ, fetch WMS capabilities data
      const data = await fetchCapabilities(url);

      // Set the fetched WMS capabilities to the instance and request an update
      EoxLayerControlAddLayers.wmsCapabilities = data;
    } catch (error) {
      // Error when API Fails
    } finally {
      // Disable loader for search
      EoxLayerControlAddLayers.searchLoad = false;
      EoxLayerControlAddLayers.requestUpdate();
    }

    // Return false as WMS capabilities are being fetched asynchronously
    return false;
  }
};

export default wmsSearchURL;
