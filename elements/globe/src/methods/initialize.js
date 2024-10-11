import { Viewer, Color } from "cesium";

/**
 * Initialize Cesium globe with initial configurations
 *
 * @param {Element} element - cesium container element
 * @param {Viewer.ConstructorOptions} config
 */
const initializeGlobe = (element, config) => {
  const viewer = new Viewer(element, config);
  viewer.scene.backgroundColor = Color.clone(Color.WHITE).withAlpha(0.0);
  viewer.scene.camera.constrainedAxis = undefined;
  return viewer;
};
export default initializeGlobe;
