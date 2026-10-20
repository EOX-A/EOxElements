import { LitElement, html } from "lit";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { when } from "lit/directives/when.js";
import { live } from "lit/directives/live.js";
import { style } from "../styles/style.js";
import { styleEOX } from "../styles/style.eox.js";
import { TIME_CONTROL_DATE_FORMAT } from "../enums.js";
import {
  commitInputMethod,
  getStepDateMethod,
  updateStepMethod,
} from "../methods/date/index.js";
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
      dateWrap: { type: Boolean, attribute: "date-wrap" },
      editable: { type: Boolean, attribute: "editable" },
      unstyled: { type: Boolean, attribute: "unstyled" },
    };
  }

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
     * Whether date navigation wraps from the last date to the first and vice versa.
     * Set the property to false to disable navigation at either boundary (default: true).
     *
     * @type {boolean}
     */
    this.dateWrap = true;

    /**
     * Whether the date text can be edited. Defaults to false (disabled input)
     * @type {boolean}
     */
    this.editable = false;

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
   * Updates the selected date by stepping forward or backward through available dates.
   *
   * @param {number} [step=1] - Number of steps to move (positive for forward, negative for backward).
   * @returns {void}
   */
  updateStep(step = 1) {
    updateStepMethod(step, this);
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
   * Enables editing when a timecontrol picker is present.
   */
  firstUpdated() {
    const EOxTimeControl = this.getEOxTimeControl();
    const EOxTimeControlPicker =
      /** @type {import("./timecontrol-picker.js").EOxTimeControlPicker} */ (
        EOxTimeControl?.querySelector("eox-timecontrol-picker")
      );
    if (EOxTimeControlPicker) {
      this.editable = true;
      this.requestUpdate();
    }
    if (!this.#selectedDateRange && EOxTimeControl?.selectedDateRange) {
      this.setDateRange(EOxTimeControl.selectedDateRange);
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
    const EOxTimeControl = this.getEOxTimeControl();
    const showUTC = EOxTimeControl.showUTC;

    const start = showUTC
      ? dayjs(selectedDateRange[0]).utc()
      : dayjs(selectedDateRange[0]);
    const end = showUTC
      ? dayjs(selectedDateRange[1]).utc()
      : dayjs(selectedDateRange[1]);
    const dayDifference = end.diff(start, "day");

    return dayDifference === 0
      ? start.format(format)
      : start.format(format) + " - " + end.format(format);
  }

  /**
   * Validates edited text when focus leaves the input or Enter is pressed
   * @param {Event} event - Input event requesting a commit
   * @returns {void}
   */
  #commitInput(event) {
    commitInputMethod(
      /** @type {HTMLInputElement} */ (event.currentTarget),
      this.#selectedDateRange,
      this.#getFormattedDate(this.#selectedDateRange, this.format),
      this,
    );
  }

  /**
   * Commits on Enter while retaining focus and avoiding implicit form submission
   * @param {KeyboardEvent} event - Input keydown event
   * @returns {void}
   */
  #handleKeyDown(event) {
    if (event.key !== "Enter" || event.isComposing) return;
    event.preventDefault();
    this.#commitInput(event);
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
            ?disabled=${getStepDateMethod(-1, this) === undefined}
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
              class=${this.editable ? "input-field" : ""}
              ?disabled=${!this.editable}
              .value=${live(
                this.#getFormattedDate(this.#selectedDateRange, this.format),
              )}
              aria-label="Selected date"
              @blur=${this.#commitInput}
              @keydown=${this.#handleKeyDown}
              @change=${(event) => event.stopPropagation()}
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
            ?disabled=${getStepDateMethod(1, this) === undefined}
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
