import { LitElement, html } from "lit";
import { style } from "./styles/style.js";
import { styleEOX } from "./styles/style.eox.js";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import { DataSet } from "vis-timeline/standalone";

import "./components/timecontrol-date";
import "./components/timecontrol-picker";
import "./components/timecontrol-timeline";
import "@eox/itemfilter";

import {
  firstUpdatedMethod,
  dateChangeHandlerMethod,
  filterHandlerMethod,
} from "./methods/timecontrol";

dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);
dayjs.extend(utc);

/**
 * @element eox-timecontrol
 *
 * The `eox-timecontrol` element provides interactive time navigation for map layers, supporting animation, a simple time slider, and custom date formatting.
 *
 * Features:
 * - Link to an <eox-map> instance for time-based WMS layer control
 * - Navigation buttons and play/pause animation
 * - Slider for direct time selection
 * - Programmatic control of time step
 * - Customizable display format using dayjs tokens
 * - Emits 'stepchange' event when the current time step changes
 * - Can be used standalone without a map
 *
 */
export class EOxTimeControl extends LitElement {
  static get properties() {
    return {
      unstyled: { type: Boolean },
    };
  }

  #eoxMap = null;
  // @ts-expect-error TODO: Fix typing
  #loading = false;
  #groups = new DataSet([]);
  #items = new DataSet([]);
  #sliderValues = [];
  constructor() {
    super();
    /** @type {boolean} */
    this.unstyled = false;

    this.selectedDateRange = null;

    this.selectedRange = [];

    this.titleKey = "name";

    this.layerIdKey = "id";

    this.externalMapRendering = false;
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

  getContainer() {
    return this.renderRoot.querySelector("#timeslider");
  }

  setLoading(value) {
    this.#loading = value;
    this.requestUpdate();
  }

  dateChange = dateChangeHandlerMethod;

  firstUpdated() {
    firstUpdatedMethod(this);
    this.requestUpdate();
  }

  filter = filterHandlerMethod;

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <main>
        <slot></slot>
      </main>
    `;
  }
}

customElements.define("eox-timecontrol", EOxTimeControl);
