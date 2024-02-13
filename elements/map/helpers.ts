// Import necessary OpenLayers formats
import GeoJSON from "ol/format/GeoJSON";
import KML from "ol/format/KML";
import TopoJSON from "ol/format/TopoJSON";

/**
 * Define the read options with proper typing
 */
const READ_FEATURES_OPTIONS = {
  dataProjection: "EPSG:4326", // Define the source projection
  featureProjection: "EPSG:3857", // Define the target projection for the map
};

/**
 * This function reads text from the clipboard and attempts to parse it as GeoJSON, KML, or TopoJSON.
 * If successful, it adds the parsed features to the map.
 *
 * @param {function} addNewFeature
 */
export function pasteFeaturesFromClipboard(addNewFeature): void {
  navigator.clipboard
    .readText()
    .then((text: string) => {
      try {
        let features;

        if (isGeoJSON(text))
          features = new GeoJSON().readFeatures(text, READ_FEATURES_OPTIONS);
        else if (isKML(text))
          features = new KML({ extractStyles: false }).readFeatures(
            text,
            READ_FEATURES_OPTIONS
          );
        else if (isTopoJSON(text))
          features = new TopoJSON().readFeatures(text, READ_FEATURES_OPTIONS);
        else {
          console.error("Unsupported format or invalid data");
          return;
        }

        addNewFeature({ features });
      } catch (err) {
        console.error("Error parsing data from clipboard:", err);
      }
    })
    .catch((err: Error) => {
      console.error("Failed to read from clipboard:", err);
    });
}

/**
 * Function to check if a string is valid GeoJSON
 */
export function isGeoJSON(text: string): boolean {
  try {
    const obj = JSON.parse(text);
    return obj.type === "FeatureCollection" || obj.type === "Feature";
  } catch (e) {
    return false;
  }
}

/**
 * Function to check if a string is valid KML
 */
export function isKML(text: string): boolean {
  return text.includes("<kml") && text.includes("</kml>");
}

/**
 * Function to check if a string is valid TopoJSON
 */
export function isTopoJSON(text: string): boolean {
  try {
    const obj = JSON.parse(text);
    return obj.type === "Topology" && obj.objects;
  } catch (e) {
    return false;
  }
}
