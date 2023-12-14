/**
 * Handles initial settings and event triggers upon the component's first update.
 *
 * @param {import("../../main").EOxLayerControl} EOxLayerControl
 * @return {import("@eox/map/main").EOxMap}
 */
const firstUpdatedMethod = (EOxLayerControl) => {
  return document.querySelector(EOxLayerControl.for);
};

export default firstUpdatedMethod;
