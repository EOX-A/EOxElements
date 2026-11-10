import { LitElement, html } from "lit";
import { dispatchElementEvent, emitActivity } from "@eox/elements-utils";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import { renderChartMethod } from "./methods/render";
import { parseSpec } from "./methods/decode";
import { base64EncodeSpec } from "./methods/encode";

/**
 * Chart component based on [Vega-Lite](https://vega.github.io/vega-lite/)/[Vega-Embed](https://github.com/vega/vega-embed).
 * Pass a valid Vega spec as `spec` property or attribute in order to render a chart.
 * Optionally for transfer of chart definitions with both single and double quote as attribute, use the `spec` as base64 encoded string.
 *
 * The `eox-chart` provides some default `spec` settings (merged with the provided `spec` property/attribute) and helper functionalities on top of Vega-Lite.
 *
 * Default `spec` settings (see the file `src/enums/default-spec.js`):
 * - `width`: "container" (make the chart width responsive to the parent)
 * - `height`: "container" (make the chart height responsive to the parent)
 * - `autosize`: "fit" (automatically adjust the layout in an attempt to force the total visualization size to fit within the given width, height and padding values)
 * - `resize`: true (autosize layout is re-calculated on every view update)
 * - `padding`: 16 (the padding in pixels to add around the visualization)
 *
 * These default `spec` settings can be overwritten by setting them to a differnt value in the `spec` property/attribute passed to `eox-chart`. Also, there are default
 * Vega-Embed options (see the file `src/enums/default-opt.js`), which can also be overwritten in the passed `opt` property/attribute.
 *
 * Helper functionalities:
 *
 * The `eox-chart` automatically emits mouse/pointer events from the Vega-Lite chart. See below for the emitted events.
 * For working with base64 encoded `spec` or `dataValues` attributes, `eox-chart` exports two helper methods: `base64EncodeSpec` (encoding), `parseSpec` (decoding).
 *
 * @element eox-chart
 * @fires {CustomEvent<{ event: MouseEvent, item: any }>} click:item - Chart item is clicked
 * @fires {CustomEvent<{ event: PointerEvent, item: any }>} pointermove:item - Chart item is hovered
 * @fires {CustomEvent<import("@eox/elements-utils").EOxActivityDetail>} eox:activity - Fired only on user-initiated interactions and is to be used for analytics.
 */
export class EOxChart extends LitElement {
  static properties = {
    dataValues: { type: String },
    spec: { type: String },
    opt: { type: Object },
    noShadow: { attribute: "no-shadow", type: Boolean },
    unstyled: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * [Vega-Lite spec](https://vega.github.io/vega-lite/docs/spec.html) either as an object or base64 encoded string.
     *
     * @type {import("vega-embed").VisualizationSpec | string}
     */
    this.spec = undefined;

    /**
     * [Vega-Embed options](https://github.com/vega/vega-embed?tab=readme-ov-file#options)
     *
     * @type {import("vega-embed").EmbedOptions}
     */
    this.opt = undefined;

    /**
     * Data values passed on runtime. Requires a [named data source](https://vega.github.io/vega-lite/docs/data.html#named) in the provided `spec`. Either passed as a base64 encoded string or as an object.
     *
     * @type {{[dataSourceName: string]: import("vega-lite/types_unstable/data.js").InlineData} | string}
     */
    this.dataValues = undefined;

    /**
     * Renders the element without a shadow root
     *
     * @type {boolean}
     */
    this.noShadow = false;

    /**
     * Render the element without additional styles
     *
     * @type {boolean}
     */
    this.unstyled = false;

    /**
     * ResizeObserver instance to handle auto-resizing
     *
     * @type {ResizeObserver | null}
     * @private
     */
    this._resizeObserver = null;

    /**
     * Vega view instance
     *
     * @type {import("vega").View | null}
     * @private
     */
    this._vegaView = null;

    /** @type {import("vega-embed").Result | null} @private */
    this._embedResult = null;

    /** @type {object | null} @private */
    this._renderRequest = null;
  }

  /**
   * @private
   */
  _dispatchItemPointerMoveEvent(detail) {
    /**
     * Chart item is hovered. Event detail includes `event` (pointermove event) and `item` (the hovered item on the chart)
     *
     */
    this.dispatchEvent(
      new CustomEvent("pointermove:item", {
        detail,
      }),
    );
  }

  /**
   * @private
   */
  _dispatchItemClickEvent(detail) {
    /**
     * Chart item is clicked. Event detail includes `event` (click event) and `item` (the clicked item on the chart)
     *
     */
    dispatchElementEvent(this, "click:item", {
      detail,
      activity: true,
      action: "click:item",
      originalEvent: detail.event,
    });
  }

  /**
   * Lifecycle method called when the element is updated
   *
   * @param {import("lit").PropertyValues} changedProperties
   */
  async updated(changedProperties) {
    if (changedProperties.has("spec") || changedProperties.has("dataValues")) {
      const spec = parseSpec(this.spec);
      const dataValues = parseSpec(this.dataValues);
      renderChartMethod(this, spec, this.opt, dataValues);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.hasUpdated) {
      this._observeResize();
      this.requestUpdate("spec", Symbol());
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._resizeObserver?.disconnect();
    this._disposeChart();
  }

  /** @private */
  _disposeChart() {
    this._renderRequest = null;
    const result = this._embedResult;
    this._embedResult = null;
    this._vegaView = null;
    result?.finalize();
  }

  /** @private */
  _observeResize() {
    this._resizeObserver?.observe(this);
    if (this.parentElement) {
      this._resizeObserver?.observe(this.parentElement);
    }
  }

  /**
   * Append custom styling for vega tooltip
   */
  firstUpdated() {
    if (typeof ResizeObserver !== "undefined" && !this._resizeObserver) {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._vegaView) {
          window.dispatchEvent(new Event("resize"));
          this._vegaView.resize().runAsync();
        }
      });
      this._observeResize();
    }

