import { LitElement, html, nothing } from "lit";
import { MCP_APP_MODES } from "./enums/index.js";
import { createMcpAppBridge } from "./helpers/bridge.js";
import {
  applyPayloadMethod,
  handleInteractiveEventMethod,
  syncRenderedElementsMethod,
} from "./methods/index.js";

const INTERACTIVE_EVENTS = [
  "a2ui-action",
  "eox-mcp-message",
  "eox-mcp-tool-call",
  "drawend",
  "drawupdate",
];

/**
 * Declarative MCP Apps (`io.modelcontextprotocol/ui`) adapter element for EOxElements.
 *
 * Connects to an MCP Apps host via `@modelcontextprotocol/ext-apps`, listens for
 * `toolresult` (`structuredContent`) notifications, and automatically renders either:
 * - **A2UI mode** (`stream`, `messages`, `components`, or A2UI array) via `<eox-a2ui-wrapper>`
 * - **Direct Geospatial / Chart mode** (`layers`, `center`, `zoom`, `tile_url`, `bbox`,
 *   `geojson` via `<eox-map>` + optional `<eox-layercontrol>`; or `vega_lite_spec`/`spec` via `<eox-chart>`)
 *
 * Also supports slotted `<eox-map>`, `<eox-layercontrol>`, `<eox-chart>`, or
 * `<eox-a2ui-wrapper>` children and forwards interactive events back to the host.
 *
 * @element eox-mcp-app
 * @fires eox-mcp-connected - Fired when the MCP Apps initialization handshake completes
 * @fires eox-mcp-toolresult - Fired when an MCP `toolresult` notification is received
 * @fires eox-mcp-toolinput - Fired when an MCP `toolinput` notification is received
 * @fires eox-mcp-tool-result - Fired when a forwarded `eox-mcp-tool-call` completes
 * @fires eox-mcp-error - Fired when connection or host bridge interaction fails
 */
export class EOxMcpApp extends LitElement {
  static get properties() {
    return {
      appName: { attribute: "app-name", type: String },
      appVersion: { attribute: "app-version", type: String },
      autoConnect: { attribute: "auto-connect", type: Boolean },
      autoResize: { attribute: "auto-resize", type: Boolean },
      applyHostTheme: { attribute: "apply-host-theme", type: Boolean },
      forwardDrawend: { attribute: "forward-drawend", type: Boolean },
      forwardA2uiActions: { attribute: "forward-a2ui-actions", type: Boolean },
      drawTool: { attribute: "draw-tool", type: String },
      showLayerControl: { attribute: "show-layercontrol", type: Boolean },
      noShadow: { attribute: "no-shadow", type: Boolean },
      unstyled: { type: Boolean },
      payload: { attribute: false, type: Object },
      toolResult: { attribute: false, type: Object },
      transport: { attribute: false, type: Object },
      app: { attribute: false, type: Object },
      mode: { attribute: false, state: true, type: String },
      connected: { attribute: false, state: true, type: Boolean },
      error: { attribute: false, state: true, type: Object },
    };
  }

  /** @type {import("./types.ts").McpAppBridge | null} */
  #bridge = null;

  /** @type {WeakSet<Event>} */
  #handledEvents = new WeakSet();

  /** @type {(e: Event) => void} */
  #eventHandler = (e) => {
    if (this.#handledEvents.has(e)) return;
    this.#handledEvents.add(e);
    handleInteractiveEventMethod(e, this);
  };

  /** @type {unknown} */
  #payload = null;

  /** @type {unknown} */
  #toolResult = null;

