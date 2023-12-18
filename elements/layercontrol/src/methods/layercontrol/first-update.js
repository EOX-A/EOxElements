/**
 * Retrieves the EOxMap element based on the provided selector in EOxLayerControl's 'for' property.
 *
 * @param {import("../../main").EOxLayerControl} EOxLayerControl - The EOxLayerControl element.
 * @returns {import("@eox/map/main").EOxMap | null} The EOxMap element or null if not found.
 */
const firstUpdatedMethod = (EOxLayerControl) => {
  const mapSelector = EOxLayerControl.for;
  return document.querySelector(mapSelector);
};

export default firstUpdatedMethod;
