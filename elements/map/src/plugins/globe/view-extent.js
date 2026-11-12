import { LonLat } from "@openglobus/og";
import {
  WORLD_LON_LAT_EXTENT,
  EXTENT_EDGE_FRACTIONS,
  HORIZON_BISECT_STEPS,
} from "../../enums/index.js";

/**
 * Returns the lon/lat extent of the globe area visible on screen.
 * Projects the screen border onto the ellipsoid, so it follows tilt.
 *
 * @param {import("@openglobus/og").Globe | null} globe
 * @returns {Array<number>} - [minLon, minLat, maxLon, maxLat]; lons go beyond ±180 when the view crosses the antimeridian.
 */
export function getGlobeLonLatExtent(globe) {
  if (!globe) return [...WORLD_LON_LAT_EXTENT];
  const { camera, ellipsoid } = globe.planet;
  const reference = getReferenceHit(camera);
  // Camera looks past the globe: nothing to measure from.
  if (!reference) return [...WORLD_LON_LAT_EXTENT];

  const lonLats = getScreenBorderPoints(camera).map(([x, y]) =>
    ellipsoid.cartesianToLonLat(hitTowardsReference(camera, x, y, reference)),
  );
  const northPole = isPoleOnScreen(globe, 90);
  const southPole = isPoleOnScreen(globe, -90);
  const lats = lonLats.map((lonLat) => lonLat.lat);
  const minLat = southPole ? -90 : Math.min(...lats);
  const maxLat = northPole ? 90 : Math.max(...lats);
  // Border samples do not reach a pole inside the view.
  if (northPole || southPole) return [-180, minLat, 180, maxLat];

  // Offsets from the reference lon stay continuous across the antimeridian (as in MapLibre's globe getBounds).
  const referenceLon = ellipsoid.cartesianToLonLat(reference.hit).lon;
  const offsets = lonLats.map((lonLat) => wrapLon(lonLat.lon - referenceLon));
  const west = Math.min(...offsets);
  const east = Math.max(...offsets);
  // Pole just off screen: the offsets are ambiguous.
  if (east - west >= 180) return [-180, minLat, 180, maxLat];
  return [referenceLon + west, minLat, referenceLon + east, maxLat];
}

/**
 * Wraps a longitude into [-180, 180).
 *
 * @param {number} lon
 * @returns {number}
 */
function wrapLon(lon) {
  return ((((lon + 180) % 360) + 360) % 360) - 180;
}

/**
 * Screen border sample points in camera pixels.
 *
 * @param {import("@openglobus/og").Globe["planet"]["camera"]} camera
 * @returns {Array<[number, number]>}
 */
function getScreenBorderPoints(camera) {
  const { width, height } = camera;
  return EXTENT_EDGE_FRACTIONS.flatMap((fraction) => [
    [fraction * width, 0],
    [fraction * width, height],
    [0, fraction * height],
    [width, fraction * height],
  ]);
}

/**
 * Screen point the extent is measured from: the center, or the bottom center
 * when a tilted camera sees sky at the center.
 *
 * @param {import("@openglobus/og").Globe["planet"]["camera"]} camera
 * @returns {import("./types").ScreenHit | undefined}
 */
function getReferenceHit(camera) {
  const x = camera.width / 2;
  for (const y of [camera.height / 2, camera.height]) {
    const hit = camera.getRayIntersectionEllipsoid(x, y);
    if (hit) return { x, y, hit };
  }
  return undefined;
}

/**
 * Projects a screen point onto the ellipsoid. If it sees space (horizon on
 * screen), bisects towards the reference point for the last hit before the horizon.
 *
 * @param {import("@openglobus/og").Globe["planet"]["camera"]} camera
 * @param {number} x - Screen X in camera pixels.
 * @param {number} y - Screen Y in camera pixels.
 * @param {import("./types").ScreenHit} reference - A screen point known to hit the globe.
 * @returns {import("@openglobus/og").Vec3}
 */
function hitTowardsReference(camera, x, y, reference) {
  const direct = camera.getRayIntersectionEllipsoid(x, y);
  if (direct) return direct;
  let best = reference.hit;
  let miss = 0;
  let hit = 1;
  for (let i = 0; i < HORIZON_BISECT_STEPS; i++) {
    const t = (miss + hit) / 2;
    const point = camera.getRayIntersectionEllipsoid(
      x + (reference.x - x) * t,
      y + (reference.y - y) * t,
    );
    if (!point) {
      miss = t;
      continue;
    }
    hit = t;
    best = point;
  }
  return best;
}

/**
 * Checks whether a pole is in front of the camera and the horizon, and inside the viewport.
 *
 * @param {import("@openglobus/og").Globe} globe
 * @param {number} lat - 90 for the north pole, -90 for the south pole.
 * @returns {boolean}
 */
function isPoleOnScreen(globe, lat) {
  const { camera, ellipsoid } = globe.planet;
  const pole = ellipsoid.lonLatToCartesian(new LonLat(0, lat));
  if (!camera.isVisible(pole)) return false;
  // project3v mirrors points behind the camera into the viewport.
  if (pole.sub(camera.eye).dot(camera.getForward()) <= 0) return false;
  const { x, y } = camera.project3v(pole);
  return x >= 0 && x <= camera.width && y >= 0 && y <= camera.height;
}
