/**
 * Retrieves the EOxMap element based on the provided selector in EOxLayerControl's 'for' property.
 * Updates the EOxLayerControl's map property based on the target element's map.
 *
 * @param {import("../../main").EOxLayerControl} EOxLayerControl - The EOxLayerControl element.
 * @returns {import("@eox/map/main").EOxMap | null} The EOxMap element or null if not found.
 */
const firstUpdatedMethod = (EOxLayerControl) => {
  const map = EOxLayerControl.for;
  console.log(map);

  if (map instanceof HTMLElement) {
    // The provided `for` property is an `eox-map` element.
    console.log('got a html element');
    console.log(map.map);
    EOxLayerControl.map = map.map;

    return map;
  } else {
    // The `for` property is a string selector targeting an `eox-map` element.
    console.log('got a selector');

    // Find the element specified in EOxLayerControl.for
    /** * @type {Element & { map: import("ol").Map }} */
    const foundElement = document.querySelector(map);

    // Check if the element exists and its map property differs from EOxLayerControl.map
    if (foundElement && foundElement.map !== EOxLayerControl.map) {
      // Update the EOxLayerControl's map property
      EOxLayerControl.map = foundElement.map;
    }

    return foundElement;
  }

  // Find the element specified in EOxLayerControl.for
  /** * @type {Element & { map: import("ol").Map }} */
  const foundElement = document.querySelector(map);

  // Check if the element exists and its map property differs from EOxLayerControl.map
  if (foundElement && foundElement.map !== EOxLayerControl.map) {
    // Update the EOxLayerControl's map property
    EOxLayerControl.map = foundElement.map;
  }

  return foundElement;
};

export default firstUpdatedMethod;
