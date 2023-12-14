/**
 *
 * @param {import("../../main").EOxLayerControl} EOxLayerControl
 */
const updateMethod = (EOxLayerControl) => {
  /**
   * @type Element & { map: import("ol").Map }
   */
  const foundElement = document.querySelector(EOxLayerControl.for);
  if (foundElement && foundElement?.map !== EOxLayerControl.map) {
    EOxLayerControl.map = foundElement.map;
  }
};

export default updateMethod;
