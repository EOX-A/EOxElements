import { after, before, describe, it } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { PostMessageTransport } from "@modelcontextprotocol/ext-apps";

let dom;
let EOxMcpApp;
let lonLatExtentToMercator;

/**
 * Set up JSDOM globals before importing Lit and `<eox-mcp-app>`.
 */
function setupDom() {
  dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
    url: "https://example.test/",
  });
  const win = dom.window;

  globalThis.window = /** @type {any} */ (win);
  globalThis.document = win.document;
  globalThis.HTMLElement = win.HTMLElement;
  globalThis.Element = win.Element;
  globalThis.Node = win.Node;
  globalThis.Text = win.Text;
  globalThis.Comment = win.Comment;
  globalThis.DocumentFragment = win.DocumentFragment;
  globalThis.CustomEvent = win.CustomEvent;
  globalThis.Event = win.Event;
  globalThis.customElements = win.customElements;
  globalThis.CSSStyleSheet =
    win.CSSStyleSheet ||
    class MockCSSStyleSheet {
      replaceSync() {}
    };
  globalThis.ResizeObserver = class MockResizeObserver {
    observe() {}
    disconnect() {}
  };
  globalThis.requestAnimationFrame = (cb) => setTimeout(() => cb(0), 0);
  globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
}

/**
 * Create a mock host `postMessage` transport bound to JSDOM's `window`.
 */
function createDomHostTransport() {
  const sentToHost = [];
  const mockParent = {
    postMessage(msg) {
      sentToHost.push(msg);
      if (msg?.method === "ui/initialize") {
        queueMicrotask(() => {
          emit({
            jsonrpc: "2.0",
            id: msg.id,
            result: {
              protocolVersion: "2026-01-26",
              hostInfo: { name: "jsdom-host", version: "1.0.0" },
              hostCapabilities: {
                message: { text: {} },
                serverTools: {},
              },
              hostContext: { theme: "light" },
            },
          });
        });
      } else if (msg?.method === "ui/message") {
        queueMicrotask(() => {
          emit({ jsonrpc: "2.0", id: msg.id, result: { isError: false } });
        });
      } else if (msg?.method === "tools/call") {
        queueMicrotask(() => {
          emit({
            jsonrpc: "2.0",
            id: msg.id,
            result: {
              content: [{ type: "text", text: "done" }],
              structuredContent: {
                center: [10, 50],
                zoom: 5,
              },
            },
          });
        });
      }
    },
  };

  function emit(data) {
    const ev = new globalThis.window.MessageEvent("message", {
      data,
      source: mockParent,
    });
    globalThis.window.dispatchEvent(ev);
  }

  const transport = new PostMessageTransport(
    /** @type {any} */ (mockParent),
    /** @type {any} */ (mockParent),
  );

  return { transport, sentToHost, emit };
}

