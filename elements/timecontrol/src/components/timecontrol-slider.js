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
   * Generated ticks for the slider.
   *
   * @type {Array<{type: 'year' | 'empty', position: number, label?: string, date?: string}>}
   */
  #ticks = [];

  /**
   * ResizeObserver to regenerate ticks when slider width changes.
   *
   * @type {ResizeObserver | null}
   */
  #resizeObserver = null;

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
   * Generates ticks based on #items for year markers and empty ticks for gaps.
   *
   * @returns {Array<{type: 'year' | 'empty', position: number, label?: string, date?: string}>}
   */
  #generateTicks() {
    if (!this.#items || this.#items.length === 0) {
      return [];
    }

    const ticks = [];
    const yearSet = new Set();
    const yearTicks = [];

    // First pass: collect year ticks
    this.#items.forEach((dateStr, index) => {
      const date = dayjs(dateStr);
      const year = date.year();

      // Calculate position as percentage (0-100)
      const position =
        this.#items.length === 1 ? 0 : (index / (this.#items.length - 1)) * 100;

      // Add year tick (first occurrence of each year)
      if (!yearSet.has(year)) {
        yearSet.add(year);
        yearTicks.push({
          type: "year",
          position,
          label: year.toString(),
          date: dateStr,
        });
      }
    });

    // Sort year ticks by position
    yearTicks.sort((a, b) => a.position - b.position);

    // Second pass: add empty ticks between year ticks
    for (let i = 0; i < yearTicks.length; i++) {
      ticks.push(yearTicks[i]);

      let isLast = i === yearTicks.length - 1;
      let currentTick = yearTicks[i];
      let nextPosition = 100,
        nextTick = null;
      if (!isLast) {
        nextTick = yearTicks[i + 1];
        nextPosition = nextTick.position;
      }

      const gap = nextPosition - currentTick.position;

      // Only add empty ticks for gaps > 4%
      if (gap > 4) {
        // Calculate number of empty ticks (one every ~2-3% of the gap)
        // Ensure at least 1 empty tick for any gap > 4%
        const numEmptyTicks = Math.max(1, Math.floor(gap / 3));
        const minDistance = 0.8; // Minimum distance from year/edge ticks

        // Divide gap into (numEmptyTicks + 1) parts
        const emptyTickSpacing = gap / (numEmptyTicks + 1);

        for (let j = 1; j <= numEmptyTicks; j++) {
          const emptyPosition = currentTick.position + emptyTickSpacing * j;
          const distanceFromCurrent = emptyPosition - currentTick.position;
          const distanceFromNext = nextPosition - emptyPosition;

          // If last tick, distanceFromNext is just to edge of slider (100)
          // Only add if not too close to current year tick or edge/next year tick
          if (
            distanceFromCurrent > minDistance &&
            distanceFromNext > minDistance
          ) {
            ticks.push({
              type: "empty",
              position: emptyPosition,
            });
          }
        }
      }
    }

    return ticks.sort((a, b) => a.position - b.position);
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
    if (slider) {
      slider.setAttribute("data", this.#items.join(","));
      slider.setAttribute("value1", this.#filteredItems[0]);
    }

    // Generate ticks after items are set
    this.#ticks = this.#generateTicks();

    this.requestUpdate();
  }

  /**
   * Lifecycle method called after the first update.
   */
  firstUpdated() {
    // Set up ResizeObserver to regenerate ticks when slider width changes
    const slider = this.getSliderInstance();
    if (slider && window.ResizeObserver) {
      this.#resizeObserver = new ResizeObserver(() => {
        if (this.#items && this.#items.length > 0) {
          this.#ticks = this.#generateTicks();
          this.requestUpdate();
        }
      });
      this.#resizeObserver.observe(slider);
    }
  }

  /**
   * Lifecycle method called when the component is disconnected.
   */
  disconnectedCallback() {
    if (this.#resizeObserver) {
      this.#resizeObserver.disconnect();
      this.#resizeObserver = null;
    }
    super.disconnectedCallback();
  }

  handleChange(evt) {
    const EOxTimeControl = this.getEOxTimeControl();
    EOxTimeControl.dateChange(
      [evt.detail.value1, evt.detail.value1],
      EOxTimeControl,
    );
  }

  /**
   * Renders tick marks for the slider.
   *
   * @returns {import("lit").TemplateResult}
   */
  #renderTicks() {
    if (!this.#ticks || this.#ticks.length === 0) {
      return html``;
    }

    return html`
      <div class="custom-marks-container">
        ${this.#ticks.map(
          (tick) => html`
            <div
              class="custom-mark custom-mark-${tick.type}"
              style="left: ${tick.position}%"
            >
              ${tick.type === "year" && tick.label
                ? html`
                    <div
                      class="custom-mark-label custom-mark-${tick.type}-label"
                    >
                      ${tick.label}
                    </div>
                  `
                : ""}
            </div>
          `,
        )}
      </div>
    `;
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
        ${this.#renderTicks()}
      </div>
    `;
  }
}

customElements.define("eox-timecontrol-slider", EOxTimeControlSlider);
