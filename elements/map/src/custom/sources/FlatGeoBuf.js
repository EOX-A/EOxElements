import { transformExtent } from "ol/proj";
import { deserialize } from "flatgeobuf/lib/mjs/geojson";
import { Vector } from "ol/source";
import GeoJSON from "ol/format/GeoJSON";

const geoJsonFormat = new GeoJSON({
  featureProjection: "EPSG:3857",
});

/**
 * @typedef {import("../../../types").FlatGeoBufOptions} FlatGeoBufOptions
 */

class FlatGeoBuf extends Vector {
  /**
   * @param {FlatGeoBufOptions} options
   */
  constructor(options) {
    super({
      url: options.url,
      attributions: options.attributions,
      wrapX: options.wrapX,
    });

    this.ressourceURL = options.url;
  }

  /**
   * transform an ol extent into FlatGeoBuf-format
   * @param {import("ol/extent").Extent} extent
   * @param {import("ol/proj").Projection} projection
   * @returns
   */
  fgbBoundingBox(extent, projection) {
    // minx, miny, maxx, maxy
    const transformedExtent = transformExtent(
      extent,
      projection.getCode(),
      "EPSG:4326"
    );
    return {
      minX: transformedExtent[0],
      minY: transformedExtent[1],
      maxX: transformedExtent[2],
      maxY: transformedExtent[3],
    };
  }

  /**
   * @type {import("ol/featureloader").FeatureLoader}
   * @this {FlatGeoBuf}
   */
  async loader(extent, _, projection, success, failure) {
    const rect = this.fgbBoundingBox(extent, projection);
    try {
      // Use flatgeobuf JavaScript API to iterate features as geojson.
      // Because we specify a bounding box, flatgeobuf will only fetch the relevant subset of data,
      // rather than the entire file.
      if (rect.minX !== -Infinity) {
        /**
         * @type {Array<import("ol/Feature").default>}
         */
        const features = [];
        const iter = deserialize(this.ressourceURL, rect);

        for await (const feature of iter) {
          const olFeature = geoJsonFormat.readFeature(feature);
          features.push(olFeature);
        }
        this.clear();
        this.addFeatures(features);
        success(features);
      }
    } catch (e) {
      failure();
    }
  }
}

export default FlatGeoBuf;
