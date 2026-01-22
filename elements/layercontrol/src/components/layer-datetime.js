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
     *   play?: boolean;
     *   slider?: boolean;
     *   navigation?: boolean;
     *   currentStep: string|number;
     *   controlValues: (string|number)[];
     *   displayFormat?: string;
     *   animateOnClickInterval?: string;
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
   * @param {CustomEvent<{date:string[]}>} evt
   **/
  #handleStepChange(evt) {
    const formatDate = (d) =>
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const currentStep = formatDate(new Date(evt.detail.date[0]));

    this.dispatchEvent(
      new CustomEvent("datetime:updated", {
        bubbles: true,
        detail: {
          datetime: currentStep,
          layer: this.layer,
        },
      }),
    );

    this.layerDatetime.currentStep = currentStep;
    this.requestUpdate();
  }

  /**
   * Renders a Time Control for datetime options of a layer.
   */
  render() {
    if (!customElements.get("eox-timecontrol")) {
      console.error(
        "Please import @eox/timecontrol in order to use layerDatetime",
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
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep
              ? [this.layerDatetime.currentStep]
              : undefined}
            .controlValues=${[
              {
                id: this.layer.get("id"),
                name: this.layer.get("name") || this.layer.get("title"),
                timeControlValues: this.layerDatetime.controlValues.map(
                  (value) => ({ date: value }),
                ),
              },
            ]}
            @select=${this.#handleStepChange}
          >
            <eox-timecontrol-date
              .navigation=${this.layerDatetime.navigation ?? false}
              .format=${this.layerDatetime.displayFormat}
            ></eox-timecontrol-date>
            <eox-timecontrol-slider
              animate-onclick-interval="${this.layerDatetime
                .animateOnClickInterval ?? "0.3s"}"
            ></eox-timecontrol-slider>
          </eox-timecontrol>
        `,
      )}
    `;
  }

  #styleBasic = ``;
  #styleEOX = ``;
}

customElements.define(
  "eox-layercontrol-layer-datetime",
  EOxLayerControlLayerDatetime,
);
