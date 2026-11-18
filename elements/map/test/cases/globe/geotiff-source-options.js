import { getGeoTIFFSourceOptions } from "../../../src/plugins/globe/openglobus.js";

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