  constructor() {
    super();

    /**
     * Application name reported during the MCP Apps `ui/initialize` handshake.
     *
     * @type {string}
     */
    this.appName = "eox-mcp-app";

    /**
     * Application version reported during the MCP Apps `ui/initialize` handshake.
     *
     * @type {string}
     */
    this.appVersion = "0.1.0";

    /**
     * Automatically connect to the MCP Apps host when mounted inside an iframe
     * or when a custom `transport` / `app` is provided.
     *
     * @type {boolean}
     */
    this.autoConnect = true;

    /**
     * Automatically report container/document size changes to the MCP Apps host.
     *
     * @type {boolean}
     */
    this.autoResize = true;

    /**
     * Automatically apply host theme, CSS variables, and fonts from `hostContext`.
     *
     * @type {boolean}
     */
    this.applyHostTheme = true;

    /**
     * Opt-in forwarding of `drawend` / `drawupdate` AOI events back to the MCP host.
     *
     * @type {boolean}
     */
    this.forwardDrawend = false;

    /**
     * Forward `a2ui-action` events back to the MCP host via `sendMessage` or `callServerTool`.
     *
     * @type {boolean}
     */
    this.forwardA2uiActions = true;

    /**
     * Optional server tool name to invoke (instead of `sendMessage`) when `forwardDrawend` is enabled.
     *
     * @type {string}
     */
    this.drawTool = "";

    /**
     * Show `<eox-layercontrol>` alongside an auto-instantiated `<eox-map>`.
     *
     * @type {boolean}
     */
    this.showLayerControl = false;

    /**
     * Render without Shadow DOM when true.
     *
     * @type {boolean}
     */
    this.noShadow = false;

    /**
     * Disable default component styling when true.
     *
     * @type {boolean}
     */
    this.unstyled = false;

    /**
     * Optional custom MCP Transport instance (primarily for testing or custom hosts).
     *
     * @type {import("@modelcontextprotocol/sdk/shared/transport.js").Transport | undefined}
     */
    this.transport = undefined;

    /**
     * Optional pre-configured `@modelcontextprotocol/ext-apps` `App` instance.
     *
     * @type {import("@modelcontextprotocol/ext-apps").App | undefined}
     */
    this.app = undefined;

    /**
     * Current resolved rendering mode (`"empty"`, `"a2ui"`, `"map"`, `"chart"`).
     *
     * @type {import("./types.ts").EoxMcpAppMode}
     */
    this.mode = MCP_APP_MODES.EMPTY;

    /**
     * Whether the MCP Apps bridge has completed initialization.
     *
     * @type {boolean}
     */
    this.connected = false;

    /**
     * Last connection or bridge error, if any.
     *
     * @type {unknown}
     */
    this.error = null;

    /** @type {number} */
    this._payloadGeneration = 0;
    /** @type {Array<Record<string, unknown>> | null} */
    this._normalizedA2ui = null;
    /** @type {import("./types.ts").NormalizedMapPayload | null} */
    this._normalizedMap = null;
    /** @type {import("./types.ts").NormalizedChartPayload | null} */
    this._normalizedChart = null;
  }

  /**
   * Structured content or tool result payload to render directly.
   *
   * @returns {unknown}
   */
  get payload() {
    return this.#payload;
  }

  /**
   * @param {unknown} val
   */
  set payload(val) {
    const oldVal = this.#payload;
    let parsed = val;
    if (typeof val === "string") {
      try {
        parsed = JSON.parse(val);
      } catch {
        parsed = val;
      }
    }
    this.#payload = parsed;
    this.requestUpdate("payload", oldVal);
    applyPayloadMethod(parsed, this);
  }

  /**
   * Raw MCP `CallToolResult` notification params.
   *
   * @returns {unknown}
   */
  get toolResult() {
    return this.#toolResult;
  }

  /**
   * @param {unknown} val
   */
  set toolResult(val) {
    const oldVal = this.#toolResult;
    this.#toolResult = val;
    this.requestUpdate("toolResult", oldVal);
    if (val !== undefined && val !== null) {
      applyPayloadMethod(val, this);
    }
  }

