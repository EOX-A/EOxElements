import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";

/**
 * `EOxLayerControlLayerDatetime` is a component that handles date time options for layers using eox-timecontrol.
 *  It triggers an event of the currently selected datetime value; allowing users to show and update a specific layer for a specific time.
 *
 *
 * @element eox-layercontrol-layer-datetime
 * @extends LitElement
 */
export class EOxLayerControlLayerDatetime extends LitElement {
  // Define static properties for the component
  static properties = {
    unstyled: { type: Boolean },
    noShadow: { type: Boolean },
    layerDatetime: { attribute: false },
    layer: { attribute: false },
  };

  constructor() {
    super();

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
     *   disablePlay?: boolean;
     *   slider?: boolean;
     *   currentStep: string|number;
     *   controlValues: (string|number)[]
     * }}
     */
    this.layerDatetime = null;

    /**
     * The native OL layer
     *
     * @type {import("ol/layer").Layer}
     * @see {@link https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html}
     */
    this.layer = null;
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  /**
   * Handles timecontrol Stepchange &
   * triggers `datetime:updated` event on step change
   *
   * @param {CustomEvent<{currentStep:string|number}>} evt
   **/
  #handleStepChange(evt) {
    this.dispatchEvent(
      new CustomEvent("datetime:updated", {
        bubbles: true,
        detail: {
          datetime: evt.detail.currentStep,
          layer: this.layer,
        },
      })
    );

    this.layerDatetime.currentStep = evt.detail.currentStep;
    this.requestUpdate();
  }

  /**
   * Renders a Time Control for datetime options of a layer.
   */
  render() {
    if (!customElements.get("eox-timecontrol")) {
      console.error(
        "Please import @eox/timecontrol in order to use layerDatetime"
      );
    }
    return html`
      <style>
        ${this.#styleBasic}
        ${!this.unstyled && this.#styleEOX}
      </style>
      ${when(
        this.layerDatetime,
        () => html`
          <!-- Render a Timecontrol for layer date time -->
          <eox-timecontrol
            ?unstyled=${this.unstyled}
            .for=${undefined}
            .layer=${undefined}
            .slider=${this.layerDatetime.slider ?? false}
            .disablePlay=${this.layerDatetime.disablePlay ?? false}
            .controlValues=${this.layerDatetime.controlValues}
            .controlProperty=${undefined}
            current-step=${this.layerDatetime.currentStep}
            @stepchange=${this.#handleStepChange}
          ></eox-timecontrol>
        `
      )}
    `;
  }

  #styleBasic = ``;
  #styleEOX = ``;
}

customElements.define(
  "eox-layercontrol-layer-datetime",
  EOxLayerControlLayerDatetime
);
