import { transform, transformExtent } from "../../helpers";

/**
 * Retrieves the current center of the map in longitude and latitude coordinates.
 *
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the map instance and its projection information.
 * @returns {Array<number>} - The center coordinates of the map in longitude and latitude.
 */
export function getLonLatCenterMethod(EOxMap) {
  if (EOxMap.projection === "globe") {
    const cameraPos = EOxMap.globe?.planet.camera.getLonLat();
    return [cameraPos?.lon ?? 0, cameraPos?.lat ?? 0];
  }
  // If the map's projection is EPSG:4326 (longitude/latitude), return the center directly
  if (EOxMap.projection === "EPSG:4326")
    return EOxMap.map.getView().getCenter();

  // Otherwise, transform the center coordinates to longitude/latitude
  return transform(EOxMap.map.getView().getCenter(), EOxMap.projection);
}

/**
 * Retrieves the current extent (bounding box) of the map in longitude and latitude coordinates.
 *
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the map instance, projection information, and size.
 * @returns {Array<number>} - The extent of the map in longitude and latitude.
 */
export function getLonLatExtentMethod(EOxMap) {
  // Calculate the current extent of the map based on its view and size
  const currentExtent = EOxMap.map
    .getView()
    .calculateExtent(EOxMap.map.getSize());

  // If the map's projection is EPSG:4326, return the extent directly
  if (EOxMap.projection === "EPSG:4326" || EOxMap.projection === "globe")
    return currentExtent;

  // Otherwise, transform the extent to longitude/latitude
  return transformExtent(currentExtent, EOxMap.projection);
}

/**
 * Get the current map view extent.
 *
 * @param {import("../../main").EOxMap} EOxMap - The map object containing the map instance, projection information, and size.
 * @returns {import("ol/extent").Extent} - The extent of the map in map projection.
 */
export function getZoomExtentMethod(EOxMap) {
  // Calculate the current extent of the map based on its view and size
  const extent = EOxMap.map.getView().calculateExtent(EOxMap.map.getSize());
  return extent;
}
