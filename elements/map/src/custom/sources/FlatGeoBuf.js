import { transformExtent, transform } from "../../helpers/transform";
import { containsCoordinate } from "ol/extent";
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
    const sourceProjectionCode = projection.getCode();
    const dataProjectionCode =
      typeof this.dataProjection === "string"
        ? this.dataProjection
        : this.dataProjection.getCode();

    // Use OL's transformExtent with densification (stops)
    // to better handle non-linear transformations (like polar)
    const transformedExtent = transformExtent(
      extent,
      sourceProjectionCode,
      dataProjectionCode,
      20,
    );

    // If source is not the same as data projection, we perform more robust checks
    if (sourceProjectionCode !== dataProjectionCode) {
      // Check if the extent contains the poles in polar projections
      // Transform pole coordinates to source projection
      const poleNorth = transform([0, 90], "EPSG:4326", sourceProjectionCode);
      const poleSouth = transform([0, -90], "EPSG:4326", sourceProjectionCode);

      const containsNorthPole = containsCoordinate(extent, poleNorth);
      const containsSouthPole = containsCoordinate(extent, poleSouth);

      if (containsNorthPole || containsSouthPole) {
        // If it contains a pole, the extent in 4326 should cover all longitudes
        transformedExtent[0] = -180;
        transformedExtent[2] = 180;
        if (containsNorthPole) {
          transformedExtent[3] = 90;
        }
        if (containsSouthPole) {
          transformedExtent[1] = -90;
        }
      }

      // Antimeridian check
      const normalizeLon = (lon) => ((((lon + 180) % 360) + 360) % 360) - 180;
      const leftLon = normalizeLon(
        transform(
          [extent[0], (extent[1] + extent[3]) / 2],
          sourceProjectionCode,
          dataProjectionCode,
        )[0],
      );
      const rightLon = normalizeLon(
        transform(
          [extent[2], (extent[1] + extent[3]) / 2],
          sourceProjectionCode,
          dataProjectionCode,
        )[0],
      );
      if (leftLon > rightLon) {
        // If the left longitude is greater than the right one,
        // it means we've crossed the antimeridian (180/-180).
        // In this case, we expand the extent to cover all longitudes.
        transformedExtent[0] = -180;
        transformedExtent[2] = 180;
      }
    }

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
        const usedIds = new Set();
        let fallbackCounter = 0;
        for (const url of this.resourceURLs) {
          const iter = deserialize(url, rect);
          for await (const feature of iter) {
            const olFeature = geoJsonFormat.readFeature(feature);
            //@ts-expect-error for GeoJSON-Format this should always be a single feature.
            let id = olFeature.getId();
            // If no ID exists, or it's already used, generate a new one
            if (id == null || usedIds.has(id)) {
              // Generate unique fallback ID
              do {
                id = `auto_${fallbackCounter++}`;
              } while (usedIds.has(id));
              //@ts-expect-error for GeoJSON-Format this should always be a single feature.
              olFeature.setId(id);
            }
            usedIds.add(id);
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
