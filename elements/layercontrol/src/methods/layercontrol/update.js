/**
 * Updates the EOxLayerControl's map property based on the target element's map.
 *
 * @param {import("../../main").EOxLayerControl} EOxLayerControl - The EOxLayerControl element.
 */
const updateMethod = (EOxLayerControl) => {
  // Find the element specified in EOxLayerControl.for
  /** * @type {Element & { map: import("ol").Map }} */
  const foundElement = document.querySelector(EOxLayerControl.for);

  // Check if the element exists and its map property differs from EOxLayerControl.map
  if (foundElement && foundElement.map !== EOxLayerControl.map) {
    // Update the EOxLayerControl's map property
    EOxLayerControl.map = foundElement.map;
  }
};

export default updateMethod;
