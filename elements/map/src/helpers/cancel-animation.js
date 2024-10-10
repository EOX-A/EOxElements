/**
 * cancels any animation of the given view
 *
 * @param {import("ol/View").default} view - The OpenLayers view object whose animations need to be canceled.
 */
export default function cancelAnimation(view) {
  // This effectively stops any ongoing animations by setting the rotation to its current value.
  // doesn't change the view but forces the animation to halt.
  view.setRotation(view.getRotation());
}
