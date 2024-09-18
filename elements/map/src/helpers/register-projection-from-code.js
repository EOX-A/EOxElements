import { fromEPSGCode, register } from "ol/proj/proj4";
import proj4 from "proj4";

/**
 * Fetches the projection definition for a given EPSG code from epsg.io and registers the projection using proj4.
 *
 * @param {string | number} code - The EPSG code (e.g., 4326 or 'EPSG:4326').
 * @returns {Promise<import("ol/proj/Projection").default>} - A promise that resolves to the registered projection.
 */
export default async function registerProjectionFromCode(code) {
  // Register proj4 with OpenLayers to allow handling of custom projections
  register(proj4);

  // Fetch and register the projection definition from epsg.io using the provided EPSG code=
  return await fromEPSGCode(code);
}
