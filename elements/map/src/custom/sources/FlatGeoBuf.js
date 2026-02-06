import { transformExtent } from "ol/proj";
import { deserialize } from "flatgeobuf/lib/mjs/geojson";
import Vector from "ol/source/Vector.js";
import GeoJSON from "ol/format/GeoJSON";
import { bbox } from "ol/loadingstrategy";
import { READ_FEATURES_OPTIONS } from "../../enums";

/**
 * @typedef {import("../../types").FlatGeoBufOptions} FlatGeoBufOptions
 */
class FlatGeoBuf extends Vector {
  /**
   * @param {FlatGeoBufOptions} options
   */
  constructor(options) {
    super({
      attributions: options.attributions,
      wrapX: options.wrapX,
      strategy: bbox,
    });
    this.dataProjection =
      options.projection || READ_FEATURES_OPTIONS.dataProjection;
    this.resourceURLs =
      typeof options.url === "string" ? [options.url] : options.url;
    super.setLoader(this.loader);
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
      this.dataProjection,
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
        const geoJsonFormat = new GeoJSON({
          featureProjection: projection,
          dataProjection: this.dataProjection,
        });
        for (const url in this.resourceURLs) {
          const iter = deserialize(url, rect);
          for await (const feature of iter) {
            const olFeature = geoJsonFormat.readFeature(feature);
            //@ts-expect-error for GeoJSON-Format this should always be a single feature.
            features.push(olFeature);
          }
        }
        super.clear();
        super.addFeatures(features);
        success(features);
      }
    } catch (_) {
      failure();
    }
  }
}

export default FlatGeoBuf;
