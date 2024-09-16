import { cancelAnimation, getCenterFromProperty } from "../../helpers";

export default function animateToStateMethod(EOxMap) {
  const animateToOptions = Object.assign({}, EOxMap.animationOptions);
  const view = EOxMap.map.getView();
  cancelAnimation(view);
  if (!animateToOptions || !Object.keys(animateToOptions).length) {
    view.setCenter(EOxMap.center);
    view.setZoom(EOxMap.zoom);
    return;
  }
  animateToOptions.center = getCenterFromProperty(EOxMap.center);
  animateToOptions.zoom = EOxMap.zoom;
  view.animate(animateToOptions);
}
