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
    return new Feature({
      geometry,
      features: features,
    });
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
