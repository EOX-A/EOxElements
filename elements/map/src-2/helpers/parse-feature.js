import GeoJSON from "ol/format/GeoJSON";
import { READ_FEATURES_OPTIONS } from "../enums";

export default function parseFeature(features) {
  const format = new GeoJSON();
  return format.writeFeaturesObject(features, READ_FEATURES_OPTIONS);
}