    if (!this.unstyled) {
      const style = document.createElement("style");
      style.innerHTML = `
        #vg-tooltip-element {
          margin: 0;
          padding: 1rem 1rem 1rem 2rem;
          border-radius: 0.5rem;
          background-color: var(--inverse-surface);
          box-shadow: 0 0.25rem 0.5rem 0 rgb(0 0 0 / 0.4);
          line-height: normal;
          white-space: normal;
          border: none;
        }
        #vg-tooltip-element,
        #vg-tooltip-element table {
          font-size: small;
        }
        #vg-tooltip-element,
        #vg-tooltip-element table tr td.key,
        #vg-tooltip-element table tr td.value {
          color: var(--inverse-on-surface);
        }
        #vg-tooltip-element table tr td.key {
          font-weight: bold;
        }
      `;
      document.head.appendChild(style);
    }

    const visContainer = /** @type {HTMLElement | null} */ (
      this.renderRoot.querySelector("#vis")
    );
    if (visContainer) {
      // Case B: Listen to clicks on vega-embed actions (Save as PNG/SVG, View Source, etc.)
      visContainer.addEventListener("click", (e) => {
        const target = /** @type {HTMLElement | null} */ (e.target);
        const actionLink = /** @type {HTMLAnchorElement | null} */ (
          target?.closest(".vega-actions a")
        );
        if (actionLink) {
          emitActivity(
            this,
            "click:action",
            {
              action: actionLink.textContent?.trim() || "",
              href: actionLink.getAttribute("href") || "",
            },
            e,
          );
        }
      });

      // Case B: Listen to changes on Vega input bindings (.vega-bindings)
      visContainer.addEventListener("change", (e) => {
        const target =
          /** @type {HTMLInputElement | HTMLSelectElement | null} */ (e.target);
        if (target?.closest(".vega-bindings")) {
          const value =
            target instanceof HTMLInputElement && target.type === "checkbox"
              ? target.checked
              : target.value;
          emitActivity(
            this,
            "change:binding",
            {
              name:
                target.getAttribute("name") ||
                target.getAttribute("id") ||
                target.className,
              value,
            },
            e,
          );
        }
      });
    }
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Renders the component's HTML and CSS
   */
  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <div id="vis" class="no-round"></div>
    `;
  }
}
export { base64EncodeSpec, parseSpec };
customElements.define("eox-chart", EOxChart);
