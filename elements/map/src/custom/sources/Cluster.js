import { Feature } from "ol";
import { Point, Polygon } from "ol/geom";
import { Cluster } from "ol/source";

/**
 * @typedef {import("../../types").EOxClusterOptions} ClusterOptions
 */

class EOxCluster extends Cluster {
  /**
   * @param {ClusterOptions} options
   */
  constructor(options = {}) {
    super({
      ...options,
      createCluster: EOxCluster.defaultCreateCluster,
      geometryFunction: EOxCluster.defaultGeometryFunction,
    });
  }

  static defaultCreateCluster(point, features) {
    const geometry =
      features.length === 1 && features[0].getGeometry() instanceof Polygon
        ? features[0].getGeometry()
        : point;
    const feature = new Feature({
      geometry,
      features: features,
    });

    if (features.length === 1) {
      // If there is only one feature, write the properties onto the cluster feature,
      // so they can be used with flat styles
      const singleFeature = features[0];
      for (const key in singleFeature.getProperties()) {
        if (key !== "geometry") {
          feature.set(key, singleFeature.get(key));
        }
      }
    }
    return feature;
  }

  /**
   * @param {import("ol/Feature").FeatureLike} feature
   * @returns {import("ol/geom/Point").default}
   */
  static defaultGeometryFunction(feature) {
    const geometry = feature && feature.getGeometry();
    if (geometry instanceof Point) {
      return geometry;
    }
    if (geometry instanceof Polygon) {
      return geometry.getInteriorPoint();
    }
    return null;
  }
}

export default EOxCluster;
