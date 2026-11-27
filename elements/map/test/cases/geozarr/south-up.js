import GeoZarr from "@eox/map/src/custom/sources/GeoZarr.js";

const STORE_URL = new URL("/south-up.zarr", window.location.href).href;

/**
 * Creates a minimal uncompressed float32 Zarr v3 array.
 * @param {number[]} shape Array shape, ordered y then x.
 * @returns {object} Array metadata.
 */
function arrayMetadata(shape) {
  return {
    zarr_format: 3,
    node_type: "array",
    shape,
    data_type: "float32",
    fill_value: null,
    chunk_grid: { name: "regular", configuration: { chunk_shape: shape } },
    chunk_key_encoding: { name: "default", configuration: { separator: "/" } },
    codecs: [{ name: "bytes", configuration: { endian: "little" } }],
    attributes: {},
  };
}

/**
 * Serves an isolated consolidated store without accessing a remote service.
 * @param {object} attributes Group attributes.
 * @param {object} metadata Consolidated array metadata.
 */
function interceptStore(attributes, metadata) {
  cy.intercept(`${STORE_URL}/**`, { statusCode: 404 });
  cy.intercept(`${STORE_URL}/.zmetadata`, { statusCode: 404 });
  cy.intercept(`${STORE_URL}/zarr.json`, {
    body: {
      zarr_format: 3,
      node_type: "group",
      attributes: { "proj:code": "EPSG:4326", ...attributes },
      consolidated_metadata: { metadata },
    },
  });
}

/**
 * Constructs the source registered by the advanced-sources plugin.
 * @param {Partial<import("@eox/map/src/custom/sources/GeoZarr.js").Options>} options Source overrides.
 * @returns {Promise<GeoZarr>} The configured source.
 */
function configuredSource(options = {}) {
  expect(window.eoxMapAdvancedOlSources.GeoZarr).to.equal(GeoZarr);
  const source = new window.eoxMapAdvancedOlSources.GeoZarr({
    url: STORE_URL,
    bands: ["b04"],
    ...options,
  });
  return new Promise((resolve, reject) => {
    const checkState = () => {
      if (source.getState() === "ready") {
        source.un("change", checkState);
        resolve(source);
      } else if (source.getState() === "error") {
        source.un("change", checkState);
        reject(source.getError());
      }
    };
    source.on("change", checkState);
    checkState();
  });
}

/** Verifies extent and origin from a south-up transform without a bbox. */
export function deriveSouthUpExtent() {
  interceptStore(
    {
      "spatial:shape": [4, 8],
      "spatial:transform": [0.5, 0, 10, 0, 0.25, 20],
    },
    { b04: arrayMetadata([4, 8]) },
  );
  cy.then(() => configuredSource()).then((source) => {
    const grid = source.getTileGrid();
    expect(grid.getExtent()).to.deep.equal([10, 20, 14, 21]);
    expect(grid.getOrigin(0)).to.deep.equal([10, 21]);
    expect(grid.getResolutions()).to.deep.equal([0.5]);
    source.dispose();
  });
}

/** Verifies layout resolutions and actual south-up pixel ordering. */
export function flipSouthUpLayoutRows() {
  interceptStore(
    {
      "spatial:bbox": [0, 0, 4, 4],
      multiscales: {
        layout: [
          {
            asset: "0",
            "spatial:shape": [4, 4],
            "spatial:transform": [1, 0, 0, 0, 1, 0],
          },
          {
            asset: "1",
            "spatial:shape": [2, 2],
            "spatial:transform": [1, 0, 0, 0, 1, 0],
          },
        ],
      },
    },
    { "0/b04": arrayMetadata([4, 4]), "1/b04": arrayMetadata([2, 2]) },
  );
  const bytes = new DataView(new ArrayBuffer(16));
  [10, 20, 30, 40].forEach((value, index) =>
    bytes.setFloat32(index * 4, value, true),
  );
  cy.intercept(`${STORE_URL}/1/b04/c/0/0`, { body: bytes.buffer });
  cy.then(() => configuredSource()).then(async (source) => {
    expect(source.getTileGrid().getResolutions()).to.deep.equal([2, 1]);
    const tile = source.getTile(0, 0, 0, 1, source.getProjection());
    await new Promise((resolve, reject) => {
      tile.addEventListener("change", () => {
        if (tile.getState() === 2) resolve();
        if (tile.getState() === 3) reject(tile.getError());
      });
      tile.load();
    });
    const data = tile.getData();
    expect(Array.from(data.slice(0, 2))).to.deep.equal([30, 40]);
    expect(Array.from(data.slice(256, 258))).to.deep.equal([10, 20]);
    source.dispose();
  });
}

/** Verifies the explicit flipY fallback when a transform is absent. */
export function respectFlipYFallback() {
  interceptStore(
    {
      "spatial:bbox": [0, 0, 2, 2],
      multiscales: { layout: [{ asset: "0", "spatial:shape": [2, 2] }] },
    },
    { "0/b04": arrayMetadata([2, 2]) },
  );
  const bytes = new DataView(new ArrayBuffer(16));
  [10, 20, 30, 40].forEach((value, index) =>
    bytes.setFloat32(index * 4, value, true),
  );
  cy.intercept(`${STORE_URL}/0/b04/c/0/0`, { body: bytes.buffer });
  cy.then(() => configuredSource({ flipY: true })).then(async (source) => {
    const tile = source.getTile(0, 0, 0, 1, source.getProjection());
    await new Promise((resolve, reject) => {
      tile.addEventListener("change", () => {
        if (tile.getState() === 2) resolve();
        if (tile.getState() === 3) reject(tile.getError());
      });
      tile.load();
    });
    expect(Array.from(tile.getData().slice(0, 2))).to.deep.equal([30, 40]);
    source.dispose();
  });
}
