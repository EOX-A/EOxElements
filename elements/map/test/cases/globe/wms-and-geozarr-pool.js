import { html } from "lit";
import TileLayer from "ol/layer/Tile.js";
import WebGLTileLayer from "ol/layer/WebGLTile.js";
import TileWMS from "ol/source/TileWMS.js";
import DataTileSource from "ol/source/DataTile.js";
import { createXYZ } from "ol/tilegrid.js";
import { Extent, LonLat, CanvasTiles } from "@openglobus/og";
import {
  createGlobusLayer,
  getGlobeWMSOptions,
  setupLayerListeners,
} from "../../../src/plugins/globe/openglobus.js";
import {
  createMapPool,
  clearPoolQueue,
  distributeTileToIdealMap,
  getPoolLayerDefs,
  GLOBE_POLE_PROJECTION,
} from "../../../src/plugins/globe/methods.js";
import {
  geoZarrLayerDefinition,
  interceptGeoZarrStore,
} from "../../utils/geozarr.js";

/**
 * Verifies that `TileWMS` layers strip conflicting standard `GetMap` parameters
 * (`SRS`, `LAYERS`, `VERSION`, `FORMAT`, `SERVICE`, `REQUEST`, `BBOX`) from
 * OpenGlobus `WMS` `extra` options while preserving vendor parameters (`TILED`,
 * `TRANSPARENT`, URL query params) for both Web Mercator and polar segments,
 * and propagate live `updateParams` changes.
 */
export const testGlobeWMSOptions = () => {
  const source = new TileWMS({
    url: "https://geoserver.example.com/wms?SERVICE=WMS&map=/srv/arctic.map",
    params: {
      LAYERS: "basemap:NE_Drape",
      TILED: true,
      VERSION: "1.1.1",
      TRANSPARENT: true,
      SRS: "EPSG:4326",
      FORMAT: "image/png",
    },
  });

  const opts = getGlobeWMSOptions(source);
  expect(opts).to.deep.equal({
    url: "https://geoserver.example.com/wms",
    layers: "basemap:NE_Drape",
    version: "1.1.1",
    extra: {
      map: "/srv/arctic.map",
      TILED: "true",
      TRANSPARENT: "true",
    },
  });

  const olLayer = new TileLayer({
    properties: { id: "arctic-basemap", base: true },
    source,
  });

  const wmsLayer = /** @type {any} */ (createGlobusLayer(olLayer, []));
  const mercSegment = {
    _projection: { code: "EPSG:3857" },
    getExtent: () => new Extent(new LonLat(0, 0), new LonLat(1000000, 1000000)),
  };
  const poleSegment = {
    _projection: { code: "EPSG:4326" },
    getExtent: () =>
      new Extent(new LonLat(-180, 85.05112877980659), new LonLat(0, 90)),
  };

  const mercUrl = new URL(wmsLayer._createUrl(mercSegment));
  expect(mercUrl.searchParams.getAll("SRS")).to.deep.equal(["EPSG:3857"]);
  expect(mercUrl.searchParams.getAll("LAYERS")).to.deep.equal([
    "basemap:NE_Drape",
  ]);
  expect(mercUrl.searchParams.getAll("VERSION")).to.deep.equal(["1.1.1"]);
  expect(mercUrl.searchParams.get("TILED")).to.equal("true");
  expect(mercUrl.searchParams.get("TRANSPARENT")).to.equal("true");
  expect(mercUrl.searchParams.get("map")).to.equal("/srv/arctic.map");

  const poleUrl = new URL(wmsLayer._createUrl(poleSegment));
  expect(poleUrl.searchParams.getAll("SRS")).to.deep.equal(["EPSG:4326"]);

  // Verify live TileWMS parameter updates propagate to the globe WMS layer
  const redrawSpy = cy.spy(wmsLayer, "redraw");
  const globeStub = /** @type {any} */ ({
    planet: {
      layers: [wmsLayer],
      getLayerByName: (/** @type {string} */ id) =>
        id === "arctic-basemap" ? wmsLayer : undefined,
    },
  });
  const dispose = setupLayerListeners(olLayer, globeStub, []);
  try {
    source.updateParams({ TIME: "2026-06-28T00:00:00Z" });
    const updatedUrl = new URL(wmsLayer._createUrl(mercSegment));
    expect(updatedUrl.searchParams.get("TIME")).to.equal(
      "2026-06-28T00:00:00Z",
    );
    expect(updatedUrl.searchParams.getAll("SRS")).to.deep.equal(["EPSG:3857"]);
    expect(redrawSpy).to.have.been.calledOnce;
  } finally {
    dispose();
  }
};

