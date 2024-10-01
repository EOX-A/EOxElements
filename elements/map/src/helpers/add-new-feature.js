// Import necessary OpenLayers formats
import GeoJSON from "ol/format/GeoJSON";
import { LineString, Polygon } from "ol/geom";
import { getArea, getLength } from "ol/sphere";
import { getUid } from "ol";
import { READ_FEATURES_OPTIONS } from "../enums";

/**
 * Adds new features to a specified vector layer from drawing/upload/input change events.
 * This function supports handling both single and multiple features.
 *
 * @param {import("ol/interaction/Draw").DrawEvent | import("ol/interaction/DragAndDrop").DragAndDropEvent | { features: Array<import("ol/Feature").default> }} e - The event object from drawing or drag-and-drop actions, containing the features.
 * @param {import("ol/layer").Vector} vectorLayer - The vector layer to which features will be added.
 * @param {import("../main").EOxMap} EOxMap - The EOxMap instance for dispatching custom events and adjusting the view.
 * @param {boolean} isDraw - Optional. If true, indicates the features come from a drawing event.
 * @param {boolean} replaceFeatures - Optional. If true, existing features in the layer are cleared before adding new ones.
 */
export default function addNewFeature(
  e,
  vectorLayer,
  EOxMap,
  isDraw = false,
  replaceFeatures = false
) {
  // Determine the source of the features based on the event type and isDraw flag.
  // @ts-expect-error - Property 'feature' does not exist on type 'DrawEvent | DragAndDropEvent
  const features = /** @type {Array} **/ (isDraw ? [e.feature] : e.features);

  if (replaceFeatures) vectorLayer.getSource().clear(); // Clear the layer's existing features if the replace flag is true.

  // Check for multiple features when not permitted by the layer configuration.
  const currFeatures = vectorLayer.getSource().getFeatures();
  if (
    !vectorLayer.get("multipleFeatures") &&
    (currFeatures.length || features.length > 1)
  )
    return console.error("Multiple features detected!");

  // Process each feature: calculate measurements for lines and polygons, assign unique IDs.
  features.forEach((feature) => {
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
 * Dispatches a custom event on the provided EOxMap instance with specified details.
 *
 * @param {import("../main").EOxMap} EOxMap - The EOxMap instance on which the custom event will be dispatched.
 * @param {string} type - A string specifying the type of the event to be dispatched.
 * @param {import("ol/interaction/Draw").DrawEvent | import("ol/interaction/DragAndDrop").DragAndDropEvent | { features: any }} e - An event object which can be of type DrawEvent, DragAndDropEvent, or an object with a features property.
 * @param {{ [p: string]: any }} geoJSON - An object representing GeoJSON data associated with the event.
 */
function dispatchEvt(EOxMap, type, e, geoJSON) {
  // Create a new custom event with the specified type and detail, including the original event and GeoJSON data
  const evt = new CustomEvent(type, {
    detail: {
      originalEvent: e,
      geoJSON,
    },
  });

  // Dispatch the custom event on the EOxMap object
  EOxMap.dispatchEvent(evt);
}
