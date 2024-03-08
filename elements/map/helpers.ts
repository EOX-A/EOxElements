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
import proj4 from "proj4";
import { fromEPSGCode, register } from "ol/proj/proj4";

/**
 * Specifies the options for reading features with defined source and target projections.
 * `dataProjection` specifies the projection of the input data.
 * `featureProjection` specifies the projection that features should be transformed to.
 */
export const READ_FEATURES_OPTIONS: {
  dataProjection: string;
  featureProjection: string;
} = {
  dataProjection: "EPSG:4326", // Define the source projection
  featureProjection: "EPSG:3857", // Define the target projection for the map
};

/**
 * Dispatches a custom event on the provided EOxMap instance with specified details.
 *
 * @param EOxMap - The EOxMap instance on which the custom event will be dispatched.
 * @param type - A string specifying the type of the event to be dispatched.
 * @param e - An event object which can be of type DrawEvent, DragAndDropEvent, or an object with a features property.
 * @param geoJSON - An object representing GeoJSON data associated with the event.
 */
function dispatchEvt(
  EOxMap: EOxMap,
  type: string,
  e: DrawEvent | DragAndDropEvent | { features: any },
  geoJSON: { [p: string]: any }
) {
  const evt = new CustomEvent(type, {
    detail: {
      originalEvent: e,
      geoJSON,
    },
  });
  EOxMap.dispatchEvent(evt);
}

/**
 * Adds new features to a specified vector layer from drawing/upload/input change events.
 * This function supports handling both single and multiple features.
 *
 * @param e - The event object from drawing or drag-and-drop actions, containing the features.
 * @param vectorLayer - The vector layer to which features will be added.
 * @param EOxMap - The EOxMap instance for dispatching custom events and adjusting the view.
 * @param isDraw - Optional. If true, indicates the features come from a drawing event.
 * @param replaceFeatures - Optional. If true, existing features in the layer are cleared before adding new ones.
 */
export function addNewFeature(
  e: DrawEvent | DragAndDropEvent | { features: any },
  vectorLayer: VectorLayer<VectorSource>,
  EOxMap: EOxMap,
  isDraw: boolean = false,
  replaceFeatures: boolean = false
) {
  // Determine the source of the features based on the event type and isDraw flag.
  // @ts-ignore
  const features = isDraw ? [e.feature] : e.features;

  if (replaceFeatures) vectorLayer.getSource().clear(); // Clear the layer's existing features if the replace flag is true.

  // Check for multiple features when not permitted by the layer configuration.
  const currFeatures = vectorLayer.getSource().getFeatures();
  if (
    !vectorLayer.get("multipleFeatures") &&
    (currFeatures.length || features.length > 1)
  )
    return console.error("Multiple features detected!");

  // Process each feature: calculate measurements for lines and polygons, assign unique IDs.
  features.forEach((feature: Feature) => {
    const geom = feature.getGeometry();

    // Calculate and set the measure based on geometry type.
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

    // Assign a unique ID to each feature for identification.
    const uid = getUid(feature);
    feature.set("id", uid);
    feature.setId(uid);
  });

  // Add the new features to the layer and fit the map view to their extent unless it's a draw event.
  if (!isDraw && features.length) {
    vectorLayer.getSource().addFeatures(features);

    EOxMap.map
      .getView()
      .fit(vectorLayer.getSource().getExtent(), { duration: 750 });
  }

  // Convert features to GeoJSON and dispatch custom events for drawing end or feature addition.
  const format = new GeoJSON();
  const geoJsonObject = JSON.parse(
    format.writeFeatures(features, READ_FEATURES_OPTIONS)
  );

  // Dispatch relevant events based on operation type.
  if (isDraw || replaceFeatures)
    dispatchEvt(EOxMap, "drawend", e, geoJsonObject);
  dispatchEvt(EOxMap, "addfeatures", e, geoJsonObject);
}

/**
 * This function reads text and attempts to parse it as GeoJSON, KML, or TopoJSON.
 * If successful, it adds the parsed features to the map.
 *
 * @param text - The string containing the geographic data to be parsed.
 * @param vectorLayer - The vector layer to which the parsed features will be added.
 * @param EOxMap - An instance of EOxMap, used here for context and potentially for further operations like event dispatching.
 * @param replaceFeatures - Optional boolean flag indicating whether to replace the existing features with the new ones.
 */
export function parseText(
  text: string,
  vectorLayer: VectorLayer<VectorSource>,
  EOxMap: EOxMap,
  replaceFeatures: boolean = false
): void {
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
 * @param text - The string containing the geographic data.
 * @returns A format reader (GeoJSON, KML, or TopoJSON) if a matching format is detected, otherwise null.
 */
function getFormatReader(text: string): GeoJSON | KML | TopoJSON | null {
  if (isGeoJSON(text)) return new GeoJSON();
  else if (isKML(text)) return new KML({ extractStyles: false });
  else if (isTopoJSON(text)) return new TopoJSON();
  else return null;
}

/**
 * Function to check if a string is valid GeoJSON
 *
 * @param text The string to be checked.
 * @returns `true` if the string is a valid GeoJSON object, `false` otherwise.
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
 *
 * @param text The string to be checked.
 * @returns `true` if the string contains KML tags, `false` otherwise.
 */
export function isKML(text: string): boolean {
  return text.includes("<kml") && text.includes("</kml>");
}

/**
 * Function to check if a string is valid TopoJSON
 *
 * @param text The string to be checked.
 * @returns `true` if the string is a valid TopoJSON object, `false` otherwise.
 */
export function isTopoJSON(text: string): boolean {
  try {
    const obj = JSON.parse(text);
    return obj.type === "Topology" && obj.objects;
  } catch (e) {
    return false;
  }
}

/**
 * given a projection code, this fetches the definition from epsg.io
 * and registers the projection using proj4
 * @param code The EPSG code (e.g. 4326 or 'EPSG:4326').
 *
 */
export async function registerProjectionFromCode(code: string | number) {
  register(proj4);
  return await fromEPSGCode(code);
}

/**
 * registers a projection under a given name, defined via a proj4 definition
 * @param name name of the projection (e.g. "EPSG:4326")
 * @param projection proj4 projection definition string
 */
export function registerProjection(
  name: string,
  projection: string | proj4.ProjectionDefinition
) {
  proj4.defs(name, projection);
  register(proj4);
}