  /**
   * Active MCP Apps bridge instance.
   *
   * @returns {import("./types.ts").McpAppBridge | null}
   */
  get bridge() {
    return this.#bridge;
  }

  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  connectedCallback() {
    super.connectedCallback();
    for (const eventName of INTERACTIVE_EVENTS) {
      this.addEventListener(eventName, this.#eventHandler);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    for (const eventName of INTERACTIVE_EVENTS) {
      this.removeEventListener(eventName, this.#eventHandler);
      if (this.renderRoot && this.renderRoot !== this) {
        this.renderRoot.removeEventListener(eventName, this.#eventHandler);
      }
    }
    this.disconnect();
  }

  firstUpdated() {
    if (this.renderRoot && this.renderRoot !== this) {
      for (const eventName of INTERACTIVE_EVENTS) {
        this.renderRoot.addEventListener(eventName, this.#eventHandler);
      }
    }

    const inIframe =
      typeof window !== "undefined" &&
      Boolean(window.parent) &&
      window.parent !== window;

    if (this.autoConnect && (this.transport || this.app || inIframe)) {
      this.connect().catch(() => {
        // Error already recorded on `this.error` and dispatched via `eox-mcp-error`
      });
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    syncRenderedElementsMethod(this);
  }

  /**
   * Establish the MCP Apps bridge connection and perform the `ui/initialize` handshake.
   *
   * @param {import("@modelcontextprotocol/sdk/shared/transport.js").Transport} [transportOverride]
   * @returns {Promise<import("./types.ts").McpAppBridge>}
   */
  async connect(transportOverride) {
    if (this.#bridge?.isConnected()) {
      return this.#bridge;
    }

    if (!this.#bridge) {
      this.#bridge = createMcpAppBridge({
        name: this.appName,
        version: this.appVersion,
        autoResize: this.autoResize,
        applyHostTheme: this.applyHostTheme,
        transport: transportOverride ?? this.transport,
        app: this.app,
        resizeTarget: this,
        onToolResult: (structuredContent, params) => {
          this.#toolResult = params;
          this.#payload = structuredContent ?? params;
          applyPayloadMethod(params, this);

          /**
           * Fired when an MCP `toolresult` notification is received.
           */
          this.dispatchEvent(
            new CustomEvent("eox-mcp-toolresult", {
              detail: { structuredContent, params },
              bubbles: true,
              composed: true,
            }),
          );
        },
        onToolInput: (args, params) => {
          /**
           * Fired when an MCP `toolinput` notification is received.
           */
          this.dispatchEvent(
            new CustomEvent("eox-mcp-toolinput", {
              detail: { arguments: args, params },
              bubbles: true,
              composed: true,
            }),
          );
        },
      });
    }

    try {
      this.error = null;
      await this.#bridge.connect(transportOverride ?? this.transport);
      this.connected = true;

      /**
       * Fired when the MCP Apps initialization handshake completes.
       */
      this.dispatchEvent(
        new CustomEvent("eox-mcp-connected", {
          detail: {
            hostContext: this.#bridge.getHostContext(),
          },
          bubbles: true,
          composed: true,
        }),
      );
      return this.#bridge;
    } catch (err) {
      this.error = err;
      this.connected = false;
      /**
       * Fired when the MCP Apps handshake fails.
       */
      this.dispatchEvent(
        new CustomEvent("eox-mcp-error", {
          detail: { error: err, source: "connect" },
          bubbles: true,
          composed: true,
        }),
      );
      throw err;
    }
  }

  /**
   * Disconnect the MCP Apps bridge and clean up resources.
   *
   * @returns {Promise<void>}
   */
  async disconnect() {
    this.connected = false;
    if (this.#bridge) {
      const bridge = this.#bridge;
      this.#bridge = null;
      await bridge.disconnect();
    }
  }

  /**
   * Send a user message back to the MCP Apps host.
   *
   * @param {string | import("@modelcontextprotocol/ext-apps").McpUiMessageRequest["params"] | import("@modelcontextprotocol/ext-apps").McpUiMessageRequest["params"]["content"]} message
   * @returns {Promise<import("@modelcontextprotocol/ext-apps").McpUiMessageResult>}
   */
  sendMessage(message) {
    if (!this.#bridge) {
      throw new Error(
        "EOxMcpApp is not connected. Call connect() before sendMessage().",
      );
    }
    return this.#bridge.sendMessage(message);
  }

  /**
   * Call an MCP server tool proxied through the host.
   *
   * @param {string | { name: string; arguments?: Record<string, unknown> }} nameOrParams
   * @param {Record<string, unknown>} [args]
   * @returns {Promise<import("@modelcontextprotocol/sdk/types.js").CallToolResult>}
   */
  callServerTool(nameOrParams, args) {
    if (!this.#bridge) {
      throw new Error(
        "EOxMcpApp is not connected. Call connect() before callServerTool().",
      );
    }
    return this.#bridge.callServerTool(nameOrParams, args);
  }

  /**
   * Update the host model context with current view state.
   *
   * @param {string | import("@modelcontextprotocol/ext-apps").McpUiUpdateModelContextRequest["params"]} params
   * @returns {Promise<Record<string, unknown>>}
   */
  updateModelContext(params) {
    if (!this.#bridge) {
      throw new Error(
        "EOxMcpApp is not connected. Call connect() before updateModelContext().",
      );
    }
    return this.#bridge.updateModelContext(params);
  }

  /**
   * Programmatically set the rendered payload.
   *
   * @param {unknown} payload
   */
  setPayload(payload) {
    this.payload = payload;
  }

  /**
   * Render auto-instantiated EOxElement stage when no matching slotted element is supplied.
   *
   * @returns {import("lit").TemplateResult | typeof nothing}
   */
  _renderAutoStage() {
    if (this.mode === MCP_APP_MODES.A2UI) {
      if (this.querySelector("eox-a2ui-wrapper")) return nothing;
      return html`<eox-a2ui-wrapper
        class="eox-mcp-stage-item"
      ></eox-a2ui-wrapper>`;
    }

    if (this.mode === MCP_APP_MODES.CHART) {
      if (this.querySelector("eox-chart")) return nothing;
      return html`<eox-chart
        class="eox-mcp-stage-item eox-mcp-chart"
      ></eox-chart>`;
    }

    if (this.mode === MCP_APP_MODES.MAP) {
      const hasSlottedMap = Boolean(this.querySelector("eox-map"));
      const hasSlottedLc = Boolean(this.querySelector("eox-layercontrol"));
      const wantsLayerControl =
        this.showLayerControl || Boolean(this._normalizedMap?.showLayerControl);

      if (hasSlottedMap) return nothing;

      return html`
        <div class="eox-mcp-map-shell">
          <eox-map class="eox-mcp-stage-item eox-mcp-map"></eox-map>
          ${wantsLayerControl && !hasSlottedLc
            ? html`<eox-layercontrol
                class="eox-mcp-layercontrol"
              ></eox-layercontrol>`
            : nothing}
        </div>
      `;
    }

    return nothing;
  }

  render() {
    const styles = !this.unstyled
      ? html`
          <style>
            :host {
              display: block;
              width: 100%;
              min-height: 240px;
              box-sizing: border-box;
              color: var(--color-text-primary, #0f172a);
              background: var(--color-background-primary, transparent);
              font-family: var(--font-sans, system-ui, sans-serif);
            }
            .eox-mcp-app-root {
              width: 100%;
              height: 100%;
              position: relative;
            }
            .eox-mcp-map-shell {
              position: relative;
              width: 100%;
              height: 420px;
            }
            .eox-mcp-map,
            .eox-mcp-chart,
            .eox-mcp-stage-item {
              display: block;
              width: 100%;
              height: 100%;
            }
            .eox-mcp-chart {
              min-height: 320px;
            }
            .eox-mcp-layercontrol {
              position: absolute;
              top: 12px;
              right: 12px;
              z-index: 10;
              max-width: 280px;
              max-height: calc(100% - 24px);
              overflow: auto;
            }
          </style>
        `
      : nothing;

    return html`
      ${styles}
      <div class="eox-mcp-app-root" data-mode="${this.mode}">
        <slot></slot>
        ${this._renderAutoStage()}
      </div>
    `;
  }
}

customElements.define("eox-mcp-app", EOxMcpApp);
