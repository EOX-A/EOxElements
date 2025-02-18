import { getElement } from "@eox/elements-utils";

/**
 * Retrieves the EOxMap element based on the provided selector in EOxLayerControl's 'for' property.
 * Updates the EOxLayerControl's map property based on the target element's map.
 *
 * @param {import("../../main").EOxLayerControl} EOxLayerControl - The EOxLayerControl element.
 * @returns {import("@eox/map").EOxMap | null} The EOxMap element or null if not found.
 */
const firstUpdatedMethod = (EOxLayerControl) => {
  const foundElement = getElement(EOxLayerControl.for);

  // Check if the element exists and its map property differs from EOxLayerControl.map
  if (
    foundElement &&
    /** @type {import("@eox/map").EOxMap} */ (foundElement).map !==
      EOxLayerControl.map
  ) {
    // Update the EOxLayerControl's map property
    EOxLayerControl.map = /** @type {import("@eox/map").EOxMap} */ (
      foundElement
    ).map;
  }

  return /** @type {import("@eox/map").EOxMap} */ (foundElement);
};

export default firstUpdatedMethod;
