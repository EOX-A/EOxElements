import { LitElement, html, svg, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
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

import { getElement } from "../../../utils/getElement.js";

dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);

@customElement("eox-timecontrol")
export class EOxTimeControl extends LitElement {
  /**
   * The WMS parameter to update
   */
  @property({ attribute: "control-property" })
  controlProperty?: string;

  /**
   * The list of available values for the animation property
   */
  @property({ attribute: "control-values", type: Array })
  controlValues: Array<string> = [];

  /**
   * The query selector for the map
   */
  @property()
  for: string;

  /**
   * The layerid of the animated layer
   */
  @property()
  layer: string;

  /**
   * Display a slider for the values
   */
  @property({ type: Boolean })
  slider: boolean;

  /**
   * Original params of layer source
   */
  @property()
  private _originalParams: object;

  /**
   * Hides the play button if set
   */
  @property({ attribute: "disable-play", type: Boolean })
  disablePlay: boolean;

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
   * @param on animation on/off
   */
  playAnimation(on: boolean) {
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
   * @param config
   */
  setConfig(config: {
    layer: string;
    controlProperty: string;
    controlValues: Array<string>;
  }) {
    this.layer = config.layer ?? this.layer;
    this.controlProperty = config.controlProperty ?? this.controlProperty;
    this.controlValues = config.controlValues ?? this.controlValues;
    this.requestUpdate();
    this._updateStep(0);
  }

  /**
   * The currently selected step
   * @type string
   */
  get currentStep() {
    return this.controlValues[this._newStepIndex];
  }

  @property({ attribute: "current-step" })
  set currentStep(step: string) {
    const idx = this.controlValues.findIndex((v) => v === step);
    if (idx > -1) {
      this._newStepIndex = idx;
    } else {
      console.error(`Unable to find step "${step}" in available times!`);
    }
  }

  @state()
  private _animationInterval: ReturnType<typeof setInterval>;

  @state()
  private _controlSource: UrlTile;

  @state()
  private _isAnimationPlaying: boolean;

  @state()
  private _newStepIndex = 0;

  @state()
  private _eoxMap: HTMLElement;

  @property({ type: Boolean })
  unstyled: boolean;

  private _updateStep(step = 1) {
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
   * @param layers layers Array
   */
  getFlatLayersArray(layers: Array<Layer>) {
    const flatLayers = [];
    flatLayers.push(...layers);

    let groupLayers = flatLayers.filter(
      (l) => l instanceof Group
    ) as unknown as Array<Group>;

    while (groupLayers.length) {
      const newGroupLayers = [];
      for (let i = 0, ii = groupLayers.length; i < ii; i++) {
        const layersInsideGroup = groupLayers[i].getLayers().getArray();
        flatLayers.push(...layersInsideGroup);
        newGroupLayers.push(
          ...(layersInsideGroup.filter(
            (l) => l instanceof Group
          ) as Array<Group>)
        );
      }
      groupLayers = newGroupLayers;
    }
    return flatLayers as Array<Layer>;
  }

  updateMap() {
    const foundElement = getElement(this.for);

    if (foundElement) {
      const EoxMap = /** @type {import("@eox/map/main").EOxMap} */ (
        foundElement
      );
      this.eoxMap = EoxMap;
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

  get eoxMap() {
    return this._eoxMap;
  }

  set eoxMap(value) {
    const oldValue = this._eoxMap;
    this._eoxMap = value;
    this.requestUpdate("eoxMap", oldValue);
  }

  render() {
    // @ts-ignore
    const olMap: Map = this.eoxMap.map;

    olMap.once("loadend", () => {
      if (!this._originalParams) {
        const flatLayers = this.getFlatLayersArray(
          // @ts-ignore
          olMap.getLayers().getArray()
        );
        const animationLayer = flatLayers.find(
          (l: Layer) => l.get("id") === this.layer
        ) as Layer;
        this._controlSource = animationLayer.getSource() as UrlTile;

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
                    @change="${(evt: { detail: { value: string } }) =>
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

@customElement("eox-sliderticks")
export class SliderTicks extends LitElement {
  @property({ type: Number }) width: number = 0;
  @property({ type: Array }) steps: string[] = [];

  @state() height = 6;
  @state() svgWidth = 0;

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

  get yearMarks(): { label: number; position: number }[] {
    const yearMarks: { label: number; position: number }[] = [];
    let previousYear: number = null;

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

  isYearLine(line: number): boolean {
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
