import { LitElement, html } from "lit";
import { style } from "./style.js";
import { styleEOX } from "./style.eox.js";
import { handleMessage, initializeDriver } from "./methods/tour/index.js";

/**
 * The `eox-tour` element uses [driver.js](https://driverjs.com/) to create interactive product tours.
 * It supports cross-iframe handoffs (start a tour in a "parent" and continue inside an iframe),
 * persistent "seen" state via `localStorage`, and styling based on EOxUI.
 *
 * Features:
 * - Define a series of steps to guide users through an application.
 * - Highlight target elements and display customizable popovers.
 * - Cross-iframe handoff logic seamlessly transitioning between parent window and iframe (supports both a "simple mode" defined entirely in the parent config, and an "advanced mode" with individual configs in both frames).
 * - Persistent state tracking using `localStorage` to avoid repeatedly showing completed tours.
 * - Prevent automatic start on mount for manual control over when the tour begins.
 *
 * The `eox-tour` element does not render any visible content itself; it operates entirely through the driver.js popovers and highlights.
 * Therefore it doesn't matter where in the DOM you place the `<eox-tour>` element, but it must be present in the document for the tour to function.
 *
 * **Note on the `id` attribute:**
 * An `id` attribute is required for identifying instances for `localStorage` persistence, and
 * it is strictly mandated for iframe handoff scenarios to correctly route `postMessage` synchronization.
 *
 * @element eox-tour
 * @fires {CustomEvent} tour-highlight-started - Fired when driver.js `onHighlightStarted` is called.
 * @fires {CustomEvent} tour-highlighted - Fired when driver.js `onHighlighted` is called.
 * @fires {CustomEvent} tour-deselected - Fired when driver.js `onDeselected` is called.
 * @fires {CustomEvent} tour-destroy-started - Fired when driver.js `onDestroyStarted` is called.
 */
export class EOxTour extends LitElement {
  static get properties() {
    return {
      /**
       * The driver.js configuration object. See the [driver.js docs](https://driverjs.com/docs/configuration) for available options.
       */
      config: { attribute: false, type: Object },
      /**
       * Whether to show the tour every time the component is mounted,
       * bypassing the `localStorage` check.
       */
      showEveryTime: { attribute: "show-every-time", type: Boolean },
      /**
       * Whether to prevent the tour from starting automatically on mount.
       * If true, the tour must be started manually via the `start()` method.
       */
      preventAutoStart: { attribute: "prevent-auto-start", type: Boolean },
      /**
       * Whether to disable the default EOx branded styling.
       */
      unstyled: { attribute: "unstyled", type: Boolean },
    };
  }

  constructor() {
    super();
    this.config = {};
    this.showEveryTime = false;
    this.preventAutoStart = false;
    this.unstyled = false;
    /**
     * The driver.js instance.
     * @type {import('driver.js').Driver}
     * @ignore
     */
    this.driver = null;
    /**
     * The localStorage key for storing shown tours.
     * @type {string}
     * @ignore
     */
    this.TOUR_KEY = "eox-tour-shown";
  }

  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("message", this._handleMessage);
  }

  /**
   * @override
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("message", this._handleMessage);
    if (this.driver) {
      this.driver.destroy();
    }
  }

  /**
   * Handles incoming `postMessage` events for cross-iframe synchronization.
   * Supported message types: EOX_TOUR_HANDOFF, EOX_TOUR_RESUME, EOX_TOUR_DESTROY.
   *
   * @param {MessageEvent} event
   * @ignore
   */
  _handleMessage = (event) => {
    handleMessage(event, this);
  };

  /**
   * @override
   */
  updated(changedProperties) {
    if (changedProperties.has("config") && this.config) {
      initializeDriver(this);
    }
  }

  /**
   * Starts the tour at a specific step index.
   *
   * @param {number} [stepIndex=0] The index of the step to start at.
   */
  start(stepIndex = 0) {
    const step = this.config?.steps?.[stepIndex];
    const targetIframe = step?.targetIframe || step?.popover?.targetIframe;

    let isParentOfTarget = false;
    if (targetIframe) {
      const el = document.querySelector(targetIframe);
      if (el && el.tagName.toLowerCase() === "iframe") {
        isParentOfTarget = true;
      }
    }

    if (isParentOfTarget) {
      const iframe = document.querySelector(targetIframe);
      if (iframe && iframe.contentWindow) {
        const sanitizedConfig = JSON.parse(JSON.stringify(this.config));
        iframe.contentWindow.postMessage(
          {
            type: "EOX_TOUR_HANDOFF",
            tourId: this.id,
            config: sanitizedConfig,
            stepIndex,
          },
          "*",
        );
      }
    } else {
      if (this.driver) {
        if (this.driver.isActive()) {
          this.driver.moveTo(stepIndex);
        } else {
          this.driver.drive(stepIndex);
        }
      }
    }
  }

  /**
   * @override
   */
  createRenderRoot() {
    return this;
  }

  /**
   * @override
   */
  render() {
    return html`
      <style>
        ${style}
        @scope (.driver-popover) {
          ${!this.unstyled ? styleEOX : ""}
        }
      </style>
    `;
  }
}

customElements.define("eox-tour", EOxTour);
