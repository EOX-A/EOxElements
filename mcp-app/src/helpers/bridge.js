import {
  App,
  PostMessageTransport,
  applyDocumentTheme,
  applyHostFonts,
  applyHostStyleVariables,
} from "@modelcontextprotocol/ext-apps";

/**
 * Safely apply MCP Apps host theme, CSS variables, and fonts to the document.
 *
 * @param {import("@modelcontextprotocol/ext-apps").McpUiHostContext | undefined} hostContext
 */
export function applyHostThemeContext(hostContext) {
  if (!hostContext || typeof document === "undefined") return;
  try {
    if (hostContext.theme) {
      applyDocumentTheme(hostContext.theme);
    }
    if (hostContext.styles?.variables) {
      applyHostStyleVariables(hostContext.styles.variables);
    }
    if (hostContext.styles?.css?.fonts) {
      applyHostFonts(hostContext.styles.css.fonts);
    }
  } catch {
    // Non-fatal in headless/test environments without full CSSOM
  }
}

/**
 * Attach a listener to an `App` instance using `addEventListener` when available,
 * falling back to `on*` property assignment for minimal test doubles.
 *
 * @param {any} app
 * @param {string} eventName
 * @param {(params: any) => void} listener
 * @returns {() => void}
 */
function attachAppEvent(app, eventName, listener) {
  if (typeof app.addEventListener === "function") {
    app.addEventListener(eventName, listener);
    return () => {
      if (typeof app.removeEventListener === "function") {
        app.removeEventListener(eventName, listener);
      }
    };
  }
  const prop = `on${eventName}`;
  const prev = app[prop];
  app[prop] = (params) => {
    if (typeof prev === "function") prev(params);
    listener(params);
  };
  return () => {
    if (app[prop] !== undefined) {
      app[prop] = prev;
    }
  };
}

/**
 * Normalize a message argument for `App.sendMessage()`.
 *
 * @param {string | import("@modelcontextprotocol/ext-apps").McpUiMessageRequest["params"] | import("@modelcontextprotocol/ext-apps").McpUiMessageRequest["params"]["content"]} message
 * @returns {import("@modelcontextprotocol/ext-apps").McpUiMessageRequest["params"]}
 */
function normalizeMessageParams(message) {
  if (typeof message === "string") {
    return {
      role: "user",
      content: [{ type: "text", text: message }],
    };
  }
  if (Array.isArray(message)) {
    return {
      role: "user",
      content: message,
    };
  }
  if (message && typeof message === "object") {
    return {
      role: message.role || "user",
      content: message.content || [],
    };
  }
  throw new TypeError(
    "sendMessage() expects a string, content block array, or { role, content } object",
  );
}

/**
 * Create an EOxElements MCP App bridge wrapping `@modelcontextprotocol/ext-apps` `App`.
 *
 * Registers unified notification handlers prior to `connect()` so listeners can be
 * attached before or after the handshake without triggering late-handler warnings.
 *
 * @param {import("../types.ts").McpAppBridgeOptions} [options]
 * @returns {import("../types.ts").McpAppBridge}
 */
