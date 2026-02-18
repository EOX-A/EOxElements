import { LitElement, html } from "lit";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { when } from "lit/directives/when.js";
import { style } from "../styles/style.js";
import { styleEOX } from "../styles/style.eox.js";
import { TIME_CONTROL_DATE_FORMAT } from "../enums.js";
import findIndex from "lodash.findindex";
import groupBy from "lodash.groupby";
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../types").DateRange} DateRange
 * @typedef {import("../main").EOxTimeControl} EOxTimeControl
 */

/**
 * The `eox-timecontrol-date` component displays the currently selected date(s) with optional navigation buttons.
 * It formats the date according to the specified format string and can display single dates or date ranges.
 * When navigation is enabled, it provides previous/next buttons to step through available dates.
 *
 * @element eox-timecontrol-date
 */
export class EOxTimeControlDate extends LitElement {
  /**
   * Defines the component's reactive properties.
   *
   * @returns {Object} Property definitions.
   */
  static get properties() {
    return {
      format: { type: String, attribute: "format" },
      navigation: { type: Boolean, attribute: "navigation" },
      unstyled: { type: Boolean, attribute: "unstyled" },
    };
  }

  /**
   * Whether the component is rendered as an input field (when used with popup picker).
   *
   * @type {boolean}
   */
  #isInput = false;

  /**
   * The currently selected date range.
   *
   * @type {DateRange | null}
   */
  #selectedDateRange = null;

  /**
   * Creates a new EOxTimeControlDate instance.
   */
  constructor() {
    super();

    /**
     * Date format string using dayjs tokens (default: "YYYY-MM-DD").
     *
     * @type {string}
     */
    this.format = TIME_CONTROL_DATE_FORMAT;

    /**
     * Whether navigation buttons (previous/next) are shown.
     *
     * @type {boolean}
     */
    this.navigation = false;

    /**
     * Whether default styling is disabled.
     *
     * @type {boolean}
     */
    this.unstyled = false;
  }

  /**
   * Gets the parent EOxTimeControl component instance.
   *
   * @returns {EOxTimeControl | null} The parent timecontrol instance or null if not found.
   */
  getEOxTimeControl() {
    return /** @type {EOxTimeControl} */ (this.closest("eox-timecontrol"));
  }

