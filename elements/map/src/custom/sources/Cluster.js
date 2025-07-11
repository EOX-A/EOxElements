import { Point } from "ol/geom";
import { Cluster } from "ol/source";

/**
 * @typedef {import("../../types").EOxClusterOptions} ClusterOptions
 */

class EOxCluster extends Cluster {
  /**
   * @param {ClusterOptions} options
   */
  constructor(options) {
    super({
      ...options,
    });

    this.geometryFunction =
      /**
       * @param {import("ol/Feature").FeatureLike} feature
       * @returns {import("ol/geom/Point").default}
       */
      function (feature) {
        const geometry = feature && feature.getGeometry();
        if (geometry instanceof Point) {
          return geometry;
        }
        // to do: center point
        if (geometry) {
          return null;
        }

        return null;
      };
  }
}

export default EOxCluster;
