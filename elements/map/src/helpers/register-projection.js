import proj4 from "proj4";
import { get as getProj } from "ol/proj";
import { register } from "ol/proj/proj4";

/**
 * Registers a projection under a given name using a proj4 definition.
 * This allows OpenLayers to recognize and work with custom or predefined projections.
 *
 * @param {string} name - The name of the projection (e.g., "EPSG:4326").
 * @param {string | proj4.ProjectionDefinition} projection - The proj4 projection definition string or object.
 * @param {import("ol/extent").Extent} [extent=undefined] - Optional extent for the projection. Defines the coordinate system's valid area.
 */
export default function registerProjection(
  name,
  projection,
  extent = undefined
) {
  // Register the projection with proj4 using the provided name and definition
  proj4.defs(name, projection);

  // Register the projection with proj4 using the provided name and definition
  register(proj4);

  // If an extent is provided, set it on the projection in OpenLayers
  if (typeof extent !== "undefined") getProj(name).setExtent(extent);
}
