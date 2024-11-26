import WKT from "ol/format/WKT.js";

/**
 * Converts features to a Well-Known Text (WKT) representation.
 *
 * @type {WKT["writeFeatures"]}
 */
const featureToWKT = (features, options) => {
  const format = new WKT();
  return format.writeFeatures(features, options);
};

export default featureToWKT;
