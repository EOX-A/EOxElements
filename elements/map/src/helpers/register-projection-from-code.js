import { fromEPSGCode, register } from "ol/proj/proj4";
import proj4 from "proj4";

/**
 * given a projection code, this fetches the definition from epsg.io
 * and registers the projection using proj4
 * @param {string | number} code - The EPSG code (e.g. 4326 or 'EPSG:4326').
 *
 */
export default async function registerProjectionFromCode(code) {
  register(proj4);
  return await fromEPSGCode(code);
}
