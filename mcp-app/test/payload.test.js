import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  computeGeoJsonBbox,
  detectPayloadMode,
  EOX_A2UI_CATALOG_URL,
  extractStructuredContent,
  lonLatExtentToMercator,
  MCP_APP_MODES,
  normalizeA2uiStream,
  normalizeChartPayload,
  normalizeMapPayload,
} from "../src/index.js";

describe("payload detection and normalization", () => {
  it("detects A2UI, chart, map, and empty payload modes accurately", () => {
    assert.equal(detectPayloadMode(null), MCP_APP_MODES.EMPTY);
    assert.equal(detectPayloadMode({}), MCP_APP_MODES.EMPTY);
    assert.equal(detectPayloadMode({ stream: [] }), MCP_APP_MODES.A2UI);
    assert.equal(detectPayloadMode({ components: [] }), MCP_APP_MODES.A2UI);
    assert.equal(
      detectPayloadMode([{ createSurface: { surfaceId: "s" } }]),
      MCP_APP_MODES.A2UI,
    );
    assert.equal(
      detectPayloadMode({ vega_lite_spec: { mark: "bar" } }),
      MCP_APP_MODES.CHART,
    );
    assert.equal(
      detectPayloadMode({ spec: { mark: "line" } }),
      MCP_APP_MODES.CHART,
    );
    assert.equal(
      detectPayloadMode({
        $schema: "https://vega.github.io/schema/vega-lite/v5.json",
        mark: "point",
      }),
      MCP_APP_MODES.CHART,
    );
    assert.equal(detectPayloadMode({ layers: [] }), MCP_APP_MODES.MAP);
    assert.equal(
      detectPayloadMode({
        tile_url: "https://tiles.example.com/{z}/{x}/{y}.png",
      }),
      MCP_APP_MODES.MAP,
    );
    assert.equal(
      detectPayloadMode({ bbox: [15.8, 47.9, 16.6, 48.4] }),
      MCP_APP_MODES.MAP,
    );
  });

  it("normalizes A2UI components shorthand into a v0.9 stream", () => {
    const stream = normalizeA2uiStream({
      surfaceId: "custom_surface",
      components: [
        { id: "root", component: "EOxMap", zoom: 6, center: [16.37, 48.21] },
      ],
      dataModel: { selected: "Vienna" },
    });

    assert.equal(stream.length, 3);
    assert.deepEqual(stream[0], {
      createSurface: {
        surfaceId: "custom_surface",
        catalogId: EOX_A2UI_CATALOG_URL,
        sendDataModel: true,
      },
    });
    assert.deepEqual(stream[1], {
      updateComponents: {
        surfaceId: "custom_surface",
        components: [
          { id: "root", component: "EOxMap", zoom: 6, center: [16.37, 48.21] },
        ],
      },
    });
    assert.deepEqual(stream[2], {
      updateDataModel: {
        surfaceId: "custom_surface",
        value: { selected: "Vienna" },
      },
    });
  });

  it("normalizes map payloads with tile_url, geojson, and EPSG:4326 bbox", () => {
    const normalized = normalizeMapPayload({
      tile_url: "https://titiler.xyz/cog/tiles/{z}/{x}/{y}.png",
      geojson: {
        type: "Polygon",
        coordinates: [
          [
            [16.0, 48.0],
            [16.5, 48.0],
            [16.5, 48.3],
            [16.0, 48.3],
            [16.0, 48.0],
          ],
        ],
      },
      bbox: [16.0, 48.0, 16.5, 48.3],
      layerControl: true,
    });

    assert.equal(normalized.layers.length, 3);
    assert.equal(normalized.layers[0].properties.id, "eox-basemap");
    assert.equal(normalized.layers[1].source.type, "XYZ");
    assert.equal(
      normalized.layers[1].source.url,
      "https://titiler.xyz/cog/tiles/{z}/{x}/{y}.png",
    );
    assert.equal(normalized.layers[2].type, "Vector");
    assert.equal(normalized.layers[2].source.features.type, "Feature");
    assert.equal(normalized.showLayerControl, true);

    const expectedMercator = lonLatExtentToMercator([16.0, 48.0, 16.5, 48.3]);
    assert.deepEqual(normalized.zoomExtent, expectedMercator);
  });

  it("preserves explicit layers without adding an unrequested basemap", () => {
    const normalized = normalizeMapPayload({
      layers: [
        { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
      ],
      center: [16.37, 48.21],
      zoom: 10,
      projection: "EPSG:4326",
      bbox: [16.0, 48.0, 16.5, 48.3],
    });

    assert.equal(normalized.layers.length, 1);
    assert.equal(normalized.layers[0].properties.id, "osm");
    assert.deepEqual(normalized.center, [16.37, 48.21]);
    assert.equal(normalized.zoom, 10);
    assert.deepEqual(normalized.zoomExtent, [16.0, 48.0, 16.5, 48.3]);
  });

  it("normalizes Vega-Lite chart payloads", () => {
    const chart = normalizeChartPayload({
      vega_lite_spec: { mark: "bar" },
      data_values: { series: [{ x: 1, y: 2 }] },
      opt: { actions: false },
    });

    assert.deepEqual(chart.spec, { mark: "bar" });
    assert.deepEqual(chart.dataValues, { series: [{ x: 1, y: 2 }] });
    assert.deepEqual(chart.opt, { actions: false });
  });

  it("computes bounding boxes from GeoJSON and extracts structuredContent", () => {
    const bbox = computeGeoJsonBbox({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [10, 45],
              [12.5, 47.2],
            ],
          },
          properties: {},
        },
      ],
    });
    assert.deepEqual(bbox, [10, 45, 12.5, 47.2]);

    assert.deepEqual(
      extractStructuredContent({
        structuredContent: { zoom: 5 },
        content: [{ type: "text", text: "ignored" }],
      }),
      { zoom: 5 },
    );

    assert.deepEqual(
      extractStructuredContent({
        content: [{ type: "text", text: '{"zoom":7}' }],
      }),
      { zoom: 7 },
    );
  });
});
