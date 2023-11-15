import { equals } from "ol/coordinate";
import { fromLonLat } from "ol/proj";

/**
 * returns an ol-coordinate from a given center attribute.
 * the coordinate expected coordinate system is EPSG:3857, however,
 * if both parts of the coordinate are between -180 and 180, the coordinate
 * system EPSG:4326 is assumed.
 * use `map.getView().setCenter()` to manually set the center of the view.
 * @param {string} centerAttribute
 * @returns {import("ol/coordinate")}
 */
export function getCenterFromAttribute(centerAttribute: Array<number>) {
  if (centerAttribute) {
    const coordinate = centerAttribute;
    // compare:
    // https://github.com/openlayers/openlayers/blob/v7.4.0/src/ol/proj.js
    if (
      !equals(coordinate, [0, 0]) &&
      coordinate[0] >= -180 &&
      coordinate[0] <= 180 &&
      coordinate[1] >= -90 &&
      coordinate[1] <= 90
    ) {
      return fromLonLat(coordinate);
    }
    return coordinate;
  }
  return [0, 0];
}