  /**
   * Gets the current index and item values for the given key.
   *
   * @param {string} key - The key to get the current index and item values from.
   * @returns {Object} An object containing the current index and item values.
   */
  #getCurrIndexAndValues(key) {
    const EOxTimeControl = this.getEOxTimeControl();
    const itemValues = Object.keys(
      groupBy(EOxTimeControl.items.get(), key),
    ).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    const index = findIndex(itemValues, (date) => {
      if (key === "utc") {
        return dayjs(date).isSame(EOxTimeControl.selectedDateRange[0]);
      } else {
        return (
          date ===
          dayjs(EOxTimeControl.selectedDateRange[0]).format(
            TIME_CONTROL_DATE_FORMAT,
          )
        );
      }
    });
    return { index, itemValues };
  }

  /**
   * Gets the new index for the given item values, step, and index.
   *
   * @param {Array<string>} itemValues - The item values to get the new index from.
   * @param {number} step - The step to move the index by.
   * @param {number} index - The current index.
   * @returns {number} The new index.
   */
  #getNewIndex(itemValues, step, index) {
    let newIndex = index + step;
    if (newIndex > itemValues.length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = itemValues.length - 1;
    return newIndex;
  }

  /**
   * Updates the selected date by stepping forward or backward through available dates.
   *
   * @param {number} [step=1] - Number of steps to move (positive for forward, negative for backward).
   */
  updateStep(step = 1) {
    const EOxTimeControl = this.getEOxTimeControl();
    let newIndex, index, itemValues;
    const currIndex = this.#getCurrIndexAndValues("utc");
    index = currIndex.index;
    itemValues = currIndex.itemValues;

    // When exact value is matched based on date and time, use the index from the utc key
    if (index >= 0) {
      newIndex = this.#getNewIndex(itemValues, step, index);
    } else {
      // When exact value is not matched based on date and time, use the index from the date key
      const currIndex = this.#getCurrIndexAndValues("date");
      index = currIndex.index;
      itemValues = currIndex.itemValues;
      newIndex = this.#getNewIndex(itemValues, step, index);
    }

    const nextDate = itemValues[newIndex];
    const isSameDay = dayjs(nextDate).isSame(
      EOxTimeControl.selectedDateRange[0],
      "day",
    );
    const nextDateRange = [
      isSameDay
        ? dayjs(nextDate).utc().format()
        : dayjs(nextDate).startOf("day").utc().format(),
      dayjs(nextDate).endOf("day").utc().format(),
    ];
    EOxTimeControl.dateChange(nextDateRange, EOxTimeControl);
  }

  /**
   * Sets the date range and triggers a re-render.
   *
   * @param {DateRange} dateRange - The date range as [startDate, endDate] in ISO format.
   */
  setDateRange(dateRange) {
    this.#selectedDateRange = dateRange;
    this.requestUpdate();
  }

  /**
   * Lifecycle method called after the component's first update.
   * Checks if a popup picker is present and sets the input mode accordingly.
   */
  firstUpdated() {
    const EOxTimeControl = this.getEOxTimeControl();
    const EOxTimeControlPicker =
      /** @type {import("./timecontrol-picker.js").EOxTimeControlPicker} */ (
        EOxTimeControl.querySelector("eox-timecontrol-picker")
      );
    if (EOxTimeControlPicker && EOxTimeControlPicker.popup) {
      this.#isInput = true;
      this.requestUpdate();
    }
  }

  /**
   * Formats the selected date range according to the specified format string.
   * If the start and end dates are the same day, returns a single formatted date.
   * Otherwise, returns a formatted date range string.
   *
   * @param {DateRange} selectedDateRange - The date range to format.
   * @param {string} format - Date format string using dayjs tokens.
   * @returns {string} Formatted date or date range string.
   */
  #getFormattedDate(selectedDateRange, format) {
    const start = dayjs(selectedDateRange[0]).utc();
    const end = dayjs(selectedDateRange[1]).utc();
    const dayDifference = end.diff(start, "day");

    return dayDifference === 0
      ? start.format(format)
      : start.format(format) + " - " + end.format(format);
  }

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      ${when(this.navigation && this.#selectedDateRange, () => {
        return html`
          <button
            part="previous"
            class="icon previous small circle transparent no-margin"
            @click=${() => this.updateStep(-1)}
          >
            ${!this.unstyled
              ? html`
                  <i class="primary-text small">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>chevron-left-circle</title>
                      <path
                        d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z"
                      />
                    </svg>
                  </i>
                `
              : "<"}
          </button>
        `;
      })}
      <span id="date-container">
        ${when(this.#selectedDateRange, () => {
          return html`
            <input
              readonly
              class=${this.#isInput ? "input-field" : ""}
              value=${this.#getFormattedDate(
                this.#selectedDateRange,
                this.format,
              )}
              type="text"
              style="width: ${this.#getFormattedDate(
                this.#selectedDateRange,
                this.format,
              ).length + 1}ch"
            />
          `;
        })}
      </span>
      ${when(this.navigation && this.#selectedDateRange, () => {
        return html`
          <button
            part="next"
            class="icon next small circle transparent no-margin"
            @click=${() => this.updateStep(1)}
          >
            ${!this.unstyled
              ? html`
                  <i class="primary-text small">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>chevron-right-circle</title>
                      <path
                        d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z"
                      />
                    </svg>
                  </i>
                `
              : ">"}
          </button>
        `;
      })}
    `;
  }
}
customElements.define("eox-timecontrol-date", EOxTimeControlDate);
