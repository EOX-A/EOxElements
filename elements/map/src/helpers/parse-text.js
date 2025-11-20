import TopoJSON from "ol/format/TopoJSON";
import GeoJSON from "ol/format/GeoJSON";
import KML from "ol/format/KML";
import { addNewFeature } from "./";
import { READ_FEATURES_OPTIONS } from "../enums";

/**
 * This function determines the projection of the features based on the provided text.
 *
 * @param {GeoJSON | KML | TopoJSON | null} formatReader
 * @param {string} text
 * @returns {string | undefined} - Returns the projection string if determined, otherwise undefined.
 */
export function getProj(formatReader, text) {
  const features = formatReader.readFeatures(text);
  const feature = features[0];
  const geometry = feature.getGeometry();
  // @ts-expect-error - Property 'getCoordinates' does not exist on type 'Geometry' but it does not showing
  const coordinates = geometry.getCoordinates();
  if (coordinates && coordinates.length > 0) {
    const coord = coordinates[0][0][0];
    if (coord >= -180 && coord <= 180) {
      return "EPSG:4326";
    } else {
      return "EPSG:3857";
    }
  }

  return undefined;
}

/**
 * This function reads text and attempts to parse it as GeoJSON, KML, or TopoJSON.
 * If successful, it adds the parsed features to the map.
 *
 * @param {string} text - The string containing the geographic data to be parsed.
 * @param {import("ol/layer").Vector} vectorLayer - The vector layer to which the parsed features will be added.
 * @param {import("../main").EOxMap} EOxMap - An instance of EOxMap, used here for context and potentially for further operations like event dispatching.
 * @param {boolean} replaceFeatures - Optional boolean flag indicating whether to replace the existing features with the new ones.
 * @param {boolean} animate - Optional boolean flag indicating whether to animate the map on feature change.
 * @return {void}
 */
export default function parseTextToFeature(
  text,
  vectorLayer,
  EOxMap,
  replaceFeatures = false,
  animate = true,
) {
  try {
    // Attempt to parse the input text in various formats
    const formatReader = getFormatReader(text);
    if (!formatReader) {
      console.error("Unsupported format or invalid data");
      return;
    }

    const projection = getProj(formatReader, text);

    // Parse features with the detected format
    const features = formatReader.readFeatures(text, {
      dataProjection: projection || READ_FEATURES_OPTIONS.dataProjection,
      featureProjection: EOxMap.projection,
    });

    // Utilize the previously defined function to add these features to the vector layer
    addNewFeature(
      { features: features },
      vectorLayer,
      EOxMap,
      false,
      replaceFeatures,
      animate,
    );
  } catch (err) {
    console.error("Error parsing data:", err);
  }
}

/**
 * Determines the appropriate format reader for the given text based on its content.
 *
 * @param {string} text - The string containing the geographic data.
 * @returns {GeoJSON | KML | TopoJSON | null} A format reader (GeoJSON, KML, or TopoJSON) if a matching format is detected, otherwise null.
 */
function getFormatReader(text) {
  // Check if the text is in GeoJSON format
  if (isGeoJSON(text)) return new GeoJSON();
  // Check if the text is in KML format
  else if (isKML(text)) return new KML({ extractStyles: false });
  // Check if the text is in TopoJSON format
  else if (isTopoJSON(text)) return new TopoJSON();
  // Return `null` if no known format is detected
  else return null;
}

/**
 * Function to check if a string is valid GeoJSON
 *
 * @param {string} text - The string to be checked.
 * @returns {boolean} - `true` if the string is a valid GeoJSON object, `false` otherwise.
 */
export function isGeoJSON(text) {
  try {
    // Return `null` if no known format is detected
    const obj = JSON.parse(text);

    return obj.type === "FeatureCollection" || obj.type === "Feature";
  } catch (_) {
    return false;
  }
}

/**
 * Function to check if a string is valid KML
 *
 * @param {string} text - The string to be checked.
 * @returns {boolean} - `true` if the string contains KML tags, `false` otherwise.
 */
export function isKML(text) {
  // Return `null` if no known format is detected
  return text.includes("<kml") && text.includes("</kml>");
}

/**
 * Function to check if a string is valid TopoJSON
 *
 * @param {string} text - The string to be checked.
 * @returns {boolean} - `true` if the string is a valid TopoJSON object, `false` otherwise.
 */
export function isTopoJSON(text) {
  try {
    // Return `null` if no known format is detected
    const obj = JSON.parse(text);

    return obj.type === "Topology" && obj.objects;
  } catch (_) {
    return false;
  }
}
