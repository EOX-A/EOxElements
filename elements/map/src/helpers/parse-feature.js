import GeoJSON from "ol/format/GeoJSON";
import { READ_FEATURES_OPTIONS } from "../enums";

/**
 * Converts an array of OpenLayers features into a GeoJSON object.
 *
 * @param {Array<import("ol/Feature").default>} features - An array of OpenLayers features to be converted.
 * @returns {Object} - A GeoJSON object representing the provided features.
 */
export default function parseFeature(features) {
  // Create a new GeoJSON format instance
  const format = new GeoJSON();

  // Convert the OpenLayers features into a GeoJSON object using the specified options
  return format.writeFeaturesObject(features, READ_FEATURES_OPTIONS);
}
