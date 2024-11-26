import GeoJson from "ol/format/GeoJSON";

/**
 * Converts features to a GeoJSON representation.
 *
 * @param {import("ol").Feature[]} features
 * @param {(Parameters<GeoJson["writeFeaturesObject"]>)["1"]} [options]
 */
const featuresToGeoJson = (features, options) => {
  const format = new GeoJson();
  return format.writeFeaturesObject(features, options);
};

export default featuresToGeoJson;
