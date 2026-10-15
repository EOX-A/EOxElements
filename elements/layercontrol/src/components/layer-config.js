import { LitElement, html, css } from "lit";
import { getLegendConfig, getStartVals, getGeoZarrBandRange } from "../helpers";
import { dataChangeMethod, applyUpdatedStyles } from "../methods/layer-config";
import { when } from "lit/directives/when.js";
import _throttle from "lodash.throttle";
import "./layer-legend";
/**
 * @typedef {Partial<import("./layer-legend").LegendConfig> & {
 *     boundTo?:{key: string;value: string|number|boolean}
 *     domainProperties: string[]
 *     rangeProperty?: string
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
    colormapRegistry: { attribute: false, type: Object },
    customEditorInterfaces: { attribute: false, type: Array },
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
     *  style?: import("ol/layer/WebGLTile").Style;
     *  legend?: layerConfigLegend | layerConfigLegend[];
     *  [key: string]: any;
     *  }}
     */
    this.layerConfig = null;

    /**
     * Throttle #handleDataChange() by 1000 milliseconds
     */
    this.throttleDataChange = _throttle(this.#handleDataChange, 1000);

    /**
     * List of custom editor interfaces for layer config eox-jsonform
     * Read more about the implementation of custom editor interfaces here:
     * https://github.com/json-editor/json-editor/blob/master/docs/custom-editor.html
     *
     * @type {Array}
     */
    this.customEditorInterfaces = [];

    /**
     * Optional colormap registry for dynamic legend updates
     *
     * @type {Record<string,string[]>}
     */
    this.colormapRegistry = null;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.layer?.on) {
      this.layer.on("propertychange", this.#layerPropertyChangeListener);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.layer?.un) {
      this.layer.un("propertychange", this.#layerPropertyChangeListener);
    }
  }

  #layerPropertyChangeListener = (e) => {
    const propEvent = /** @type {import("ol/Object").ObjectEvent} */ (e);
    if (propEvent.key === "layerConfig") {
      this.layerConfig = this.layer.get("layerConfig");
      const freshStartVals = getStartVals(this.layer, this.layerConfig) || {};
      const schemaProps = this.layerConfig?.schema?.properties;
      const isAutofill =
        this.layerConfig?.autofill === true ||
        this.layerConfig?.schema?.autofill === true;

      if (
        this.layerConfig?.min !== undefined &&
        (isAutofill || schemaProps?.min !== undefined)
      ) {
        this.#data.min = this.layerConfig.min;
      }
      if (
        this.layerConfig?.max !== undefined &&
        (isAutofill || schemaProps?.max !== undefined)
      ) {
        this.#data.max = this.layerConfig.max;
      }
      const activeVar =
        this.layer.get("_lastVariable") ||
        this.layerConfig?.band ||
        (Array.isArray(this.layerConfig?.bands)
          ? this.layerConfig.bands[0]
          : undefined);
      if (
        activeVar &&
        (isAutofill ||
          schemaProps?.variable !== undefined ||
          schemaProps?.band !== undefined)
      ) {
        if (schemaProps?.band !== undefined) {
          this.#data.band = activeVar;
        } else {
          this.#data.variable = activeVar;
        }
      }
      this.#startVals = { ...this.#data, ...freshStartVals };
      if (schemaProps && !isAutofill) {
        const allowedKeys = new Set(Object.keys(schemaProps));
        for (const k of Object.keys(this.#startVals)) {
          if (!allowedKeys.has(k)) {
            delete this.#startVals[k];
          }
        }
      }
      this.#data = { ...this.#startVals };
      this.requestUpdate();
    }
  };

  /** Decide what type of throttling to do based on layerConfig type
   *
   * @param {import("lit").PropertyValues} changedProperties - The changed properties.
   */
  updated(changedProperties) {
    if (changedProperties.has("layer")) {
      const oldLayer = changedProperties.get("layer");
      if (oldLayer?.un) {
        oldLayer.un("propertychange", this.#layerPropertyChangeListener);
      }
      if (this.layer?.on) {
        this.layer.on("propertychange", this.#layerPropertyChangeListener);
      }
    }
    if (changedProperties.has("layerConfig")) {
      const throttleTime =
        this.layerConfig?.type === "style" || this.layerConfig?.style
          ? 100
          : 1000;

      this.throttleDataChange = _throttle(this.#handleDataChange, throttleTime);
    }
  }
  /**
   * Handles changes in eox-jsonform values.
   *
   * @param {{ detail: Record<string, any>; }} e
   */
  async #handleDataChange(e) {
    const prevVar =
      this.#data?.variable ??
      this.#data?.band ??
      this.layer?.get?.("_lastVariable") ??
      this.layerConfig?.band ??
      (Array.isArray(this.layerConfig?.bands)
        ? this.layerConfig.bands[0]
        : undefined);
    const currentVar = e.detail?.variable ?? e.detail?.band;
    const isVarChange =
      currentVar !== undefined &&
      prevVar !== undefined &&
      String(currentVar) !== String(prevVar);

    if (isVarChange) {
      const { targetMin, targetMax } = getGeoZarrBandRange(
        this.layer,
        String(currentVar),
        this.layerConfig,
      );
      if (e.detail) {
        if ("min" in e.detail || this.layerConfig?.min !== undefined) {
          e.detail.min = targetMin;
        }
        if ("max" in e.detail || this.layerConfig?.max !== undefined) {
          e.detail.max = targetMax;
        }
      }
    }

    this.#data = { ...e.detail };

    if (this.layerConfig?.type === "style" || this.layerConfig?.style) {
      const supportStyleConfig =
        "setStyle" in this.layer || "updateStyleVariables" in this.layer;
      if (supportStyleConfig) {
        await applyUpdatedStyles(this.#data, this.layer, this.layerConfig);
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
    if (isVarChange) {
      this.layerConfig = this.layer?.get?.("layerConfig") || this.layerConfig;
      const freshStartVals = getStartVals(this.layer, this.layerConfig) || {};
      const schemaProps = this.layerConfig?.schema?.properties;
      const isAutofill =
        this.layerConfig?.autofill === true ||
        this.layerConfig?.schema?.autofill === true;
      this.#startVals = {
        ...this.#data,
        ...freshStartVals,
        ...(currentVar &&
        (isAutofill ||
          schemaProps?.variable !== undefined ||
          schemaProps?.band !== undefined)
          ? schemaProps?.band !== undefined
            ? { band: currentVar }
            : { variable: currentVar }
          : {}),
        ...(this.#data.min !== undefined &&
        (isAutofill || schemaProps?.min !== undefined)
          ? { min: this.#data.min }
          : {}),
        ...(this.#data.max !== undefined &&
        (isAutofill || schemaProps?.max !== undefined)
          ? { max: this.#data.max }
          : {}),
      };
      if (schemaProps && !isAutofill) {
        const allowedKeys = new Set(Object.keys(schemaProps));
        for (const k of Object.keys(this.#startVals)) {
          if (!allowedKeys.has(k)) {
            delete this.#startVals[k];
          }
        }
      }
      this.#data = { ...this.#startVals };

      const jsonform = /** @type {any} */ (
        this.renderRoot?.querySelector("eox-jsonform")
      );
      if (
        jsonform?.editor &&
        !jsonform.editor.destroyed &&
        jsonform.editor.ready
      ) {
        jsonform.editor.setValue(this.#data);
      }
    }
    this.dispatchEvent(
      new CustomEvent("layerConfig:change", {
        bubbles: true,
        detail: {
          jsonformValue: this.#data,
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
    const freshStartVals = getStartVals(this.layer, this.layerConfig) || {};
    this.#startVals = { ...freshStartVals, ...this.#data };
    const schemaProps = this.layerConfig?.schema?.properties;
    const isAutofill =
      this.layerConfig?.autofill === true ||
      this.layerConfig?.schema?.autofill === true;
    if (schemaProps && !isAutofill) {
      const allowedKeys = new Set(Object.keys(schemaProps));
      for (const k of Object.keys(this.#startVals)) {
        if (!allowedKeys.has(k)) {
          delete this.#startVals[k];
        }
      }
    }
    this.#data = { ...this.#startVals };
    if (!customElements.get("eox-jsonform")) {
      console.error("Please import @eox/jsonform in order to use layerconfig");
    }

    // Options for the JSON form rendering
    const options = {
      disable_edit_json: true,
      disable_collapse: true,
      disable_properties: true,
      no_additional_properties: true,
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
                  this.#startVals,
                  this.colormapRegistry,
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
            .customEditorInterfaces=${this.customEditorInterfaces}
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
