import { transform, transformExtent } from "../../helpers";

export function getLonLatCenterMethod(EOxMap) {
  if (EOxMap.projection === "EPSG:4326")
    return EOxMap.map.getView().getCenter();
  return transform(EOxMap.map.getView().getCenter(), EOxMap.projection);
}

export function getLonLatExtentMethod(EOxMap) {
  const currentExtent = EOxMap.map
    .getView()
    .calculateExtent(EOxMap.map.getSize());
  if (EOxMap.projection === "EPSG:4326") {
    return currentExtent;
  }
  return transformExtent(currentExtent, EOxMap.projection);
}
