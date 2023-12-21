/**
 * Detects the type of map URL based on WMS and XYZ patterns.
 *
 * @param {string} url - The URL to analyze.
 * @returns {"TileWMS" | false | "XYZ"} - The detected map URL type, or false if not recognized.
 */
export default function detectMapURLType(url) {
  // Regular expressions to match WMS and XYZ patterns
  const wmsPattern = /\b(?:wms|ows)\b/i;
  const xyzPattern = /{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;

  // Check if the URL matches the WMS pattern
  if (wmsPattern.test(url)) return "TileWMS";

  // Check if the URL matches the XYZ pattern
  if (xyzPattern.test(url)) return "XYZ";

  // Neither WMS nor XYZ pattern matched
  return false;
}
