import { getArea, getLength } from "ol/sphere";

/**
 * @param {import("ol").Feature} feature
 */
export const updateMeasure = (feature) => {
  const geom = feature.getGeometry();
  if (!geom) return;
  let measure = "";
  if (geom.getType() === "Polygon" || geom.getType() === "MultiPolygon") {
    const area = getArea(geom);
    if (area > 1000000) {
      measure = (area / 1000000).toFixed(2) + " km²";
    } else {
      measure = area.toFixed(2) + " m²";
    }
  } else if (
    geom.getType() === "LineString" ||
    geom.getType() === "MultiLineString"
  ) {
    const length = getLength(geom);
    if (length > 1000) {
      measure = (length / 1000).toFixed(2) + " km";
    } else {
      measure = length.toFixed(2) + " m";
    }
  } else if (geom.getType() === "Circle") {
    // @ts-expect-error getRadius
    const radius = geom.getRadius();
    const area = Math.PI * Math.pow(radius, 2);
    if (area > 1000000) {
      measure = (area / 1000000).toFixed(2) + " km²";
    } else {
      measure = area.toFixed(2) + " m²";
    }
  }
  if (measure && feature.get("measure") !== measure) {
    feature.set("measure", measure);
  }
};

/**
 * Initializes measuring on the draw layer.
 * Updates the feature property "measure" on geometry change.
 *
 * @param {import("../../main").EOxDrawTools} EoxDrawTool
 */
const initMeasuring = (EoxDrawTool) => {
  const source = EoxDrawTool.drawLayer.getSource();

  /**
   * @param {import("ol/source/Vector").VectorSourceEvent} evt
   */
  const handleFeature = (evt) => {
    const feature = evt.feature;
    if (feature) {
      updateMeasure(feature);
      feature.getGeometry().on("change", () => updateMeasure(feature));
    }
  };

  source.on("addfeature", handleFeature);
  source.getFeatures().forEach((feature) => {
    updateMeasure(feature);
    feature.getGeometry().on("change", () => updateMeasure(feature));
  });
};

export default initMeasuring;
