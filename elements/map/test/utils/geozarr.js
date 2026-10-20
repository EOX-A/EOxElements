const STORE_URL =
  "https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-1-grd-rtc-staging/s1-rtc-32TQR.zarr";

/**
 * Time values of the fixture store by index along its time axis (not chronological)
 */
export const STORE_TIME = [
  "2026-06-28T05:27:11.000Z",
  "2026-06-23T05:19:03.000Z",
  "2026-07-01T05:10:03.000Z",
  "2026-06-29T05:26:04.000Z",
  "2026-07-13T05:10:04.000Z",
  "2026-07-11T05:26:05.000Z",
];

/**
 * Serves the fixture store: the group metadata and its time values; band data and anything else is not found.
 * The fixture keeps only the coarsest level, `r720m`, so the zoomed-out map loads a single tile instead of thousands.
 */
export function interceptGeoZarrStore() {
  cy.intercept(`${STORE_URL}/**`, { statusCode: 404 });
  // `**` does not match path segments starting with a dot
  cy.intercept(`${STORE_URL}/.zmetadata`, { statusCode: 404 });
  cy.intercept(`${STORE_URL}/descending/zarr.json`, {
    fixture: "./map/test/fixtures/geozarr/descending/zarr.json",
  });
  cy.fixture(
    "./map/test/fixtures/geozarr/descending/r720m/time/c/0",
    null,
  ).then((timeChunk) =>
    cy.intercept(`${STORE_URL}/descending/r720m/time/c/0`, {
      // a Buffer body is sent as JSON, the raw bytes need an ArrayBuffer
      body: timeChunk.buffer.slice(
        timeChunk.byteOffset,
        timeChunk.byteOffset + timeChunk.byteLength,
      ),
    }),
  );
}

/**
 * Builds a GeoZarr layer definition for the fixture store
 */
export function geoZarrLayerDefinition(properties = {}, bands = ["vv"]) {
  return {
    type: "WebGLTile",
    properties: { id: "cube", ...properties },
    source: {
      type: "GeoZarr",
      url: `${STORE_URL}/descending`,
      bands,
    },
  };
}
