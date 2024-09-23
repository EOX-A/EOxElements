import { equals } from "ol/coordinate";
import { fromLonLat } from "ol/proj";

/**
 * returns an ol-coordinate from a given center property.
 * the coordinate expected coordinate system is EPSG:3857, however,
 * if both parts of the coordinate are between -180 and 180, the coordinate
 * system EPSG:4326 is assumed.
 * use `map.getView().setCenter()` to manually set the center of the view.
 *
 * @param {Array<number>} centerProperty - The input coordinate as [longitude, latitude].
 * @returns {import("ol/coordinate").Coordinate} - The converted coordinate in EPSG:3857.
 */
export function getCenterFromProperty(centerProperty) {
  if (centerProperty) {
    const coordinate = centerProperty;

    // Check if the coordinate is not the default [0, 0] and falls within the longitude (-180 to 180)
    // and latitude (-90 to 90) range. This check helps to identify if the input is in EPSG:4326.
    if (
      !equals(coordinate, [0, 0]) &&
      coordinate[0] >= -180 &&
      coordinate[0] <= 180 &&
      coordinate[1] >= -90 &&
      coordinate[1] <= 90
    ) {
      // Convert the EPSG:4326 (longitude/latitude) coordinate to EPSG:3857
      return fromLonLat(coordinate);
    }

    // Convert the EPSG:4326 (longitude/latitude) coordinate to EPSG:3857
    return coordinate;
  }

  // Convert the EPSG:4326 (longitude/latitude) coordinate to EPSG:3857
  return [0, 0];
}
