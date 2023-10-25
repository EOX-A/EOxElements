import * as ol from "ol/style.js";

/**
 * Default polygon style
 *
 * @returns {ol.Style}
 */
export const getDefaultPolygonStyle = () => {
  const fill = new ol.Fill({
    color: "rgba(255,255,255,0.4)",
  });
  const stroke = new ol.Stroke({
    color: "#3399CC",
    width: 1.25,
  });

  return new ol.Style({
    fill: fill,
    stroke: stroke,
  });
};

/**
 * Default selected polygon style
 *
 * @returns {ol.Style}
 */
export const getSelectedPolygonStyle = () => {
  const fill = new ol.Fill({
    color: "rgba(51, 153, 204,0.5)",
  });
  const stroke = new ol.Stroke({
    color: "#3399CC",
    width: 2.5,
  });

  return new ol.Style({
    fill: fill,
    stroke: stroke,
  });
};
