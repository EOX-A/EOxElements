import { MCP_APP_MODES } from "../enums/index.js";
import {
  detectPayloadMode,
  extractStructuredContent,
  normalizeA2uiStream,
  normalizeChartPayload,
  normalizeMapPayload,
} from "../helpers/payload.js";

/**
 * Safely assign a property on a custom element, deferring a re-assignment if
 * the custom element is not defined yet so prototype setters are not shadowed.
 *
 * @param {HTMLElement} element
 * @param {string} prop
 * @param {unknown} value
 * @param {() => boolean} isCurrent
 */
function assignElementProp(element, prop, value, isCurrent) {
  if (!element || value === undefined) return;
  const tagName = element.tagName?.toLowerCase();
  const isDefined =
    typeof customElements !== "undefined" &&
    tagName &&
    Boolean(customElements.get(tagName));

  /** @type {any} */ (element)[prop] = value;

  if (
    !isDefined &&
    tagName?.includes("-") &&
    typeof customElements !== "undefined"
  ) {
    customElements.whenDefined(tagName).then(() => {
      if (!isCurrent()) return;
      const proto = Object.getPrototypeOf(element);
      const desc = proto
        ? Object.getOwnPropertyDescriptor(proto, prop)
        : undefined;
      if (desc?.set) {
        delete (/** @type {any} */ (element)[prop]);
        /** @type {any} */ (element)[prop] = value;
      }
    });
  }
}

/**
 * Resolve a slotted child matching `selector` first, falling back to the
 * component's own rendered element.
 *
 * @param {import("../eox-mcp-app.js").EOxMcpApp} eoxMcpApp
 * @param {string} selector
 * @returns {HTMLElement | null}
 */
export function resolveTargetElementMethod(eoxMcpApp, selector) {
  const slotted = eoxMcpApp.querySelector(selector);
  if (slotted) return /** @type {HTMLElement} */ (slotted);
  const rendered = eoxMcpApp.renderRoot?.querySelector(selector);
  return rendered ? /** @type {HTMLElement} */ (rendered) : null;
}

/**
 * Apply the normalized payload state onto the active slotted or auto-instantiated EOxElements.
 *
 * @param {import("../eox-mcp-app.js").EOxMcpApp} eoxMcpApp
 */
export function syncRenderedElementsMethod(eoxMcpApp) {
  const generation = eoxMcpApp._payloadGeneration;
  const isCurrent = () => eoxMcpApp._payloadGeneration === generation;

  if (eoxMcpApp.mode === MCP_APP_MODES.A2UI && eoxMcpApp._normalizedA2ui) {
    const wrapper = resolveTargetElementMethod(eoxMcpApp, "eox-a2ui-wrapper");
    if (wrapper) {
      assignElementProp(
        wrapper,
        "stream",
        eoxMcpApp._normalizedA2ui,
        isCurrent,
      );
    }
    return;
  }

  if (eoxMcpApp.mode === MCP_APP_MODES.CHART && eoxMcpApp._normalizedChart) {
    const chartEl = resolveTargetElementMethod(eoxMcpApp, "eox-chart");
    if (chartEl) {
      const { spec, dataValues, opt } = eoxMcpApp._normalizedChart;
      if (opt !== undefined) {
        assignElementProp(chartEl, "opt", opt, isCurrent);
      }
      if (dataValues !== undefined) {
        assignElementProp(chartEl, "dataValues", dataValues, isCurrent);
      }
      assignElementProp(chartEl, "spec", spec, isCurrent);
    }
    return;
  }

  if (eoxMcpApp.mode === MCP_APP_MODES.MAP && eoxMcpApp._normalizedMap) {
    const mapEl = resolveTargetElementMethod(eoxMcpApp, "eox-map");
    if (mapEl) {
      const mapCfg = eoxMcpApp._normalizedMap;
      if (mapCfg.config) {
        assignElementProp(mapEl, "config", mapCfg.config, isCurrent);
      }
      if (mapCfg.projection) {
        assignElementProp(mapEl, "projection", mapCfg.projection, isCurrent);
      }
      if (mapCfg.controls) {
        assignElementProp(mapEl, "controls", mapCfg.controls, isCurrent);
      }
      assignElementProp(mapEl, "layers", mapCfg.layers, isCurrent);
      if (mapCfg.center) {
        assignElementProp(mapEl, "center", mapCfg.center, isCurrent);
      }
      if (mapCfg.zoom !== undefined) {
        assignElementProp(mapEl, "zoom", mapCfg.zoom, isCurrent);
      }
      if (mapCfg.zoomExtent) {
        assignElementProp(mapEl, "zoomExtent", mapCfg.zoomExtent, isCurrent);
      }

      const lcEl = resolveTargetElementMethod(eoxMcpApp, "eox-layercontrol");
      if (lcEl) {
        assignElementProp(lcEl, "for", mapEl, isCurrent);
        if (mapCfg.layerControlProps) {
          for (const [key, val] of Object.entries(mapCfg.layerControlProps)) {
            assignElementProp(lcEl, key, val, isCurrent);
          }
        }
      }
    }
  }
}

/**
 * Parse and apply an incoming payload or MCP `toolresult` to `<eox-mcp-app>`.
 *
 * @param {unknown} rawPayload
 * @param {import("../eox-mcp-app.js").EOxMcpApp} eoxMcpApp
 */
export function applyPayloadMethod(rawPayload, eoxMcpApp) {
  eoxMcpApp._payloadGeneration = (eoxMcpApp._payloadGeneration || 0) + 1;

  const structured = extractStructuredContent(rawPayload);
  const mode = detectPayloadMode(structured);

  eoxMcpApp._normalizedA2ui = null;
  eoxMcpApp._normalizedMap = null;
  eoxMcpApp._normalizedChart = null;

  if (mode === MCP_APP_MODES.A2UI) {
    eoxMcpApp._normalizedA2ui = normalizeA2uiStream(structured);
  } else if (
    mode === MCP_APP_MODES.CHART &&
    structured &&
    typeof structured === "object"
  ) {
    eoxMcpApp._normalizedChart = normalizeChartPayload(
      /** @type {Record<string, unknown>} */ (structured),
    );
  } else if (
    mode === MCP_APP_MODES.MAP &&
    structured &&
    typeof structured === "object"
  ) {
    eoxMcpApp._normalizedMap = normalizeMapPayload(
      /** @type {Record<string, unknown>} */ (structured),
    );
  }

  eoxMcpApp.mode = mode;
  eoxMcpApp.requestUpdate();
}
