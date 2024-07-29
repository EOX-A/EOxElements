import { LitElement, html, nothing } from "lit";
import Group from "ol/layer/Group";
import { getElement } from "../../../utils";
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

      /**
       * The query selector for the map
       */
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
       * Original params of layer source
       */
      _originalParams: { type: Object },

      /**
       * Hides the play button if set
       */
      disablePlay: { type: Boolean, attribute: "disable-play" },

      currentStep: { type: String, attribute: "current-step" },
      _animationInterval: { state: true },
      _controlSource: { state: true },
      _isAnimationPlaying: { state: true },
      _newStepIndex: { state: true },
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
    this.disablePlay = false;
    /** @type {boolean} */
    this.slider = false;
    /** @type {string|HTMLElement} */
    this.for = "";
    /** @type {string} */
    this.layer = "";
    /** @type {string | undefined} */
    this.controlProperty = undefined;
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
   * @param {number} [step=1]
   * @private
   */
  _updateStep(step = 1) {
    this._newStepIndex = this._newStepIndex + step;
    if (this._newStepIndex > this.controlValues.length - 1) {
      this._newStepIndex = 0;
    }
    if (this._newStepIndex < 0) {
      this._newStepIndex = this.controlValues.length - 1;
    }

    this._controlSource?.updateParams({
      [this.controlProperty]: this.controlValues[this._newStepIndex],
    });
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
      })
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
    let groupLayers = flatLayers.filter((l) => l instanceof Group);
    while (groupLayers.length) {
      const newGroupLayers = [];
      for (let i = 0, ii = groupLayers.length; i < ii; i++) {
        const layersInsideGroup = groupLayers[i].getLayers().getArray();
        flatLayers.push(...layersInsideGroup);
        newGroupLayers.push(
          ...layersInsideGroup.filter((l) => l instanceof Group)
        );
      }
      groupLayers = newGroupLayers;
    }
    return flatLayers;
  }

  render() {
    const foundElement = /** @type {import('../../map/main').EOxMap} */ (
      getElement(this.for)
    );
    const olMap = foundElement.map;

    olMap.once("loadend", () => {
      if (!this._originalParams) {
        const flatLayers = this.getFlatLayersArray(
          /** @type {import('ol/layer/Base').default[]} */ (
            olMap.getLayers().getArray()
          )
        );
        const animationLayer = /** @type {import('ol/layer/Layer').default} */ (
          flatLayers.find((l) => l.get("id") === this.layer)
        );
        this._controlSource =
          /** @type {import('ol/source/TileWMS').default} */ (
            animationLayer.getSource()
          );

        this._originalParams = this._controlSource.getParams();
      }
    });

    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <main>
        <div id="controls" part="controls">
          <button
            part="previous"
            class="icon previous"
            @click="${() => this.previous()}"
          >
            <
          </button>
          <button part="next" class="icon next" @click="${() => this.next()}">
            >
          </button>
          ${!this.disablePlay
            ? html`
                <button
                  part="play"
                  class="icon-text ${this._isAnimationPlaying
                    ? "pause"
                    : "play"}"
                  @click="${() =>
                    this.playAnimation(
                      this._isAnimationPlaying ? false : true
                    )}"
                >
                  ${this._isAnimationPlaying ? "Pause" : "Play"}
                </button>
              `
            : nothing}
          ${this.slider
            ? html`
                <div class="slider-col">
                  <tc-range-slider
                    data="${this.controlValues}"
                    part="slider"
                    value="${this.controlValues[this._newStepIndex]}"
                    style="display: inline-block;"
                    @change="${(/** @type {CustomEvent} */ evt) =>
                      this._updateStep(
                        this.controlValues.findIndex(
                          (v) => v === evt.detail.value
                        ) - this._newStepIndex
                      )}"
                  ></tc-range-slider>

                  <eox-sliderticks
                    width="300"
                    .steps="${this.controlValues}"
                  ></eox-sliderticks>
                </div>
              `
            : ""}

          <span part="current">${this.controlValues[this._newStepIndex]}</span>
        </div>
      </main>
    `;
  }
}

customElements.define("eox-timecontrol", EOxTimeControl);
