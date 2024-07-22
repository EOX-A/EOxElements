import { LitElement, html, svg, nothing } from "lit";
import { Map } from "ol";
import Layer from "ol/layer/Layer";
import Group from "ol/layer/Group";
import UrlTile from "ol/source/UrlTile";
import "toolcool-range-slider";
import { style } from "./style";
import { styleEOX } from "./style.eox";

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
    this.controlValues = [];
    this._newStepIndex = 0;
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

    // @ts-ignore
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
   * @param {Array<Layer>} layers layers Array
   * @returns {Array<Layer>}
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
    const mapQuery = document.querySelector(this.for);
    // @ts-ignore
    const olMap = mapQuery.map || mapQuery;

    olMap.once("loadend", () => {
      if (!this._originalParams) {
        const flatLayers = this.getFlatLayersArray(
          // @ts-ignore
          olMap.getLayers().getArray()
        );
        const animationLayer = flatLayers.find(
          (l) => l.get("id") === this.layer
        );
        this._controlSource = animationLayer.getSource();

        this._originalParams =
          // @ts-ignore
          this._controlSource.getParams();
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
          ></button>
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
                    @change="${(evt) =>
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

/**
 * @element eox-sliderticks
 */
export class SliderTicks extends LitElement {
  static get properties() {
    return {
      width: { type: Number },
      steps: { type: Array },
      height: { state: true },
      svgWidth: { state: true },
    };
  }

  constructor() {
    super();
    this.width = 0;
    this.steps = [];
    this.height = 6;
    this.svgWidth = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this.handleResize.bind(this));
    super.disconnectedCallback();
  }

  firstUpdated() {
    this.handleResize();
  }

  handleResize() {
    this.svgWidth = this.shadowRoot.querySelector("svg").clientWidth;
    this.height = this.shadowRoot.querySelector("svg").clientHeight;
  }

  get lines() {
    const num = this.numLines > this.width / 2 ? this.width / 2 : this.numLines;

    const spacing = this.width / (num - 1);
    return Array.from({ length: this.numLines }, (_, i) => i * spacing);
  }

  get numLines() {
    return this.steps ? this.steps.length : 0;
  }

  get yearMarks() {
    const yearMarks = [];
    let previousYear = null;

    this.lines.forEach((line, index) => {
      const currentStep = dayjs(this.steps[index]);
      const currentYear = currentStep.year();

      // If it's the first tick or if the year has changed, add a year mark
      if (index === 0 || currentYear !== previousYear) {
        yearMarks.push({
          label: currentYear,
          position: line, // Assuming 'line' is the position of the tick
        });
      }

      // Update previousYear for the next iteration
      previousYear = currentYear;
    });

    // Filter out year marks that are too close together, in favor of the second one.
    return yearMarks.filter((current, i) => {
      const next = yearMarks[i + 1];

      return !(next && next.position - current.position < 25);
    });
  }

  /**
   * @param {number} line
   * @returns {boolean}
   */
  isYearLine(line) {
    // Check if this line's position is approximately equal to any year mark position
    const isYearMark = this.yearMarks.some(
      (yearMark) => Math.abs(yearMark.position - line) < 1.0
    );

    return isYearMark;
  }

  render() {
    return html`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width + 2} ${this.height}"
        >
          ${this.lines.map(
            (line, index) => svg`
            <line
              key=${index}
              x1=${line}
              y1="0"
              x2=${line}
              y2=${this.isYearLine(line) ? 12 : 6}
              stroke=${this.isYearLine(line) ? "#222" : "#7596A2"}
              stroke-width=${this.isYearLine(line) ? 1 : 1}
            ></line>
          `
          )}
          ${this.yearMarks.map(
            (year, index) => svg`
            <text
              key=${`y${index}`}
              x=${year.position}
              y=${this.height - 1}
              fill="#555"
              font-size="13"
              font-weight="500"
            >
              ${year.label}
            </text>
          `
          )}
        </svg>
      </div>
    `;
  }
}

customElements.define("eox-sliderticks", SliderTicks);