export function createMcpAppBridge(options = {}) {
  const autoResize = options.autoResize !== false;
  const shouldApplyHostTheme = options.applyHostTheme !== false;

  const app =
    options.app ||
    new App(
      {
        name: options.name || "eox-mcp-app",
        version: options.version || "0.1.0",
      },
      options.capabilities || {},
      {
        autoResize,
        strict: options.strict ?? false,
        allowUnsafeEval: options.allowUnsafeEval ?? false,
      },
    );

  /** @type {Set<import("../types.ts").ToolResultHandler>} */
  const toolResultListeners = new Set();
  /** @type {Set<import("../types.ts").ToolInputHandler>} */
  const toolInputListeners = new Set();
  /** @type {Set<import("../types.ts").ToolInputPartialHandler>} */
  const toolInputPartialListeners = new Set();
  /** @type {Set<import("../types.ts").ToolCancelledHandler>} */
  const toolCancelledListeners = new Set();
  /** @type {Set<import("../types.ts").HostContextChangedHandler>} */
  const hostContextListeners = new Set();

  if (options.onToolResult) toolResultListeners.add(options.onToolResult);
  if (options.onToolInput) toolInputListeners.add(options.onToolInput);
  if (options.onToolInputPartial)
    toolInputPartialListeners.add(options.onToolInputPartial);
  if (options.onToolCancelled)
    toolCancelledListeners.add(options.onToolCancelled);
  if (options.onHostContextChanged)
    hostContextListeners.add(options.onHostContextChanged);
  if (options.onTeardown) {
    app.onteardown = options.onTeardown;
  }

  /** @type {import("../types.ts").ToolResultParams | undefined} */
  let lastToolResult;
  let connected = false;
  /** @type {Promise<import("../types.ts").McpAppBridge> | null} */
  let connectingPromise = null;
  /** @type {ResizeObserver | null} */
  let targetResizeObserver = null;

  const cleanups = [
    attachAppEvent(app, "toolresult", (params) => {
      lastToolResult = params;
      const structuredContent = params?.structuredContent;
      for (const handler of [...toolResultListeners]) {
        handler(structuredContent, params);
      }
    }),
    attachAppEvent(app, "toolinput", (params) => {
      for (const handler of [...toolInputListeners]) {
        handler(params?.arguments, params);
      }
    }),
    attachAppEvent(app, "toolinputpartial", (params) => {
      for (const handler of [...toolInputPartialListeners]) {
        handler(params?.arguments, params);
      }
    }),
    attachAppEvent(app, "toolcancelled", (params) => {
      for (const handler of [...toolCancelledListeners]) {
        handler(params);
      }
    }),
    attachAppEvent(app, "hostcontextchanged", (ctx) => {
      if (shouldApplyHostTheme) {
        applyHostThemeContext(ctx);
      }
      for (const handler of [...hostContextListeners]) {
        handler(ctx);
      }
    }),
  ];

  /**
   * @param {HTMLElement | null | undefined} target
   */
  function setupTargetResizeObserver(target) {
    if (
      !autoResize ||
      !target ||
      typeof ResizeObserver === "undefined" ||
      (typeof document !== "undefined" &&
        (target === document.body || target === document.documentElement))
    ) {
      return;
    }

    let scheduled = false;
    let lastWidth = 0;
    let lastHeight = 0;

    const notify = () => {
      if (scheduled) return;
      scheduled = true;
      const flush = () => {
        scheduled = false;
        const rect = target.getBoundingClientRect();
        const width = Math.ceil(rect.width);
        const height = Math.ceil(rect.height);
        if (width !== lastWidth || height !== lastHeight) {
          lastWidth = width;
          lastHeight = height;
          app.sendSizeChanged({ width, height }).catch(() => {});
        }
      };
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(flush);
      } else {
        Promise.resolve().then(flush);
      }
    };

    targetResizeObserver = new ResizeObserver(notify);
    targetResizeObserver.observe(target);
  }

  /** @type {import("../types.ts").McpAppBridge} */
  const bridge = {
    app,

    async connect(transportOverride) {
      if (connected) return bridge;
      if (connectingPromise) return connectingPromise;

      connectingPromise = (async () => {
        const transport =
          transportOverride ??
          options.transport ??
          (typeof window !== "undefined" && window.parent
            ? new PostMessageTransport(window.parent, window.parent)
            : undefined);

        await app.connect(transport);
        connected = true;

        const hostContext =
          typeof app.getHostContext === "function"
            ? app.getHostContext()
            : undefined;
        if (shouldApplyHostTheme && hostContext) {
          applyHostThemeContext(hostContext);
        }

        setupTargetResizeObserver(options.resizeTarget);
        return bridge;
      })();

      try {
        return await connectingPromise;
      } finally {
        connectingPromise = null;
      }
    },

    async disconnect() {
      connected = false;
      if (targetResizeObserver) {
        targetResizeObserver.disconnect();
        targetResizeObserver = null;
      }
      for (const cleanup of cleanups) {
        cleanup();
      }
      if (typeof app.close === "function") {
        await app.close();
      }
    },

    isConnected() {
      return connected;
    },

    onToolResult(handler) {
      toolResultListeners.add(handler);
      return () => {
        toolResultListeners.delete(handler);
      };
    },

    onToolInput(handler) {
      toolInputListeners.add(handler);
      return () => {
        toolInputListeners.delete(handler);
      };
    },

    onToolInputPartial(handler) {
      toolInputPartialListeners.add(handler);
      return () => {
        toolInputPartialListeners.delete(handler);
      };
    },

    onToolCancelled(handler) {
      toolCancelledListeners.add(handler);
      return () => {
        toolCancelledListeners.delete(handler);
      };
    },

    onHostContextChanged(handler) {
      hostContextListeners.add(handler);
      return () => {
        hostContextListeners.delete(handler);
      };
    },

    sendMessage(message) {
      return app.sendMessage(normalizeMessageParams(message));
    },

    callServerTool(nameOrParams, args) {
      if (typeof nameOrParams !== "string") {
        return app.callServerTool(nameOrParams);
      }
      return app.callServerTool({
        name: nameOrParams,
        arguments: args ?? {},
      });
    },

    updateModelContext(params) {
      if (typeof params === "string") {
        return app.updateModelContext({
          content: [{ type: "text", text: params }],
        });
      }
      return app.updateModelContext(params);
    },

    sendSizeChanged(size) {
      return app.sendSizeChanged(size);
    },

    openLink(url) {
      return app.openLink({ url });
    },

    requestDisplayMode(mode) {
      return app.requestDisplayMode({ mode });
    },

    getHostContext() {
      return typeof app.getHostContext === "function"
        ? app.getHostContext()
        : undefined;
    },

    getLastToolResult() {
      return lastToolResult;
    },
  };

  return bridge;
}

