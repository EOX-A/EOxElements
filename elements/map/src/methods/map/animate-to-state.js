import { cancelAnimation, getCenterFromProperty } from "../../helpers";
import { flyGlobeToState } from "../../plugins/globe/openglobus";

const parseNestedString = (input) => {
  try {
    // This safely evaluates the string exactly how the JS engine evaluates object literals
    return new Function(`return (${input})`)();
  } catch (error) {
    console.error("Invalid object syntax string provided", error);
    return null;
  }
};

/**
 * Animates the map view to a specified state using the provided animation options.
 *
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the current map view, center, zoom, and animation options.
 */
export default function animateToStateMethod(EOxMap) {
  let options;
  if (typeof EOxMap.animationOptions === "string") {
    options = parseNestedString(EOxMap.animationOptions);
  } else {
    options = EOxMap.animationOptions;
  }
  // Copy the animation options from the map object
  const animateToOptions = Object.assign({}, options);
  const view = EOxMap.map.getView();

  // Cancel any ongoing animations on the view
  cancelAnimation(view);

  if (EOxMap.globeEnabled) {
    flyGlobeToState(EOxMap, animateToOptions);
  }

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
