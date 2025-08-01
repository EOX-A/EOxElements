import { LitElement, html, css } from "lit";
import { getLegendConfig } from "../helpers";
import { getStartVals } from "../helpers";
import { dataChangeMethod, applyUpdatedStyles } from "../methods/layer-config";
import { when } from "lit/directives/when.js";
import _throttle from "lodash.throttle";
import "./layer-legend";
/**
 * @typedef {Partial<import("./layer-legend").LegendConfig> & {
 *     boundTo?:{key: string;value: string|number|boolean}
 *     domainProperties: string[]
 *    }} layerConfigLegend
 **/

/**
 * `EOxLayerControlLayerConfig` is a component that handles configuration options for layers using eox-jsonform.
 * It allows users to input data, modify layer settings, and update the UI based on those settings.
 *
 *
 * @element eox-layercontrol-layerconfig
 * @extends LitElement
 */
export class EOxLayerControlLayerConfig extends LitElement {
  // Define static properties for the component
  static properties = {
    layer: { attribute: false },
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
    layerConfig: { attribute: false },
  };

  /**
   * data input by the user
   *
   * @type {{[key: string]: any}}
   */
  #data = {};

  /**
   * data input by the user
   *
   * @type {{[key: string]: any}}
   */
  #startVals = null;

  /**
   * Original tile url function, if it exist
   *
   * @type {Function}
   */
  #originalTileUrlFunction;

  constructor() {
    super();

    /**
     * The native OL layer
     *
     * @type {import("ol/layer").Layer}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html}
     */
    this.layer = null;

    /**
     * Render the element without additional styles
     *
     * @type {Boolean}
     */
    this.unstyled = false;

    /**
     * Renders the element without a shadow root
     *
     * @type {Boolean}
     */
    this.noShadow = false;

    /**
     * Layer config for eox-jsonform
     *
     * @type {{
     *  schema: Record<string,any>;
     *  element: string;
     *  type?: "tileUrl" | "style";
     *  style?: import("ol/layer/WebGLTile").Style
     *  legend?: layerConfigLegend | layerConfigLegend[]
     *  }}
     */
    this.layerConfig = null;

    /**
     * Throttle #handleDataChange() by 1000 milliseconds
     */
    this.throttleDataChange = _throttle(this.#handleDataChange, 1000);
  }

  /** Decide what type of throttling to do based on layerConfig type
   *
   * @param {import("lit").PropertyValues} changedProperties - The changed properties.
   */
  updated(changedProperties) {
    if (changedProperties.has("layerConfig")) {
      const throttleTime =
        this.layerConfig.type === "style" || this.layerConfig.style
          ? 100
          : 1000;

      this.throttleDataChange = _throttle(this.#handleDataChange, throttleTime);
      this.requestUpdate();
    }
  }
  /**
   * Handles changes in eox-jsonform values.
   *
   *  @param  {{ detail: { value: string; }; }} e
   */
  #handleDataChange(e) {
    this.#data = e.detail;
    if (this.layerConfig.type === "style" || this.layerConfig.style) {
      const supportStyleConfig =
        "setStyle" in this.layer || "updateStyleVariables" in this.layer;
      if (supportStyleConfig) {
        applyUpdatedStyles(this.#data, this.layer, this.layerConfig);
      } else {
        console.error(
          `Layer type ${
            this.layer.get("type") ?? ""
          } does not support styles configuration`,
        );
      }
    } else {
      this.#originalTileUrlFunction = dataChangeMethod(
        this.#data,
        this.#originalTileUrlFunction,
        this,
      );
    }
    this.dispatchEvent(
      new CustomEvent("layerConfig:change", {
        bubbles: true,
        detail: {
          jsonformValue: e.detail,
          layer: this.layer,
        },
      }),
    );
    this.requestUpdate();
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Renders a JSON form for configuration options of a layer.
   */
  render() {
    // Fetch initial values for the layer and its configuration
    this.#startVals = getStartVals(this.layer, this.layerConfig);
    if (Object.keys(this.#data).length !== 0) {
      this.#startVals = this.#data;
    }
    if (!customElements.get("eox-jsonform")) {
      console.error("Please import @eox/jsonform in order to use layerconfig");
    }

    // Options for the JSON form rendering
    const options = {
      disable_edit_json: true,
      disable_collapse: true,
      disable_properties: true,
    };
    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      ${when(
        this.layerConfig,
        () => html`
          ${when(
            this.layerConfig.legend,
            () => html`
              <eox-layercontrol-layer-legend
                .noShadow=${true}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${getLegendConfig(
                  this.layerConfig.legend,
                  this.#data,
                )}
              ></eox-layercontrol-layer-legend>
            `,
          )}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${this.#startVals}
            .options=${options}
            .noShadow=${true}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `,
      )}
    `;
  }

  #styleBasic = css`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      font-size: small;
    }
  `;
  #styleEOX = css`
    input[type="range"],
    eox-jsonform {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
    eox-layercontrol-layer-legend {
      display: block;
      margin-bottom: 1rem;
    }
  `;
}

customElements.define(
  "eox-layercontrol-layerconfig",
  EOxLayerControlLayerConfig,
);
