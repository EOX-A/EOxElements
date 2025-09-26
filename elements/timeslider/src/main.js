import { LitElement, html } from "lit";
import { style } from "./style.js";
import { styleEOX } from "./style.eox.js";
import { DataSet } from "vis-timeline/standalone";
import visTimelineCSS from "vis-timeline/styles/vis-timeline-graph2d.css?inline";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import minMax from "dayjs/plugin/minMax";
import { when } from "lit/directives/when.js";
import {
  firstUpdatedMethod,
  filterHandler as handleFilter,
  dateChangeHandler as handleDateChange,
} from "./methods/timeslider";
import vanillaCalendarCSS from "vanilla-calendar-pro/styles/index.css?inline";

dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);
dayjs.extend(minMax);

/**
 * @element eox-timeslider
 */
export default class EOxTimeSlider extends LitElement {
  static get properties() {
    return {
      for: { type: String },
      unstyled: { type: Boolean },
      titleKey: { type: String, attribute: "title-key" },
      layerIdKey: { type: String, attribute: "layer-id-key" },
      filters: { type: Array, attribute: "filter" },
      selectedDate: { type: String, attribute: "selected-date" },
      externalMapRendering: {
        type: Boolean,
        attribute: "external-map-rendering",
      },
    };
  }

  #visTimeline = null;
  #eoxMap = null;
  #groups = new DataSet([]);
  #items = new DataSet([]);
  #sliderValues = [];

  constructor() {
    super();
    /** @type {boolean} */
    this.unstyled = false;

    /**
     * Query selector of an `eox-map` (`String`, passed as an attribute or property)
     * or an `eox-map` DOM element (`HTMLElement`, passed as property)
     *
     * @type {String|HTMLElement}
     */
    this.for = "eox-map";

    this.filters = [];

    this.selectedDate = null;

    this.titleKey = "name";

    this.layerIdKey = "id";

    this.externalMapRendering = false;
  }

  getContainer() {
    return this.renderRoot.querySelector("#timeslider");
  }

  get visTimeline() {
    return this.#visTimeline;
  }

  set visTimeline(value) {
    this.#visTimeline = value;
  }

  get sliderValues() {
    return this.#sliderValues;
  }

  set sliderValues(value) {
    this.#sliderValues = value;
  }

  get eoxMap() {
    return this.#eoxMap;
  }

  set eoxMap(value) {
    this.#eoxMap = value;
  }

  get groups() {
    return this.#groups;
  }

  set groups(value) {
    this.#groups = value;
  }

  get items() {
    return this.#items;
  }

  set items(value) {
    this.#items = value;
  }

  firstUpdated() {
    firstUpdatedMethod(this);

    // Inject vanilla-calendar CSS into document head for inputMode popup
    this.injectCalendarStyles();
  }

  injectCalendarStyles() {
    // Check if styles are already injected
    if (document.querySelector("#vanilla-calendar-styles")) {
      return;
    }

    // Create style element for vanilla-calendar CSS
    const styleElement = document.createElement("style");
    styleElement.id = "vanilla-calendar-styles";
    styleElement.textContent = `
      ${vanillaCalendarCSS}
      .vc {
        z-index: 9999;
      }
      .vc * {
        font-family: var(--eox-body-font-family);
      }
      .vc-day__dots {
        display: flex;
        gap: 4px;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 4px;
        pointer-events: none;
      }
      .vc-day__dot {
        width: 4px;
        height: 4px;
        border-radius: 9999px;
        background: var(--primary);
        opacity: 0.9;
      }
      .vc-date[data-vc-date-selected] .vc-date__btn {
        background-color: var(--primary) !important;
      }
      .vc-date[data-vc-date-selected] .vc-day__dot {
        background: var(--on-primary) !important;
      }
    `;

    // Inject into document head
    document.head.appendChild(styleElement);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Clean up calendar styles if this is the last timeslider component
    const timesliderElements = document.querySelectorAll("eox-timeslider");
    if (timesliderElements.length <= 1) {
      const styleElement = document.querySelector("#vanilla-calendar-styles");
      if (styleElement) {
        styleElement.remove();
      }
    }
  }

  filterHandler(e) {
    handleFilter(e, this);
  }

  dateChangeHandler(e) {
    handleDateChange(e.target.value, this);
  }

  render() {
    return html`
      <style>
        ${visTimelineCSS}
        ${!this.unstyled && styleEOX}
        ${style}
      </style>
      <div class="timeslider-container">
        <div class="timeslider-header flex-center">
          <i class="icon calendar-icon"></i>
          <div class="timeslider-calendar field border small">
            <input
              type="text"
              id="cal"
              class="timeslider-calendar-input"
              readonly
              value=${this.selectedDate?.format("MMM DD, 'YY") || ""}
            />
          </div>
          ${when(
            this.filters.length && this.#visTimeline,
            () =>
              html`<eox-itemfilter
                id="timeslider-filter"
                .items=${this.#items}
                .inlineMode=${true}
                .titleProperty=${"id"}
                .showResults=${false}
                @filter=${this.filterHandler}
                .filterProperties=${this.filters}
                styleOverride=".inline-container-wrapper { height: 40px; } .inline-container { overflow-y: hidden; }"
              ></eox-itemfilter>`,
          )}
          <button class="setting-btn border small flex-center">
            <i class="icon setting-icon"></i><span>Settings</span>
          </button>
          <button class="export-btn border small flex-center">
            <i class="icon export-icon"></i><span>Export</span>
          </button>
        </div>
        <div id="timeslider"></div>
      </div>
    `;
  }
}

customElements.define("eox-timeslider", EOxTimeSlider);