/**
 * Verifies that `CanvasTiles` waits for async `DataTile` sources in `"loading"`
 * state before capturing the rendered WebGL canvas, renders polar `EPSG:4326`
 * segments via `EOX:GLOBE_POLE` with non-empty pixels, and aborts queued jobs
 * cleanly without leaking request counters.
 */
export const testGlobePolarAndAsyncCanvasTiles = () => {
  cy.mount(html`<eox-map .layers=${[]} .controls=${{}}></eox-map>`);

  cy.get("eox-map").then(async ([el]) => {
    const mapEl = /** @type {import("../../../src/main.js").EOxMap} */ (el);

    // Create a DataTile source in EPSG:4326 that starts in "loading" state
    const tileGrid4326 = createXYZ({
      extent: [-180, -90, 180, 90],
      maxZoom: 4,
    });
    const asyncSource = new DataTileSource({
      state: "loading",
      projection: "EPSG:4326",
      tileGrid: tileGrid4326,
      transition: 0,
      loader: () => {
        const data = new Uint8Array(256 * 256 * 4);
        for (let i = 0; i < data.length; i += 4) {
          data[i] = 220;
          data[i + 1] = 40;
          data[i + 2] = 60;
          data[i + 3] = 255;
        }
        return data;
      },
    });

    const mainLayer = new WebGLTileLayer({
      properties: { id: "polar-webgl" },
      source: asyncSource,
    });
    mapEl.map.addLayer(mainLayer);

    const target = document.createElement("div");
    mapEl.shadowRoot.appendChild(target);
    const pool = createMapPool(1, mapEl, target);

    // Wait for offscreen pool map to mount and attach an equivalent async WebGLTile layer
    const poolMapEl = pool[0].tileMap;
    if (!poolMapEl.map) {
      await new Promise((resolve) =>
        poolMapEl.addEventListener("mapmounted", resolve, { once: true }),
      );
    }
    const poolSource = new DataTileSource({
      state: "loading",
      projection: "EPSG:4326",
      tileGrid: tileGrid4326,
      transition: 0,
      loader: () => {
        const data = new Uint8Array(256 * 256 * 4);
        for (let i = 0; i < data.length; i += 4) {
          data[i] = 220;
          data[i + 1] = 40;
          data[i + 2] = 60;
          data[i + 3] = 255;
        }
        return data;
      },
    });
    const poolLayer = new WebGLTileLayer({
      properties: { id: "polar-webgl" },
      source: poolSource,
    });
    poolMapEl.map.addLayer(poolLayer);

    const canvasTilesLayer = /** @type {CanvasTiles} */ (
      createGlobusLayer(mainLayer, pool, mapEl)
    );
    expect(canvasTilesLayer).to.be.instanceOf(CanvasTiles);

    let capturedCanvas = /** @type {HTMLCanvasElement | null} */ (null);
    const polarMaterial = /** @type {any} */ ({
      layer: canvasTilesLayer,
      segment: {
        initialized: true,
        isPole: true,
        tileX: 0,
        tileY: 0,
        tileZoom: 0,
        _projection: { code: "EPSG:4326" },
        getExtentLonLat: () =>
          new Extent(new LonLat(-180, 85.05112877980659), new LonLat(0, 90)),
      },
      textureNotExists: cy.stub(),
    });

    const resolvedPromise = new Promise((resolve) => {
      canvasTilesLayer.drawTile(polarMaterial, (canvas) => {
        capturedCanvas = /** @type {HTMLCanvasElement} */ (canvas);
        resolve(canvas);
      });
    });

    // While source is still "loading", premature blank rendercomplete must NOT fire applyCanvas
    await new Promise((r) => setTimeout(r, 30));
    expect(capturedCanvas).to.equal(null);

    // Enqueue a second job and verify clearPoolQueue invokes abort handler cleanly
    const abortSpy = cy.spy();
    distributeTileToIdealMap(
      pool,
      "polar-webgl",
      { x: 1, y: 0, z: 1 },
      () => undefined,
      { abort: abortSpy },
    );
    expect(pool[0].tileQueue.length).to.equal(1);
    clearPoolQueue(pool[0]);
    expect(abortSpy).to.have.been.calledOnce;
    expect(pool[0].tileQueue.length).to.equal(0);

    // Re-issue polar drawTile after cancellation and transition sources to "ready"
    const secondPromise = new Promise((resolve) => {
      canvasTilesLayer.drawTile(polarMaterial, (canvas) => {
        capturedCanvas = /** @type {HTMLCanvasElement} */ (canvas);
        resolve(canvas);
      });
    });

    asyncSource.setState("ready");
    poolSource.setState("ready");

    await Promise.race([secondPromise, resolvedPromise]);

    expect(capturedCanvas).to.not.equal(null);
    expect(poolMapEl.map.getView().getProjection().getCode()).to.equal(
      GLOBE_POLE_PROJECTION,
    );
    const ctx = capturedCanvas.getContext("2d");
    const centerPixel = ctx.getImageData(128, 128, 1, 1).data;
    expect(centerPixel[0]).to.be.greaterThan(200);
    expect(centerPixel[3]).to.equal(255);
  });
};

