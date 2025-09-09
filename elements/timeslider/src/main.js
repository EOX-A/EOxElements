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

dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);
dayjs.extend(minMax);

/**
 * @element eox-timeslider
 */
export class EOxTimeSlider extends LitElement {
  static get properties() {
    return {
      for: { type: String },
      unstyled: { type: Boolean },
      sliderValues: { type: Array, attribute: "slider-values" },
      filters: { type: Array, attribute: "filter" },
      selectedDate: { type: String, attribute: "selected-date" },
    };
  }

  #visTimeline = null;
  #eoxMap = null;
  #groups = new DataSet([]);
  #items = new DataSet([]);

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

    this.sliderValues = [];

    this.filters = [];

    this.selectedDate = null;
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
  }

  filterHandler(e) {
    handleFilter(e, this);
  }

  dateChangeHandler(e) {
    handleDateChange(e, this);
  }

  render() {
    return html`
      <style>
        ${visTimelineCSS}
        ${!this.unstyled && styleEOX}
        ${style}
      </style>
      <div class="timeslider-container">
        <div class="timeslider-header">
          <div class="field fill border small">
            <input
              type="date"
              @change=${this.dateChangeHandler}
              value=${this.selectedDate?.format("YYYY-MM-DD") || ""}
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
              ></eox-itemfilter>`,
          )}
        </div>
        <div id="timeslider"></div>
      </div>
    `;
  }
}

customElements.define("eox-timeslider", EOxTimeSlider);
