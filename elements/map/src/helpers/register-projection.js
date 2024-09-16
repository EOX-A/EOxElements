import proj4 from "proj4";
import { get as getProj } from "ol/proj";
import { register } from "ol/proj/proj4";

/**
 * registers a projection under a given name, defined via a proj4 definition
 * @param {string} name - name of the projection (e.g. "EPSG:4326")
 * @param {string | proj4.ProjectionDefinition} projection -  proj4 projection definition string
 * @param {import("ol/extent").Extent} extent
 */
export default function registerProjection(
  name,
  projection,
  extent = undefined
) {
  proj4.defs(name, projection);
  register(proj4);
  if (typeof extent !== "undefined") {
    getProj(name).setExtent(extent);
  }
}