// --- Module-level singleton bridge for ergonomic functional API ---

/** @type {import("../types.ts").McpAppBridge | null} */
let activeBridge = null;

/** @type {Set<import("../types.ts").ToolResultHandler>} */
const moduleToolResultListeners = new Set();
/** @type {Set<import("../types.ts").ToolInputHandler>} */
const moduleToolInputListeners = new Set();
/** @type {Set<import("../types.ts").ToolInputPartialHandler>} */
const moduleToolInputPartialListeners = new Set();
/** @type {Set<import("../types.ts").ToolCancelledHandler>} */
const moduleToolCancelledListeners = new Set();
/** @type {Set<import("../types.ts").HostContextChangedHandler>} */
const moduleHostContextListeners = new Set();

/**
 * Connect to the MCP Apps host using a shared bridge (or return a new bridge when `singleton: false`).
 * Any listeners previously registered via `onToolResult()`, `onToolInput()`, etc. are
 * attached before the handshake begins.
 *
 * @param {import("../types.ts").McpAppBridgeOptions} [options]
 * @returns {Promise<import("../types.ts").McpAppBridge>}
 */
export async function connectMcpApp(options = {}) {
  const useSingleton = options.singleton !== false;

  if (useSingleton && activeBridge && activeBridge.isConnected()) {
    return activeBridge;
  }

  const bridge = createMcpAppBridge(options);

  if (useSingleton) {
    for (const h of moduleToolResultListeners) bridge.onToolResult(h);
    for (const h of moduleToolInputListeners) bridge.onToolInput(h);
    for (const h of moduleToolInputPartialListeners)
      bridge.onToolInputPartial(h);
    for (const h of moduleToolCancelledListeners) bridge.onToolCancelled(h);
    for (const h of moduleHostContextListeners) bridge.onHostContextChanged(h);
    activeBridge = bridge;
  }

  await bridge.connect(options.transport);
  return bridge;
}

/**
 * Register a handler for incoming MCP `toolresult` notifications on the default bridge.
 * Receives `(structuredContent, rawParams)` and returns an unsubscribe function.
 *
 * @param {import("../types.ts").ToolResultHandler} handler
 * @returns {() => void}
 */
export function onToolResult(handler) {
  moduleToolResultListeners.add(handler);
  const unsubActive = activeBridge ? activeBridge.onToolResult(handler) : null;
  return () => {
    moduleToolResultListeners.delete(handler);
    if (unsubActive) unsubActive();
  };
}

/**
 * Register a handler for incoming MCP `toolinput` notifications on the default bridge.
 *
 * @param {import("../types.ts").ToolInputHandler} handler
 * @returns {() => void}
 */
export function onToolInput(handler) {
  moduleToolInputListeners.add(handler);
  const unsubActive = activeBridge ? activeBridge.onToolInput(handler) : null;
  return () => {
    moduleToolInputListeners.delete(handler);
    if (unsubActive) unsubActive();
  };
}

