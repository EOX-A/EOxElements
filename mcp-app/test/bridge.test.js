import { afterEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import { PostMessageTransport } from "@modelcontextprotocol/ext-apps";
import {
  callServerTool,
  connectMcpApp,
  createMcpAppBridge,
  disconnectMcpApp,
  onToolInput,
  onToolResult,
  sendMessage,
} from "../src/index.js";

/**
 * Create a lightweight in-memory postMessage window pair for testing
 * the real `@modelcontextprotocol/ext-apps` `App` + `PostMessageTransport`.
 */
function createMockPostMessageEnv() {
  const listeners = new Set();
  const sentToHost = [];

  const mockWindow = {
    innerWidth: 800,
    addEventListener(type, fn) {
      if (type === "message") listeners.add(fn);
    },
    removeEventListener(type, fn) {
      if (type === "message") listeners.delete(fn);
    },
  };

  const mockParent = {
    postMessage(msg) {
      sentToHost.push(msg);
      if (msg?.method === "ui/initialize") {
        queueMicrotask(() => {
          emitFromHost({
            jsonrpc: "2.0",
            id: msg.id,
            result: {
              protocolVersion: "2026-01-26",
              hostInfo: { name: "test-host", version: "1.0.0" },
              hostCapabilities: {
                message: { text: {} },
                serverTools: {},
              },
              hostContext: {
                theme: "light",
                locale: "en-US",
              },
            },
          });
        });
      } else if (msg?.method === "ui/message") {
        queueMicrotask(() => {
          emitFromHost({
            jsonrpc: "2.0",
            id: msg.id,
            result: { isError: false },
          });
        });
      } else if (msg?.method === "tools/call") {
        queueMicrotask(() => {
          emitFromHost({
            jsonrpc: "2.0",
            id: msg.id,
            result: {
              content: [{ type: "text", text: "ok" }],
              structuredContent: {
                items: [{ id: "scene-1" }],
                calledName: msg.params.name,
                calledArgs: msg.params.arguments,
              },
            },
          });
        });
      }
    },
  };

  function emitFromHost(data) {
    for (const fn of [...listeners]) {
      fn({ data, source: mockParent });
    }
  }

  return { mockWindow, mockParent, sentToHost, emitFromHost };
}

describe("MCP Apps bridge (@modelcontextprotocol/ext-apps handshake)", () => {
  afterEach(async () => {
    await disconnectMcpApp();
    delete globalThis.window;
  });

  it("completes ui/initialize handshake, receives toolresult/toolinput, and forwards sendMessage/callServerTool", async () => {
    const { mockWindow, mockParent, sentToHost, emitFromHost } =
      createMockPostMessageEnv();
    globalThis.window = /** @type {any} */ (mockWindow);

    const receivedResults = [];
    const receivedInputs = [];

    const unsubResult = onToolResult((structuredContent, rawParams) => {
      receivedResults.push({ structuredContent, rawParams });
    });
    const unsubInput = onToolInput((args, rawParams) => {
      receivedInputs.push({ args, rawParams });
    });

    const transport = new PostMessageTransport(
      /** @type {any} */ (mockParent),
      /** @type {any} */ (mockParent),
    );
    const bridge = await connectMcpApp({
      name: "test-eox-view",
      version: "1.2.3",
      autoResize: false,
      applyHostTheme: false,
      transport,
    });

    assert.equal(bridge.isConnected(), true);
    assert.ok(sentToHost.some((m) => m.method === "ui/initialize"));
    assert.ok(
      sentToHost.some((m) => m.method === "ui/notifications/initialized"),
    );

    emitFromHost({
      jsonrpc: "2.0",
      method: "ui/notifications/tool-input",
      params: { arguments: { collection: "sentinel-2-l2a" } },
    });

    emitFromHost({
      jsonrpc: "2.0",
      method: "ui/notifications/tool-result",
      params: {
        content: [{ type: "text", text: "Rendered map" }],
        structuredContent: {
          center: [16.37, 48.21],
          zoom: 8,
        },
      },
    });

    await new Promise((r) => setTimeout(r, 15));

    assert.equal(receivedInputs.length, 1);
    assert.deepEqual(receivedInputs[0].args, { collection: "sentinel-2-l2a" });

    assert.equal(receivedResults.length, 1);
    assert.deepEqual(receivedResults[0].structuredContent, {
      center: [16.37, 48.21],
      zoom: 8,
    });
    assert.deepEqual(receivedResults[0].rawParams.content, [
      { type: "text", text: "Rendered map" },
    ]);

    const msgResult = await sendMessage("Selected AOI around Vienna");
    assert.equal(msgResult.isError, false);
    const uiMsg = sentToHost.find((m) => m.method === "ui/message");
    assert.deepEqual(uiMsg.params, {
      role: "user",
      content: [{ type: "text", text: "Selected AOI around Vienna" }],
    });

    const toolRes = await callServerTool("search_stac", {
      bbox: [15.8, 47.9, 16.6, 48.4],
    });
    assert.deepEqual(toolRes.structuredContent.calledName, "search_stac");
    assert.deepEqual(toolRes.structuredContent.calledArgs, {
      bbox: [15.8, 47.9, 16.6, 48.4],
    });

    unsubResult();
    unsubInput();
  });

  it("supports ResizeObserver autoResize height reporting on a resizeTarget", async () => {
    const { mockWindow, mockParent, sentToHost } = createMockPostMessageEnv();
    globalThis.window = /** @type {any} */ (mockWindow);

    let observedCallback = null;
    const origResizeObserver = globalThis.ResizeObserver;
    const origRaf = globalThis.requestAnimationFrame;

    globalThis.requestAnimationFrame = (cb) => {
      cb(0);
      return 1;
    };
    globalThis.ResizeObserver = class MockResizeObserver {
      constructor(cb) {
        observedCallback = cb;
      }
      observe() {}
      disconnect() {}
    };

    try {
      const resizeTarget = /** @type {any} */ ({
        getBoundingClientRect: () => ({ width: 640, height: 480 }),
      });

      const transport = new PostMessageTransport(
        /** @type {any} */ (mockParent),
        /** @type {any} */ (mockParent),
      );

      // Disable App's document-level autoResize (no document in pure Node)
      // by testing createMcpAppBridge with resizeTarget + mock document fallback
      globalThis.document = /** @type {any} */ ({
        documentElement: {
          style: {},
          getBoundingClientRect: () => ({ width: 640, height: 480 }),
        },
        body: {},
      });

      const bridge = createMcpAppBridge({
        autoResize: true,
        applyHostTheme: false,
        resizeTarget,
        transport,
      });

      await bridge.connect();
      if (observedCallback) observedCallback();
      await new Promise((r) => setTimeout(r, 10));

      const sizeMsgs = sentToHost.filter(
        (m) => m.method === "ui/notifications/size-changed",
      );
      assert.ok(sizeMsgs.length >= 1);
      assert.ok(
        sizeMsgs.some(
          (m) => m.params.width === 640 && m.params.height === 480,
        ) ||
          sizeMsgs.some(
            (m) => m.params.width === 800 && m.params.height === 480,
          ),
      );

      await bridge.disconnect();
    } finally {
      globalThis.ResizeObserver = origResizeObserver;
      globalThis.requestAnimationFrame = origRaf;
      delete globalThis.document;
    }
  });
});
