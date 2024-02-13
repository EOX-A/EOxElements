// Import necessary OpenLayers formats
import GeoJSON from "ol/format/GeoJSON";
import KML from "ol/format/KML";
import TopoJSON from "ol/format/TopoJSON";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { EOxMap } from "./main";

/**
 * Define the read options with proper typing
 */
const READ_FEATURES_OPTIONS = {
  dataProjection: "EPSG:4326", // Define the source projection
  featureProjection: "EPSG:3857", // Define the target projection for the map
};

/**
 * Drag and drop upload shape file's event
 *
 * @param {object} e
 * @param {VectorLayer<VectorSource>} drawLayer
 * @param {EOxMap} EOxMap
 */
export function addNewFeature(
  e: object,
  drawLayer: VectorLayer<VectorSource>,
  EOxMap: EOxMap
) {
  const currFeatures = drawLayer.getSource().getFeatures().length;
  if (
    !drawLayer.get("multipleFeatures") &&
    (currFeatures || e.features.length > 1)
  )
    throw new Error("Multiple features detected!");

  //@ts-ignore
  e.features.forEach((feature) => feature.set("id", feature.ol_uid));

  //@ts-ignore
  drawLayer.getSource().addFeatures(e.features);
  EOxMap.map
    .getView()
    .fit(drawLayer.getSource().getExtent(), { duration: 750 });

  const drawendEvt = new CustomEvent("addfeatures", {
    detail: {
      originalEvent: e,
    },
  });
  EOxMap.dispatchEvent(drawendEvt);
}

/**
 * This function reads text from the clipboard and attempts to parse it as GeoJSON, KML, or TopoJSON.
 * If successful, it adds the parsed features to the map.
 *
 * @param {VectorLayer<VectorSource>} drawLayer
 * @param {EOxMap} EOxMap
 */
export function pasteFeaturesFromClipboard(
  drawLayer: VectorLayer<VectorSource>,
  EOxMap: EOxMap
): void {
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

        addNewFeature({ features }, drawLayer, EOxMap);
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
