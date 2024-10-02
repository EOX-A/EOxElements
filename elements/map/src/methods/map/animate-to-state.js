import { cancelAnimation, getCenterFromProperty } from "../../helpers";

/**
 * Animates the map view to a specified state using the provided animation options.
 *
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the current map view, center, zoom, and animation options.
 */
export default function animateToStateMethod(EOxMap) {
  // Copy the animation options from the map object
  const animateToOptions = Object.assign({}, EOxMap.animationOptions);
  const view = EOxMap.map.getView();

  // Cancel any ongoing animations on the view
  cancelAnimation(view);

  // If no animation options are provided, reset the view to the default center and zoom
  if (!animateToOptions || !Object.keys(animateToOptions).length) {
    view.setCenter(EOxMap.center);
    view.setZoom(EOxMap.zoom);
    return;
  }

  // Set the animation options for the center and zoom of the map
  animateToOptions.center = getCenterFromProperty(EOxMap.center);
  animateToOptions.zoom = EOxMap.zoom;

  // Animate the map view using the specified options
  view.animate(animateToOptions);
}
