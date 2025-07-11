import { LitElement, html, nothing } from "lit";
import Group from "ol/layer/Group";
import { getElement } from "@eox/elements-utils";
import "toolcool-range-slider";
import { style } from "./style.js";
import { styleEOX } from "./style.eox.js";
import "./sliderticks.js";

import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);

/**
 * @element eox-timecontrol
 */
export class EOxTimeControl extends LitElement {
  static get properties() {
    return {
      /**
       * The WMS parameter to update
       */
      controlProperty: { type: String, attribute: "control-property" },

      /**
       * The list of available values for the animation property
       */
      controlValues: { type: Array, attribute: "control-values" },

      for: { type: String },

      /**
       * The layerid of the animated layer
       */
      layer: { type: String },

      /**
       * Display a slider for the values
       */
      slider: { type: Boolean },

      /**
       * Display left & right navigation buttons for the values
       */
      navigation: { type: Boolean },

      /**
       * Original params of layer source
       */
      _originalParams: { type: Object },

      /**
       * Hides the play button if set
       */
      play: { type: Boolean, attribute: "play" },

      /**
       * Date format string for displaying the current step
       * using [dayjs format token strings](https://day.js.org/docs/en/display/format)
       */
      displayFormat: { type: String, attribute: "display-format" },

      currentStep: { type: String, attribute: "current-step" },
      _animationInterval: { state: true },
      _controlSource: { state: true },
      _isAnimationPlaying: { state: true },
      _newStepIndex: { state: true },
      _eoxMap: { state: true },
      _width: { state: true },
      unstyled: { type: Boolean },
    };
  }

  constructor() {
    super();
    /** @type {string[]} */
    this.controlValues = [];
    /** @type {number} */
    this._newStepIndex = 0;
    /** @type {boolean} */
    this.unstyled = false;
    /** @type {boolean} */
    this.play = false;
    /** @type {boolean} */
    this.navigation = true;
    /** @type {boolean} */
    this.slider = false;
    /**
     * Query selector of an `eox-map` (`String`, passed as an attribute or property)
     * or an `eox-map` DOM element (`HTMLElement`, passed as property)
     *
     * @type {String|HTMLElement}
     */
    this.for = "eox-map";
    /** @type {string} */
    this.layer = "";
    /** @type {string | undefined} */
    this.controlProperty = undefined;
    /** @type {HTMLElement |undefined} */
    this._eoxMap = undefined;

    this._width = 300;

    window.addEventListener("resize", () => {
      this._width = this.clientWidth;
    });

    /** @type {string} */
    this.displayFormat = undefined;
  }

  /**
   * Go to next step
   */
  next() {
    this._updateStep(+1);
  }

  /**
   * Go to previous step
   */
  previous() {
    this._updateStep(-1);
  }

  /**
   * Toggle play animation
   * @param {boolean} on animation on/off
   */
  playAnimation(on) {
    if (on) {
      this._animationInterval = setInterval(() => this._updateStep(1), 500);
    } else {
      clearInterval(this._animationInterval);
    }
    this._isAnimationPlaying = on;
    this.requestUpdate();
  }

  /**
   * Set the config at a later point
   * @param {Object} config
   * @param {string} [config.layer]
   * @param {string} [config.controlProperty]
   * @param {Array<string>} [config.controlValues]
   */
  setConfig(config) {
    this.layer = config.layer ?? this.layer;
    this.controlProperty = config.controlProperty ?? this.controlProperty;
    this.controlValues = config.controlValues ?? this.controlValues;
    this.requestUpdate();
    this._updateStep(0);
  }

  /**
   * The currently selected step
   * @type {string}
   */
  get currentStep() {
    return this.controlValues[this._newStepIndex];
  }

  set currentStep(step) {
    const idx = this.controlValues.findIndex((v) => v === step);
    if (idx > -1) {
      this._newStepIndex = idx;
    } else {
      console.error(`Unable to find step "${step}" in available times!`);
    }
  }

  /**
   * initializes the EOxMap instance
   * And stores it in the private property #eoxMap.
   */
  firstUpdated() {
    this.updateMap();
  }

  updated(changedProperties) {
    if (changedProperties.has("for")) {
      this.updateMap();
    }
  }

  updateMap() {
    const foundElement = getElement(this.for);

    if (foundElement) {
      const EoxMap = /** @type {import("@eox/map").EOxMap} */ (foundElement);
      this.eoxMap = EoxMap;
    }
  }

  get eoxMap() {
    return this._eoxMap;
  }

  set eoxMap(value) {
    const oldValue = this._eoxMap;
    this._eoxMap = value;
    this.requestUpdate("eoxMap", oldValue);
  }

  /**
   * @param {number} [step=1]
   * @private
   */
  _updateStep(step = 1) {
    if (!step) {
      return;
    }

    this._newStepIndex = this._newStepIndex + step;
    if (this._newStepIndex > this.controlValues.length - 1) {
      this._newStepIndex = 0;
    }
    if (this._newStepIndex < 0) {
      this._newStepIndex = this.controlValues.length - 1;
    }

    if (this.layer && this.for) {
      this._controlSource?.updateParams({
        [this.controlProperty]: this.controlValues[this._newStepIndex],
      });
    }
    this.requestUpdate();

    /**
     * Triggers when *currentStep* is updated.
     * `event.detail.currentStep` returns the new *currentStep* value.
     */
    this.dispatchEvent(
      new CustomEvent("stepchange", {
        detail: {
          currentStep: this.currentStep,
        },
      }),
    );
  }

