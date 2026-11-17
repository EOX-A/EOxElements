import { computeGeoJsonBbox } from "../helpers/payload.js";

/**
 * Dispatch an `eox-mcp-error` event on `<eox-mcp-app>`.
 *
 * @param {import("../eox-mcp-app.js").EOxMcpApp} eoxMcpApp
 * @param {unknown} error
 * @param {string} source
 */
function emitBridgeError(eoxMcpApp, error, source) {
  /**
   * Fired when an MCP Apps connection or host interaction fails.
   */
  eoxMcpApp.dispatchEvent(
    new CustomEvent("eox-mcp-error", {
      detail: { error, source },
      bubbles: true,
      composed: true,
    }),
  );
}

/**
 * Forward interactive child events (`a2ui-action`, `eox-mcp-message`,
 * `eox-mcp-tool-call`, and optional `drawend` / `drawupdate`) over the MCP Apps bridge.
 *
 * @param {Event} event
 * @param {import("../eox-mcp-app.js").EOxMcpApp} eoxMcpApp
 * @returns {Promise<void>}
 */
export async function handleInteractiveEventMethod(event, eoxMcpApp) {
  const bridge = eoxMcpApp.bridge;
  if (!bridge) return;

  const customEvent = /** @type {CustomEvent<any>} */ (event);
  const type = customEvent.type;
  const detail = customEvent.detail;

  if (type === "a2ui-action") {
    if (!eoxMcpApp.forwardA2uiActions) return;
    const action = detail && typeof detail === "object" ? detail : {};
    const toolName = action.toolName || action.tool;
    try {
      if (typeof toolName === "string" && toolName) {
        await bridge.callServerTool(
          toolName,
          action.arguments || action.args || action.context || {},
        );
      } else {
        const text =
          typeof action.message === "string"
            ? action.message
            : `User triggered A2UI action "${action.name || "action"}"${
                action.context
                  ? ` with context ${JSON.stringify(action.context)}`
                  : ""
              }`;
        await bridge.sendMessage(text);
      }
    } catch (error) {
      emitBridgeError(eoxMcpApp, error, "a2ui-action");
    }
    return;
  }

  if (type === "eox-mcp-message") {
    try {
      if (
        typeof detail === "string" ||
        Array.isArray(detail) ||
        (detail && typeof detail === "object" && Array.isArray(detail.content))
      ) {
        await bridge.sendMessage(detail);
      } else if (
        detail &&
        typeof detail === "object" &&
        typeof detail.text === "string"
      ) {
        await bridge.sendMessage(detail.text);
      }
    } catch (error) {
      emitBridgeError(eoxMcpApp, error, "eox-mcp-message");
    }
    return;
  }

  if (type === "eox-mcp-tool-call") {
    const req = detail && typeof detail === "object" ? detail : {};
    const name = req.name || req.tool;
    if (typeof name !== "string" || !name) return;
    const args = req.arguments ?? req.args ?? {};
    try {
      const result = await bridge.callServerTool(name, args);
      if (typeof req.onResult === "function") {
        req.onResult(result);
      }
      if (req.updateView && result?.structuredContent !== undefined) {
        eoxMcpApp.payload = result.structuredContent;
      }
      /**
       * Fired when a forwarded `eox-mcp-tool-call` completes.
       */
      eoxMcpApp.dispatchEvent(
        new CustomEvent("eox-mcp-tool-result", {
          detail: { name, arguments: args, result },
          bubbles: true,
          composed: true,
        }),
      );
    } catch (error) {
      if (typeof req.onError === "function") {
        req.onError(error);
      }
      emitBridgeError(eoxMcpApp, error, "eox-mcp-tool-call");
    }
    return;
  }

  if (type === "drawend" || type === "drawupdate") {
    if (!eoxMcpApp.forwardDrawend) return;
    const geojson =
      detail && typeof detail === "object" && "geoJSON" in detail
        ? detail.geoJSON
        : detail;
    if (!geojson) return;
    const bbox = computeGeoJsonBbox(geojson);

    try {
      if (eoxMcpApp.drawTool) {
        await bridge.callServerTool(eoxMcpApp.drawTool, {
          geojson,
          ...(bbox ? { bbox } : {}),
        });
      } else {
        const bboxSummary = bbox
          ? ` (bbox: [${bbox.map((n) => Number(n.toFixed(5))).join(", ")}])`
          : "";
        await bridge.sendMessage(
          `Selected AOI${bboxSummary}: ${JSON.stringify(geojson)}`,
        );
      }
    } catch (error) {
      emitBridgeError(eoxMcpApp, error, type);
    }
  }
}
