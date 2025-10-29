import WMSCapabilities from "wms-capabilities";

/**
 * Fetches WMS capabilities data from the provided original URL.
 * It constructs a new URL with additional parameters, makes a fetch request,
 * and returns the WMS capabilities in JSON format.
 *
 * @param {string} originalURL - The original URL to fetch capabilities from.
 * @returns {Promise<import("wms-capabilities").WMSCapabilitiesJSON>} - A Promise resolving to the fetched WMS capabilities in JSON format.
 */
export default async function fetchCapabilities(originalURL) {
  // Create a URL object from the original URL string
  let url = new URL(originalURL);
  let params = url.searchParams;

  // Update or add multiple parameters for WMS capabilities
  params.set("SERVICE", "WMS");
  params.set("REQUEST", "GetCapabilities"); // Change or add a new parameter

  // Generate the updated URL string
  let updatedURL = url.toString();

  // Fetch the updated URL to get capabilities data
  const response = await fetch(updatedURL);
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  else {
    const capabilitiesText = await response.text();

    // Convert the WMS capabilities data to JSON format
    return new WMSCapabilities(capabilitiesText).toJSON();
  }
}
