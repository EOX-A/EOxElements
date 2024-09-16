/**
 * cancels any animation of the given view
 *
 * @param {import("ol/View").default} view
 */
export default function cancelAnimation(view) {
  view.setRotation(view.getRotation());
}
