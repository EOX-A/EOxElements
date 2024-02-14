// Import necessary OpenLayers formats
import GeoJSON from "ol/format/GeoJSON";
import KML from "ol/format/KML";
import TopoJSON from "ol/format/TopoJSON";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { EOxMap } from "./main";
import { LineString, Polygon } from "ol/geom";
import { getArea, getLength } from "ol/sphere";
import { getUid } from "ol";
import { DrawEvent } from "ol/interaction/Draw";
import { DragAndDropEvent } from "ol/interaction/DragAndDrop";
import Feature from "ol/Feature";

/**
 * Define the read options with proper typing
 */
const READ_FEATURES_OPTIONS = {
  dataProjection: "EPSG:4326", // Define the source projection
  featureProjection: "EPSG:3857", // Define the target projection for the map
};

/**
 * Dispatches a custom event with the given type and optional eventInitDict.
 *
 * @param {EOxMap} EOxMap - the map instance on which to dispatch the event
 * @param {string} type - the type of the event to dispatch
 * @param {DrawEvent | DragAndDropEvent | { features: any }} e
 * @param {{[p: string]: any}} geojson
 */
function dispatchEvt(
  EOxMap: EOxMap,
  type: string,
  e: DrawEvent | DragAndDropEvent | { features: any },
  geojson?: { [p: string]: any }
) {
  const evt = new CustomEvent(type, {
    detail: {
      originalEvent: e,
      ...(geojson && { geojson: geojson }),
    },
  });
  EOxMap.dispatchEvent(evt);
}

/**
 * Drag and drop upload shape file's event
 *
 * @param {DrawEvent | DragAndDropEvent} e
 * @param {VectorLayer<VectorSource>} drawLayer
 * @param {EOxMap} EOxMap
 * @param {boolean} isDraw
 */
export function addNewFeature(
  e: DrawEvent | DragAndDropEvent | { features: any },
  drawLayer: VectorLayer<VectorSource>,
  EOxMap: EOxMap,
  isDraw?: boolean
) {
  // @ts-ignore
  const features = isDraw ? [e.feature] : e.features;

  const currFeatures = drawLayer.getSource().getFeatures().length;
  if (
    !drawLayer.get("multipleFeatures") &&
    (currFeatures || features.length > 1)
  )
    throw new Error("Multiple features detected!");

  features.forEach((feature: Feature) => {
    const geom = feature.getGeometry();

    if (geom instanceof LineString) {
      const length = getLength(geom, {
        radius: 6378137,
        projection: "EPSG:3857",
      });
      feature.set("measure", length);
    } else if (geom instanceof Polygon) {
      const area = getArea(geom, { radius: 6378137, projection: "EPSG:3857" });
      feature.set("measure", area);
    }
    const uid = getUid(feature);
    feature.set("id", uid);
    feature.setId(uid);
  });

  if (isDraw) {
    const format = new GeoJSON();
    const geoJsonObject = format.writeFeatureObject(features[0]);
    dispatchEvt(EOxMap, "drawend", e, geoJsonObject);
  } else {
    drawLayer.getSource().addFeatures(features);

    EOxMap.map
      .getView()
      .fit(drawLayer.getSource().getExtent(), { duration: 750 });

    dispatchEvt(EOxMap, "addfeatures", e);
  }
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
