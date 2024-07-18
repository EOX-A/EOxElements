import { getElement } from '../../../../../utils/getElement.js';

/**
 * Retrieves the EOxMap element based on the provided selector in EOxLayerControl's 'for' property.
 * Updates the EOxLayerControl's map property based on the target element's map.
 *
 * @param {import("../../main").EOxLayerControl} EOxLayerControl - The EOxLayerControl element.
 * @returns {import("@eox/map/main").EOxMap | null} The EOxMap element or null if not found.
 */
const firstUpdatedMethod = (EOxLayerControl) => {
  const mapElement = getElement(EOxLayerControl.for);

  // Check if the element exists and its map property differs from EOxLayerControl.map
  if (mapElement && mapElement.map !== EOxLayerControl.map) {
    // Update the EOxLayerControl's map property
    EOxLayerControl.map = mapElement.map;
  }

  return mapElement.map;
};

export default firstUpdatedMethod;
