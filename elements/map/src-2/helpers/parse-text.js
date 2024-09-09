import TopoJSON from "ol/format/TopoJSON";
import GeoJSON from "ol/format/GeoJSON";
import KML from "ol/format/KML";
import { addNewFeature } from "./";
import { READ_FEATURES_OPTIONS } from "../enums";

/**
 * This function reads text and attempts to parse it as GeoJSON, KML, or TopoJSON.
 * If successful, it adds the parsed features to the map.
 *
 * @param {string} text - The string containing the geographic data to be parsed.
 * @param {import("ol/layer").Vector} vectorLayer - The vector layer to which the parsed features will be added.
 * @param {import("../main").EOxMap} EOxMap - An instance of EOxMap, used here for context and potentially for further operations like event dispatching.
 * @param {boolean} replaceFeatures - Optional boolean flag indicating whether to replace the existing features with the new ones.
 * @return {void}
 */
export default function parseTextToFeature(
  text,
  vectorLayer,
  EOxMap,
  replaceFeatures = false
) {
  try {
    // Attempt to parse the input text in various formats
    const formatReader = getFormatReader(text);
    if (!formatReader) {
      console.error("Unsupported format or invalid data");
      return;
    }

    // Parse features with the detected format
    const features = formatReader.readFeatures(text, READ_FEATURES_OPTIONS);

    // Utilize the previously defined function to add these features to the vector layer
    addNewFeature(
      { features: features },
      vectorLayer,
      EOxMap,
      false,
      replaceFeatures
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
  if (isGeoJSON(text)) return new GeoJSON();
  else if (isKML(text)) return new KML({ extractStyles: false });
  else if (isTopoJSON(text)) return new TopoJSON();
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
    const obj = JSON.parse(text);
    return obj.type === "FeatureCollection" || obj.type === "Feature";
  } catch (e) {
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
    const obj = JSON.parse(text);
    return obj.type === "Topology" && obj.objects;
  } catch (e) {
    return false;
  }
}
