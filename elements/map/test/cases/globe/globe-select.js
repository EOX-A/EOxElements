import { LonLat, Extent, mercator, Entity } from "@openglobus/og";
import {
  pickGeoTIFFValues,
  bandValuesToProperties,
  parseFeatureInfoResponse,
  highlightGlobeEntity,
  resetGlobeEntity,
} from "../../../src/plugins/globe/select.js";

/**
 * Creates a fake globe with one rendered segment, and a fake GeoTIFF layer
 * whose raster cache holds a 2x2 tile with 2 bands.
 *
 * @param {"EPSG:3857" | "EPSG:4326"} projection - The segment projection.
 * @param {number | null} [nodata] - The nodata value of the layer.
 */
const createFakeGlobe = (projection, nodata = null) => {
  const extentLonLat = new Extent(new LonLat(0, 0), new LonLat(10, 10));
  const segment = {
    tileZoom: 3,
    tileX: 4,
    tileY: 2,
    _projection: { code: projection },
    _extentLonLat: extentLonLat,
    _extent:
      projection === "EPSG:3857"
        ? new Extent(
            mercator.forward(new LonLat(0, 0)),
            mercator.forward(new LonLat(10, 10)),
          )
        : extentLonLat,
  };
  const globe = /** @type {any} */ ({
    planet: { quadTreeStrategy: { _renderedNodes: [{ segment }] } },
  });
  const geoTIFFLayer = {
    nodata,
    _rasterCache: new Map([
      [
        "3_4_2",
        {
          width: 2,
          height: 2,
          // pixel order: top-left, top-right, bottom-left, bottom-right
          rasters: [
            new Float32Array([1, 2, 3, NaN]),
            new Float32Array([10, 20, 30, 40]),
          ],
        },
      ],
    ]),
  };
  return { globe, geoTIFFLayer };
};

/**
 * Tests the globe select helpers: GeoTIFF pixel lookup, band property mapping
 * and GetFeatureInfo response parsing.
 */
export const testGlobeSelect = () => {
  ["EPSG:3857", "EPSG:4326"].forEach((projection) => {
    const { globe, geoTIFFLayer } = createFakeGlobe(
      /** @type {any} */ (projection),
    );
    // top-left / top-right / bottom-left pixel
    expect(
      pickGeoTIFFValues(globe, geoTIFFLayer, new LonLat(2, 9)),
    ).to.deep.equal([1, 10]);
    expect(
      pickGeoTIFFValues(globe, geoTIFFLayer, new LonLat(8, 9)),
    ).to.deep.equal([2, 20]);
    expect(
      pickGeoTIFFValues(globe, geoTIFFLayer, new LonLat(2, 1)),
    ).to.deep.equal([3, 30]);
    // NaN (masked) pixel
    expect(pickGeoTIFFValues(globe, geoTIFFLayer, new LonLat(8, 1))).to.equal(
      null,
    );
    // outside of any rendered segment
    expect(pickGeoTIFFValues(globe, geoTIFFLayer, new LonLat(50, 50))).to.equal(
      null,
    );
  });

  // nodata value
  const { globe, geoTIFFLayer } = createFakeGlobe("EPSG:4326", 2);
  expect(pickGeoTIFFValues(globe, geoTIFFLayer, new LonLat(8, 9))).to.equal(
    null,
  );
  // tile not loaded yet
  geoTIFFLayer._rasterCache.clear();
  expect(pickGeoTIFFValues(globe, geoTIFFLayer, new LonLat(2, 9))).to.equal(
    null,
  );

  // band values to tooltip properties
  expect(bandValuesToProperties([1, 0, 3])).to.deep.equal({
    band1: 1,
    band2: 0,
    band3: 3,
  });
  expect(bandValuesToProperties([0, 0])).to.equal(null);
  expect(bandValuesToProperties(null)).to.equal(null);

  // GetFeatureInfo responses
  expect(
    parseFeatureInfoResponse(
      JSON.stringify({
        type: "FeatureCollection",
        features: [{ type: "Feature", properties: { name: "Texas" } }],
      }),
    ),
  ).to.deep.equal({ name: "Texas" });
  expect(
    parseFeatureInfoResponse(
      JSON.stringify({ type: "Feature", properties: { name: "Ohio" } }),
    ),
  ).to.deep.equal({ name: "Ohio" });
  expect(
    parseFeatureInfoResponse(
      JSON.stringify({ type: "FeatureCollection", features: [] }),
    ),
  ).to.equal(null);
  expect(parseFeatureInfoResponse("<html>error</html>")).to.equal(null);
};

/**
 * Tests that the select interaction `style` is applied to a globe vector entity
 * and that the original style is restored afterwards.
 */
export const testGlobeSelectStyle = () => {
  const entity = /** @type {any} */ (
    new Entity({
      properties: { name: "test" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [0, 0],
            [10, 0],
            [10, 10],
            [0, 0],
          ],
        ],
        style: { lineColor: "blue", lineWidth: 1, fillColor: "white" },
      },
    })
  );
  const { geometry } = entity;
  const original = {
    lineColor: geometry._style.lineColor.toArray(),
    lineWidth: geometry._style.lineWidth,
    fillColor: geometry._style.fillColor.toArray(),
  };

  highlightGlobeEntity(entity, {
    "stroke-color": "red",
    "stroke-width": ["case", ["==", ["get", "name"], "test"], 3, 1],
  });
  expect(geometry._style.lineColor.toArray()).to.deep.equal([1, 0, 0, 1]);
  expect(geometry._style.lineWidth).to.equal(3);
  // keys not set by the select style are kept
  expect(geometry._style.fillColor.toArray()).to.deep.equal(original.fillColor);

  resetGlobeEntity(entity);
  expect(geometry._style.lineColor.toArray()).to.deep.equal(original.lineColor);
  expect(geometry._style.lineWidth).to.equal(original.lineWidth);
};
