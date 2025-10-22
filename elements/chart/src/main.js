import { LitElement, html } from "lit";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import { renderChartMethod } from "./methods/render";

/**
 * Chart component based on [Vega-Lite](https://vega.github.io/vega-lite/)/[Vega-Embed](https://github.com/vega/vega-embed).
 * Pass a valid Vega spec as `spec` property in order to render a chart.
 *
 * The `eox-chart` provides some default `spec` settings (merged with the provided `spec` property) and helper functionalities on top of Vega-Lite.
 *
 * @element eox-chart
 */
export class EOxChart extends LitElement {
  static properties = {
    dataValues: { attribute: false, type: Object },
    spec: { attribute: false, type: Object },
    opt: { attribute: false, type: Object },
    noShadow: { attribute: "no-shadow", type: Boolean },
    unstyled: { type: Boolean },
  };

  constructor() {
    super();

    /**
     * [Vega-Lite spec](https://vega.github.io/vega-lite/docs/spec.html)
     *
     * @type {import("vega-embed").VisualizationSpec}
     */
    this.spec = undefined;

    /**
     * [Vega-Embed options](https://github.com/vega/vega-embed?tab=readme-ov-file#options)
     *
     * @type {import("vega-embed").EmbedOptions}
     */
    this.opt = undefined;

    /**
     * Data values passed on runtime. Requires a [named data source](https://vega.github.io/vega-lite/docs/data.html#named) in the provided `spec`
     *
     * @type {{[dataSourceName: string]: import("vega-lite/build/src/data").InlineData}}
     */
    this.dataValues = undefined;

    /**
     * Renders the element without a shadow root
     *
     * @type {Boolean}
     */
    this.noShadow = false;

    /**
     * Render the element without additional styles
     *
     * @type {Boolean}
     */
    this.unstyled = false;
  }

  _dispatchItemPointerMoveEvent(detail) {
    /**
     * Chart item is hovered. Event detail includes
     * `event` (pointermove event) and `item` (the hovered item on the chart)
     *
     */
    this.dispatchEvent(
      new CustomEvent("pointermove:item", {
        detail,
      }),
    );
  }

  _dispatchItemClickEvent(detail) {
    /**
     * Chart item is clicked. Event detail includes
     * `event` (click event) and `item` (the clicked item on the chart)
     *
     */
    this.dispatchEvent(
      new CustomEvent("click:item", {
        detail,
      }),
    );
  }

  /**
   * Lifecycle method called when the element is updated
   *
   * @param {import("lit").PropertyValues} changedProperties
   */
  async updated(changedProperties) {
    if (changedProperties.has("spec") || changedProperties.has("dataValues")) {
      renderChartMethod(this, this.spec, this.opt, this.dataValues);
    }
  }

  /**
   * Append custom styling for vega tooltip
   */
  firstUpdated() {
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

customElements.define("eox-chart", EOxChart);