  /**
   * TEMP / TO-DO, this is a copy of the function defined in the eox-map:
   * https://github.com/EOX-A/EOxElements/blob/main/elements/map/src/layer.ts#L25
   * Consider a way to properly export that function and use it here
   * See also:
   * https://github.com/EOX-A/EOxElements/issues/974
   * @param {import('ol/layer/Base').default[]} layers
   * @returns {import('ol/layer/Base').default[]}
   */
  getFlatLayersArray(layers) {
    const flatLayers = [];
    flatLayers.push(...layers);

    /** @type {Array<Group>} */
    let groupLayers =
      /** @type {Array<Group>} */
      (flatLayers.filter((l) => l instanceof Group));
    while (groupLayers.length) {
      /** @type {Array<Group>} */
      const newGroupLayers = [];
      for (let i = 0, ii = groupLayers.length; i < ii; i++) {
        const layersInsideGroup = groupLayers[i].getLayers().getArray();
        flatLayers.push(...layersInsideGroup);
        /** @type {Array<Group>} */
        const filteredGroups = /** @type {Array<Group>} */ (
          layersInsideGroup.filter((l) => l instanceof Group)
        );
        newGroupLayers.push(...filteredGroups);
      }
      groupLayers = newGroupLayers;
    }
    return flatLayers;
  }

  render() {
    if (this.layer && this.for) {
      const foundElement = /** @type {import('@eox/map').EOxMap} */ (
        getElement(this.for)
      );

      const olMap = foundElement.map;

      olMap.once("loadend", () => {
        if (!this._originalParams) {
          const flatLayers = this.getFlatLayersArray(
            /** @type {import('ol/layer/Base').default[]} */ (
              olMap.getLayers().getArray()
            ),
          );
          const animationLayer =
            /** @type {import('ol/layer/Layer').default} */ (
              flatLayers.find((l) => l.get("id") === this.layer)
            );
          this._controlSource =
            /** @type {import('ol/source/TileWMS').default} */ (
              animationLayer.getSource()
            );

          this._originalParams = this._controlSource.getParams();
        }
      });
    }

    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <main>
        <div id="controls" part="controls">
          ${this.navigation
            ? html`
                <button
                  part="previous"
                  class="icon previous small circle transparent no-margin"
                  @click="${() => this.previous()}"
                >
                  ${!this.unstyled
                    ? html`
                        <i class="primary-text small">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>chevron-left-circle</title>
                            <path
                              d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z"
                            />
                          </svg>
                        </i>
                      `
                    : "<"}
                </button>
              `
            : nothing}
          <small part="current">
            ${this.displayFormat
              ? dayjs(this.controlValues[this._newStepIndex]).format(
                  this.displayFormat,
                )
              : this.controlValues[this._newStepIndex]}
          </small>
          ${this.navigation
            ? html`
                <button
                  part="next"
                  class="icon next small circle transparent no-margin"
                  @click="${() => this.next()}"
                >
                  ${!this.unstyled
                    ? html`
                        <i class="primary-text small">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>chevron-right-circle</title>
                            <path
                              d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z"
                            />
                          </svg>
                        </i>
                      `
                    : "<"}
                </button>
              `
            : nothing}
          ${this.play
            ? html`
                <button
                  part="play"
                  class="icon-text small ${this._isAnimationPlaying
                    ? "pause"
                    : "play"}"
                  @click="${() =>
                    this.playAnimation(
                      this._isAnimationPlaying ? false : true,
                    )}"
                >
                  ${!this.unstyled
                    ? html`
                        <i class="small">
                          ${this._isAnimationPlaying
                            ? html`<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <title>pause</title>
                                <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                              </svg>`
                            : html`<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <title>play</title>
                                <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                              </svg>`}
                        </i>
                      `
                    : nothing}
                  <span>${this._isAnimationPlaying ? "Pause" : "Play"}</span>
                </button>
              `
            : nothing}
        </div>
        <div class="small-padding">
          ${this.slider
            ? html`
                <div class="slider-col">
                  <tc-range-slider
                    data="${this.controlValues}"
                    part="slider"
                    value="${this.controlValues[this._newStepIndex]}"
                    @change="${(/** @type {CustomEvent} */ evt) =>
                      this._updateStep(
                        this.controlValues.findIndex(
                          (v) => v === evt.detail.value,
                        ) - this._newStepIndex,
                      )}"
                  ></tc-range-slider>

                  <eox-sliderticks
                    .width="${this._width}"
                    .steps="${this.controlValues}"
                  ></eox-sliderticks>
                </div>
              `
            : ""}
        </div>
      </main>
    `;
  }
}

customElements.define("eox-timecontrol", EOxTimeControl);