describe("<eox-mcp-app> custom element", () => {
  before(async () => {
    setupDom();
    const mod = await import("../src/index.js");
    EOxMcpApp = mod.EOxMcpApp;
    lonLatExtentToMercator = mod.lonLatExtentToMercator;
  });

  after(() => {
    dom?.window.close();
  });

  it("connects via MCP Apps handshake and renders auto-instantiated <eox-map> + <eox-layercontrol>", async () => {
    const { transport, emit } = createDomHostTransport();
    const el = /** @type {any} */ (document.createElement("eox-mcp-app"));
    assert.ok(el instanceof EOxMcpApp);
    el.transport = transport;
    el.autoResize = false;

    const events = [];
    el.addEventListener("eox-mcp-connected", (e) => events.push(e.type));
    el.addEventListener("eox-mcp-toolresult", (e) => events.push(e.type));

    document.body.appendChild(el);
    await new Promise((r) => setTimeout(r, 25));

    assert.equal(el.connected, true);
    assert.ok(events.includes("eox-mcp-connected"));

    emit({
      jsonrpc: "2.0",
      method: "ui/notifications/tool-result",
      params: {
        content: [],
        structuredContent: {
          tile_url: "https://titiler.xyz/cog/tiles/{z}/{x}/{y}.png",
          bbox: [15.8, 47.9, 16.6, 48.4],
          layerControl: true,
        },
      },
    });

    await new Promise((r) => setTimeout(r, 25));
    await el.updateComplete;

    assert.ok(events.includes("eox-mcp-toolresult"));
    assert.equal(el.mode, "map");

    const mapEl = el.shadowRoot.querySelector("eox-map");
    const lcEl = el.shadowRoot.querySelector("eox-layercontrol");
    assert.ok(mapEl);
    assert.ok(lcEl);
    assert.equal(mapEl.layers.length, 2);
    assert.equal(
      mapEl.layers[1].source.url,
      "https://titiler.xyz/cog/tiles/{z}/{x}/{y}.png",
    );
    assert.deepEqual(
      mapEl.zoomExtent,
      lonLatExtentToMercator([15.8, 47.9, 16.6, 48.4]),
    );
    assert.equal(lcEl.for, mapEl);

    el.remove();
  });

  it("configures slotted <eox-map> without duplicating auto-stage", async () => {
    const el = /** @type {any} */ (document.createElement("eox-mcp-app"));
    el.autoConnect = false;
    const slottedMap = /** @type {any} */ (document.createElement("eox-map"));
    el.appendChild(slottedMap);
    document.body.appendChild(el);

    el.payload = {
      layers: [
        { type: "Tile", properties: { id: "custom" }, source: { type: "OSM" } },
      ],
      center: [16.37, 48.21],
      zoom: 11,
    };

    await el.updateComplete;

    assert.equal(el.shadowRoot.querySelector("eox-map"), null);
    assert.equal(slottedMap.layers[0].properties.id, "custom");
    assert.deepEqual(slottedMap.center, [16.37, 48.21]);
    assert.equal(slottedMap.zoom, 11);

    el.remove();
  });

  it("renders Vega-Lite chart specs into <eox-chart>", async () => {
    const el = /** @type {any} */ (document.createElement("eox-mcp-app"));
    el.autoConnect = false;
    document.body.appendChild(el);

    const spec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      mark: "bar",
      data: { values: [{ x: "A", y: 10 }] },
    };
    el.payload = {
      vega_lite_spec: spec,
      dataValues: { extra: [{ x: "B", y: 20 }] },
    };

    await el.updateComplete;
    assert.equal(el.mode, "chart");

    const chartEl = /** @type {any} */ (
      el.shadowRoot.querySelector("eox-chart")
    );
    assert.ok(chartEl);
    assert.deepEqual(chartEl.spec, spec);
    assert.deepEqual(chartEl.dataValues, { extra: [{ x: "B", y: 20 }] });

    el.remove();
  });

  it("delegates A2UI components and stream payloads to <eox-a2ui-wrapper>", async () => {
    const el = /** @type {any} */ (document.createElement("eox-mcp-app"));
    el.autoConnect = false;
    document.body.appendChild(el);

    el.payload = {
      components: [
        { id: "root", component: "EOxMap", zoom: 6, center: [16.37, 48.21] },
      ],
    };

    await el.updateComplete;
    assert.equal(el.mode, "a2ui");

    const wrapper = /** @type {any} */ (
      el.shadowRoot.querySelector("eox-a2ui-wrapper")
    );
    assert.ok(wrapper);
    assert.equal(wrapper.stream.length, 2);
    assert.ok(wrapper.stream[0].createSurface);
    assert.deepEqual(wrapper.stream[1].updateComponents.components, [
      { id: "root", component: "EOxMap", zoom: 6, center: [16.37, 48.21] },
    ]);

    el.remove();
  });

  it("forwards a2ui-action, eox-mcp-message, eox-mcp-tool-call, and opt-in drawend over the bridge", async () => {
    const { transport, sentToHost } = createDomHostTransport();
    const el = /** @type {any} */ (document.createElement("eox-mcp-app"));
    el.transport = transport;
    el.autoResize = false;

    const slottedChild = document.createElement("div");
    el.appendChild(slottedChild);
    document.body.appendChild(el);
    await new Promise((r) => setTimeout(r, 25));

    // 1. a2ui-action -> sendMessage
    slottedChild.dispatchEvent(
      new CustomEvent("a2ui-action", {
        detail: { name: "select_scene", context: { id: "S2A" } },
        bubbles: true,
        composed: true,
      }),
    );

    // 2. eox-mcp-message -> sendMessage
    slottedChild.dispatchEvent(
      new CustomEvent("eox-mcp-message", {
        detail: "Zoomed to Austria",
        bubbles: true,
        composed: true,
      }),
    );

    // 3. eox-mcp-tool-call with updateView -> callServerTool + updates payload
    let toolCallbackResult = null;
    slottedChild.dispatchEvent(
      new CustomEvent("eox-mcp-tool-call", {
        detail: {
          name: "refresh_map",
          arguments: { region: "AT" },
          updateView: true,
          onResult: (res) => {
            toolCallbackResult = res;
          },
        },
        bubbles: true,
        composed: true,
      }),
    );

    // 4. drawend is ignored unless forwardDrawend is enabled
    const sampleGeoJson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
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
          properties: {},
        },
      ],
    };
    slottedChild.dispatchEvent(
      new CustomEvent("drawend", {
        detail: { geoJSON: sampleGeoJson },
        bubbles: true,
        composed: true,
      }),
    );

    await new Promise((r) => setTimeout(r, 25));

    const messagesBeforeDrawOptIn = sentToHost.filter(
      (m) => m.method === "ui/message",
    );
    assert.equal(messagesBeforeDrawOptIn.length, 2);
    assert.ok(
      messagesBeforeDrawOptIn[0].params.content[0].text.includes(
        "select_scene",
      ),
    );
    assert.equal(
      messagesBeforeDrawOptIn[1].params.content[0].text,
      "Zoomed to Austria",
    );

    const toolCalls = sentToHost.filter((m) => m.method === "tools/call");
    assert.equal(toolCalls.length, 1);
    assert.equal(toolCalls[0].params.name, "refresh_map");
    assert.ok(toolCallbackResult);
    assert.equal(el.mode, "map");

    // 5. Enable forwardDrawend + drawTool -> drawend invokes callServerTool
    el.forwardDrawend = true;
    el.drawTool = "search_by_aoi";
    slottedChild.dispatchEvent(
      new CustomEvent("drawend", {
        detail: { geoJSON: sampleGeoJson },
        bubbles: true,
        composed: true,
      }),
    );

    await new Promise((r) => setTimeout(r, 25));
    const allToolCalls = sentToHost.filter((m) => m.method === "tools/call");
    assert.equal(allToolCalls.length, 2);
    assert.equal(allToolCalls[1].params.name, "search_by_aoi");
    assert.deepEqual(
      allToolCalls[1].params.arguments.bbox,
      [16.0, 48.0, 16.5, 48.3],
    );

    el.remove();
  });
});
