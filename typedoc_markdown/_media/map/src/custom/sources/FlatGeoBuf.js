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
   * @returns {Array<{minX: number, minY: number, maxX: number, maxY: number}>}
   */
  fgbBoundingBoxes(extent, projection) {
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
      50,
    );

    const baseRect = {
      minX: transformedExtent[0],
      minY: transformedExtent[1],
      maxX: transformedExtent[2],
      maxY: transformedExtent[3],
    };

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
        baseRect.minX = -180;
        baseRect.maxX = 180;
        if (containsNorthPole) {
          baseRect.maxY = 90;
        }
        if (containsSouthPole) {
          baseRect.minY = -90;
        }
        return [baseRect];
      }

      // Antimeridian check
      const normalizeLon = (lon) => ((((lon + 180) % 360) + 360) % 360) - 180;
      const stops = 10;
      const segments = [
        [
          [extent[0], extent[1]],
          [extent[0], extent[3]],
        ], // left edge
        [
          [extent[2], extent[1]],
          [extent[2], extent[3]],
        ], // right edge
        [
          [extent[0], extent[1]],
          [extent[2], extent[1]],
        ], // bottom edge
        [
          [extent[0], extent[3]],
          [extent[2], extent[3]],
        ], // top edge
      ];
      let crossesAntimeridian = false;
      let minLonPos = 180;
      let maxLonNeg = -180;
      let hasPos = false;
      let hasNeg = false;

      for (const [start, end] of segments) {
        let prevLon = null;
        for (let i = 0; i <= stops; i++) {
          const coords = [
            start[0] + (end[0] - start[0]) * (i / stops),
            start[1] + (end[1] - start[1]) * (i / stops),
          ];
          const lon = normalizeLon(
            transform(coords, sourceProjectionCode, dataProjectionCode)[0],
          );
          if (lon >= 0) {
            minLonPos = Math.min(minLonPos, lon);
            hasPos = true;
          } else {
            maxLonNeg = Math.max(maxLonNeg, lon);
            hasNeg = true;
          }
          if (prevLon !== null && Math.abs(lon - prevLon) > 180) {
            crossesAntimeridian = true;
          }
          prevLon = lon;
        }
      }

      if (crossesAntimeridian && hasPos && hasNeg) {
        // If we've crossed the antimeridian (180/-180),
        // we return two boxes: one for the positive side and one for the negative side.
        return [
          { ...baseRect, minX: minLonPos, maxX: 180 },
          { ...baseRect, minX: -180, maxX: maxLonNeg },
        ];
      }
    }

    return [baseRect];
  }

  /**
   * @type {import("ol/featureloader").FeatureLoader}
   * @this {FlatGeoBuf}
   */
  async loader(extent, _, projection, success, failure) {
    const rects = this.fgbBoundingBoxes(extent, projection);
    try {
      /**
       * @type {Array<import("ol/Feature").default>}
       */
      const features = [];
      const usedIds = new Set();
      let fallbackCounter = 0;
      const geoJsonFormat = new GeoJSON({
        featureProjection: projection,
        dataProjection: this.dataProjection,
      });

      for (const url of this.resourceURLs) {
        for (const rect of rects) {
          if (rect.minX === -Infinity || rect.maxX === Infinity) continue;
          const iter = deserialize(url, rect);
          for await (const feature of iter) {
            const olFeature = geoJsonFormat.readFeature(feature);
            //@ts-expect-error for GeoJSON-Format this should always be a single feature.
            const id = olFeature.getId();

            const actualId =
              id !== null && id !== undefined ? id : fallbackCounter++;
            // Create a unique internal ID combining URL and feature ID
            // to allow deduplication across split boxes but keep features from different URLs
            const combinedId = `${url}_${actualId}`;
            if (usedIds.has(combinedId)) {
              continue;
            }
            usedIds.add(combinedId);

            //@ts-expect-error for GeoJSON-Format this should always be a single feature.
            olFeature.setId(combinedId);
            //@ts-expect-error for GeoJSON-Format this should always be a single feature.
            features.push(olFeature);
          }
        }
      }
      super.clear();
      super.addFeatures(features);
      success(features);
    } catch (_) {
      failure();
    }
  }
}

export default FlatGeoBuf;
