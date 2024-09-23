import {
  transform as olTransform,
  transformExtent as olTransformExtent,
} from "ol/proj";

/**
 * Transforms coordinates to a given projection.
 * If no `destination` is defined, the coordinate is transformed to EPSG:4326
 * @param {import('ol/coordinate').Coordinate} coordinate
 * @param {import('ol/proj').ProjectionLike} source
 * @param {import('ol/proj').ProjectionLike} destination
 * @returns {import('ol/coordinate').Coordinate}
 */
export function transform(coordinate, source, destination = undefined) {
  if (!destination) {
    destination = "EPSG:4326";
  }
  return olTransform(coordinate, source, destination);
}

/**
 * Transforms an extent to a given projection.
 * Uf no `destination` is defined, the extent is transformed to EPSG:4326.
 * @param {import('ol/extent').Extent} extent
 * @param {import('ol/proj').ProjectionLike} source
 * @param {import('ol/proj').ProjectionLike=} destination
 * @returns {import('ol/extent').Extent}
 */
export function transformExtent(extent, source, destination = undefined) {
  if (!destination) {
    destination = "EPSG:4326";
  }
  return olTransformExtent(extent, source, destination);
}
