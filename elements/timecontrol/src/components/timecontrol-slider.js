import { LitElement, html } from "lit";
import { style } from "../styles/style.js";
import { styleEOX } from "../styles/style.eox.js";
import "toolcool-range-slider";
import { sliderStyle } from "../styles/style.slider.js";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import groupBy from "lodash.groupby";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../types").DateRange} DateRange
 * @typedef {import("../main").EOxTimeControl} EOxTimeControl
 * @typedef {import("../types").SelectedDateRange} SelectedDateRange
 */

/**
 * The `eox-timecontrol-slider` component provides a range slider for selecting date ranges.
 * It displays available dates from timeline items and allows users to select a start and end date
 * by dragging handles on the slider. The slider includes visual indicators for years and months.
 *
 * @element eox-timecontrol-slider
 * @property {Array} data - Array of data items to extract dates from.
 * @property {Array} selectedDateRange - The currently selected date range.
 */
export class EOxTimeControlSlider extends LitElement {
  /**
   * Defines the component's reactive properties.
   *
   * @returns {Object} Property definitions.
   */
  static get properties() {
    return {
      unstyled: { type: Boolean, attribute: "unstyled" },
    };
  }

  /**
   * Array of unique date strings extracted from data items.
   *
   * @type {Array<string> | null}
   */
  #items = null;

  /**
   * The currently selected date range.
   *
   * @type {SelectedDateRange}
   */
  #selectedDateRange = null;

  /**
   * The filtered items.
   *
   * @type {Array<string>}
   */
  #filteredItems = null;

  /**
   * Creates a new EOxTimeControlSlider instance.
   */
  constructor() {
    super();

    /**
     * Whether default styling is disabled.
     *
     * @type {boolean}
     */
    this.unstyled = false;
  }

  /**
   * Gets the toolcool-range-slider instance.
   *
   * @returns {HTMLElement} The slider element.
   */
  getSliderInstance() {
    return this.renderRoot.querySelector("tc-range-slider");
  }

  /**
   * Gets the EOxTimeControl instance.
   *
   * @returns {EOxTimeControl} The EOxTimeControl instance.
   */
  getEOxTimeControl() {
    return this.closest("eox-timecontrol");
  }

  /**
   * Sets the date range and updates the slider with new data.
   *
   * @param {DateRange} dateRange - The date range as [startDate, endDate] in ISO format.
   * @param {Array<any>} [data] - Optional array of data items to extract dates from.
   */
  setDateRange(dateRange, data) {
    this.#selectedDateRange = dateRange;
    const slider = this.getSliderInstance();
    if (data && data.length) {
      this.#items = Object.keys(groupBy(data, "utc")).sort((a, b) =>
        dayjs(a).diff(dayjs(b), "day"),
      );
    }
    if (this.#items && this.#selectedDateRange) {
      const start = dayjs(this.#selectedDateRange[0]);
      const end = dayjs(this.#selectedDateRange[1]);
      const filteredItems = this.#items.filter((utc) => {
        const date = dayjs(utc);
        return (
          (date.isAfter(start) || date.isSame(start, "day")) &&
          (date.isBefore(end) || date.isSame(end, "day"))
        );
      });
      this.#filteredItems = filteredItems;
    }
    slider.setAttribute("data", this.#items.join(","));
    slider.setAttribute("value1", this.#filteredItems[0]);

    this.requestUpdate();
  }

  handleChange(evt) {
    const EOxTimeControl = this.getEOxTimeControl();
    EOxTimeControl.dateChange(
      [evt.detail.value1, evt.detail.value1],
      EOxTimeControl,
    );
  }

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
        ${sliderStyle}
      </style>
      <div class="date-range-slider-wrapper">
        <tc-range-slider
          @change="${(/** @type {CustomEvent} */ evt) =>
            this.handleChange(evt)}"
        ></tc-range-slider>
      </div>
    `;
  }
}

customElements.define("eox-timecontrol-slider", EOxTimeControlSlider);
