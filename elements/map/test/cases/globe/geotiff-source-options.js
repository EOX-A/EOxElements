import { GeoTIFFLayer } from "@openglobus/og";
import WebGLTileLayer from "ol/layer/WebGLTile.js";
import GeoTIFF from "ol/source/GeoTIFF.js";
import {
  getGeoTIFFSourceOptions,
  getGeoTIFFRenderOptions,
} from "../../../src/plugins/globe/openglobus.js";

/**
 * Tests the translation of OL GeoTIFF source definitions (single url or
 * multiple COG sources) into OpenGlobus GeoTIFFLayer source options.
 */
export const testGeoTIFFSourceOptions = () => {
  // single COG in `sources`
  expect(
    getGeoTIFFSourceOptions({
      type: "GeoTIFF",
      sources: [{ url: "https://example.com/a.tif", nodata: 0 }],
    }),
  ).to.deep.equal({ src: "https://example.com/a.tif", nodata: 0 });

  // top-level `url`
  expect(
    getGeoTIFFSourceOptions({
      type: "GeoTIFF",
      url: "https://example.com/a.tif",
    }),
  ).to.deep.equal({ src: "https://example.com/a.tif" });

  // multiple COGs, stacked as bands
  expect(
    getGeoTIFFSourceOptions({
      type: "GeoTIFF",
      sources: [
        { url: "https://example.com/b04.tif", max: 10000 },
        { url: "https://example.com/b03.tif", min: 0, max: 10000 },
        { url: "https://example.com/b02.tif", bands: [1] },
      ],
    }),
  ).to.deep.equal({
    sources: [
      { src: "https://example.com/b04.tif", max: 10000 },
      { src: "https://example.com/b03.tif", min: 0, max: 10000 },
      { src: "https://example.com/b02.tif", bands: [1] },
    ],
  });
};

/**
 * Tests that GeoTIFF render options follow the OL source: the alpha band OL
 * adds for nodata counts as valid, and unblended sampling stays unblended.
 */
export const testGeoTIFFRenderOptions = () => {
  /**
   * A GeoTIFF layer whose file had nodata, so OL added an alpha band (band 2).
   *
   * @param {{ normalize?: boolean, interpolate?: boolean, style?: any }} options
   */
  const layerWith = ({ normalize = false, interpolate = false, style }) => {
    const source = new GeoTIFF({
      sources: [{ blob: new Blob() }],
      normalize,
      interpolate,
    });
    // Set by OL once it read a file with nodata.
    source.nodataBandIndex = 2;
    return new WebGLTileLayer({ source, ...(style && { style }) });
  };
  /** @param {number} valid - Alpha band value of valid pixels. */
  const alphaMasked = (valid) => ({
    color: [
      "case",
      ["==", ["band", 2], valid],
      ["interpolate", ["linear"], ["band", 1], 0, "black", 10, "white"],
      "transparent",
    ],
  });
  /**
   * Renders one pixel with og; private og API, renders rasters without a file.
   *
   * @param {any} layer - OL GeoTIFF layer.
   * @param {number[]} bands - The pixel's band values.
   * @returns {number[]} The pixel's RGBA.
   */
  const renderPixel = (layer, bands) =>
    Array.from(
      /** @type {any} */ (
        new GeoTIFFLayer("t", {
          src: new ArrayBuffer(0),
          renderOptions: { ...getGeoTIFFRenderOptions(layer), nodata: -9999 },
        })
      )._renderToImageData({
        rasters: bands.map((value) => Float32Array.of(value)),
        width: 1,
        height: 1,
      }).data,
    );

  // The alpha band condition holds, so band 1 is drawn: mid-grey on the ramp.
  // Raw values: valid alpha is 255; normalized values: 1.
  [
    layerWith({ style: alphaMasked(255) }),
    layerWith({ normalize: true, style: alphaMasked(1) }),
  ].forEach((layer) => {
    const [red, , , alpha] = renderPixel(layer, [5]);
    expect(alpha).to.be.greaterThan(0);
    expect(red).to.be.closeTo(128, 10);
  });

  // Without a style an RGB file keeps its colours.
  expect(renderPixel(layerWith({}), [10, 200, 30]).slice(0, 3)).to.deep.equal([
    10, 200, 30,
  ]);

  // og samples like OL: blended where OL interpolates, og's nearest default otherwise.
  expect(
    getGeoTIFFRenderOptions(
      layerWith({ interpolate: true, style: alphaMasked(255) }),
    ),
  ).to.have.property("resampleMethod", "bilinear");
  expect(
    getGeoTIFFRenderOptions(layerWith({ style: alphaMasked(255) })),
  ).not.to.have.property("resampleMethod");
};
