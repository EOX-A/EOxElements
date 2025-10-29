/**
 * Handles the opening or closing of tabs in the EOxLayerControlAddLayers instance.
 * Updates relevant properties based on the selected tab.
 *
 * @param {"url" | "json" | null} tab - The tab identifier to open or close.
 * @param {import("../../components/add-layers").EOxLayerControlAddLayers} EoxLayerControlAddLayers - Instance of EOxLayerControlAddLayers.
 */
const openCloseTab = (tab, EoxLayerControlAddLayers) => {
  // Update the 'open' property of EOxLayerControlAddLayers based on the provided tab
  EoxLayerControlAddLayers.open = tab || null;

  // Reset input-related properties when closing the tab
  EoxLayerControlAddLayers.urlInput = null;
  EoxLayerControlAddLayers.jsonInput = null;
  EoxLayerControlAddLayers.wmsCapabilities = null;

  // Request an update to reflect changes in the UI
  EoxLayerControlAddLayers.requestUpdate();
};

export default openCloseTab;