/**
 * Register a handler for incoming MCP `toolinputpartial` notifications on the default bridge.
 *
 * @param {import("../types.ts").ToolInputPartialHandler} handler
 * @returns {() => void}
 */
export function onToolInputPartial(handler) {
  moduleToolInputPartialListeners.add(handler);
  const unsubActive = activeBridge
    ? activeBridge.onToolInputPartial(handler)
    : null;
  return () => {
    moduleToolInputPartialListeners.delete(handler);
    if (unsubActive) unsubActive();
  };
}

/**
 * Register a handler for incoming MCP `toolcancelled` notifications on the default bridge.
 *
 * @param {import("../types.ts").ToolCancelledHandler} handler
 * @returns {() => void}
 */
export function onToolCancelled(handler) {
  moduleToolCancelledListeners.add(handler);
  const unsubActive = activeBridge
    ? activeBridge.onToolCancelled(handler)
    : null;
  return () => {
    moduleToolCancelledListeners.delete(handler);
    if (unsubActive) unsubActive();
  };
}

/**
 * Register a handler for incoming MCP `hostcontextchanged` notifications on the default bridge.
 *
 * @param {import("../types.ts").HostContextChangedHandler} handler
 * @returns {() => void}
 */
export function onHostContextChanged(handler) {
  moduleHostContextListeners.add(handler);
  const unsubActive = activeBridge
    ? activeBridge.onHostContextChanged(handler)
    : null;
  return () => {
    moduleHostContextListeners.delete(handler);
    if (unsubActive) unsubActive();
  };
}

/**
 * Send a user message back to the MCP Apps host via the active bridge.
 *
 * @param {string | import("@modelcontextprotocol/ext-apps").McpUiMessageRequest["params"] | import("@modelcontextprotocol/ext-apps").McpUiMessageRequest["params"]["content"]} message
 * @returns {Promise<import("@modelcontextprotocol/ext-apps").McpUiMessageResult>}
 */
export function sendMessage(message) {
  if (!activeBridge) {
    throw new Error(
      "No active MCP App connection. Call connectMcpApp() before sendMessage().",
    );
  }
  return activeBridge.sendMessage(message);
}

/**
 * Call an MCP server tool proxied through the host via the active bridge.
 *
 * @param {string | { name: string; arguments?: Record<string, unknown> }} nameOrParams
 * @param {Record<string, unknown>} [args]
 * @returns {Promise<import("@modelcontextprotocol/sdk/types.js").CallToolResult>}
 */
export function callServerTool(nameOrParams, args) {
  if (!activeBridge) {
    throw new Error(
      "No active MCP App connection. Call connectMcpApp() before callServerTool().",
    );
  }
  return activeBridge.callServerTool(nameOrParams, args);
}

/**
 * Update the host model context via the active bridge.
 *
 * @param {string | import("@modelcontextprotocol/ext-apps").McpUiUpdateModelContextRequest["params"]} params
 * @returns {Promise<Record<string, unknown>>}
 */
export function updateModelContext(params) {
  if (!activeBridge) {
    throw new Error(
      "No active MCP App connection. Call connectMcpApp() before updateModelContext().",
    );
  }
  return activeBridge.updateModelContext(params);
}

/**
 * Report UI dimensions to the host via the active bridge.
 *
 * @param {{ width?: number; height?: number }} size
 * @returns {Promise<void>}
 */
export function sendSizeChanged(size) {
  if (!activeBridge) {
    throw new Error(
      "No active MCP App connection. Call connectMcpApp() before sendSizeChanged().",
    );
  }
  return activeBridge.sendSizeChanged(size);
}

/**
 * Return the active singleton MCP App bridge, or `null` if not connected.
 *
 * @returns {import("../types.ts").McpAppBridge | null}
 */
export function getMcpAppBridge() {
  return activeBridge;
}

/**
 * Disconnect and clear the active singleton MCP App bridge.
 *
 * @returns {Promise<void>}
 */
export async function disconnectMcpApp() {
  if (activeBridge) {
    const bridge = activeBridge;
    activeBridge = null;
    await bridge.disconnect();
  }
}