/**
 * Verifies that GeoZarr layers with `bands: []` initialize `_geozarrReady`,
 * enrich pool definitions with resolved bands/dimensions/styleVariables, and
 * synchronize live dimension, band, and style updates to offscreen pool maps.
 */
export const testGlobeGeoZarrPoolSync = () => {
  interceptGeoZarrStore();

  const layerDef = {
    ...geoZarrLayerDefinition({}, []),
    style: {
      variables: { min: 0, max: 40 },
      color: ["color", 255, 0, 0, 1],
    },
  };

  cy.mount(html`<eox-map .layers=${[layerDef]} .controls=${{}}></eox-map>`);

  cy.get("eox-map").then(async ([el]) => {
    const mapEl = /** @type {import("../../../src/main.js").EOxMap} */ (el);
    const mainLayer = /** @type {any} */ (mapEl.getLayerById("cube"));
    expect(mainLayer.get("_geozarrReady")).to.be.a("promise");

    await mainLayer.get("_geozarrReady");

    const poolDefs = /** @type {any[]} */ (getPoolLayerDefs(mapEl));
    expect(poolDefs).to.have.lengthOf(1);
    expect(poolDefs[0].source.bands).to.have.lengthOf(1);
    expect(poolDefs[0].source.transition).to.equal(0);
    expect(poolDefs[0].properties._geozarrInitialized).to.equal(true);
    expect(poolDefs[0].properties.layerDatetime).to.equal(false);
    expect(poolDefs[0].properties.timeControlValues).to.equal(false);
    expect(poolDefs[0].properties._geozarrReady).to.equal(undefined);

    const target = document.createElement("div");
    mapEl.shadowRoot.appendChild(target);
    const pool = createMapPool(1, mapEl, target);
    const poolMapEl = pool[0].tileMap;
    if (!poolMapEl.map) {
      await new Promise((resolve) =>
        poolMapEl.addEventListener("mapmounted", resolve, { once: true }),
      );
    }

    const poolLayer = /** @type {any} */ (poolMapEl.getLayerById("cube"));
    await new Promise((resolve) => {
      const s = poolLayer.getSource();
      if (s.getState() !== "loading") {
        resolve(undefined);
        return;
      }
      const onChange = () => {
        if (s.getState() !== "loading") {
          s.un("change", onChange);
          resolve(undefined);
        }
      };
      s.on("change", onChange);
    });

    const canvasTiles = new CanvasTiles("cube", { drawTile: () => undefined });
    const globeStub = /** @type {any} */ ({
      planet: {
        layers: [canvasTiles],
        getLayerByName: (/** @type {string} */ id) =>
          id === "cube" ? canvasTiles : undefined,
      },
    });

    const dispose = setupLayerListeners(mainLayer, globeStub, pool);
    try {
      // 1. Update style variables
      mainLayer.updateStyleVariables({ min: 5, max: 80 });
      expect(poolLayer.styleVariables_).to.include({ min: 5, max: 80 });

      // 2. Update GeoZarr time dimension
      mainLayer.getSource().updateDimensions({ time: 3 });
      expect(poolLayer.getSource().dimensions_.time).to.equal(3);

      // 3. Switch GeoZarr band via setSource
      const GeoZarrClass = mainLayer.getSource().constructor;
      const vhSource = new GeoZarrClass({
        url: mainLayer.getSource().url_,
        bands: ["vh"],
        dimensions: { time: 2 },
      });
      mainLayer.setSource(vhSource);
      expect(poolLayer.getSource().bands_).to.deep.equal(["vh"]);
      expect(poolLayer.getSource().dimensions_.time).to.equal(2);
    } finally {
      dispose();
    }
  });
};
