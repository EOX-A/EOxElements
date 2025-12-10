import { LitElement, html } from "lit";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { style } from "../styles/style.js";
import { firstUpdatedMethod, getSelectedDatesMethod } from "../methods/picker";
import {
  cleanCalendarStyles,
  extractISOFromCalendar,
  calendarStyle,
} from "../helpers";
import { Calendar } from "vanilla-calendar-pro";
import groupBy from "lodash.groupby";
import find from "lodash.find";
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../types").DateRange} DateRange
 * @typedef {import("../main").EOxTimeControl} EOxTimeControl
 * @typedef {import("vanilla-calendar-pro").DateAny} DateAny
 */

let lastClickDate = null;

/**
 * The `eox-timecontrol-picker` component provides a calendar-based date picker for selecting single dates or date ranges.
 * It uses vanilla-calendar-pro and can be displayed inline or as a popup. The calendar can show dots indicating
 * available data on specific dates and supports both single and range selection modes.
 *
 * @element eox-timecontrol-picker
 */
export class EOxTimeControlPicker extends LitElement {
  /**
   * Defines the component's reactive properties.
   *
   * @returns {Object} Property definitions.
   */
  static get properties() {
    return {
      cal: { attribute: false, state: true },
      popup: { type: Boolean, attribute: "popup" },
      unstyled: { type: Boolean, attribute: "unstyled" },
      range: { type: Boolean, attribute: "range" },
      showDots: { type: Boolean, attribute: "show-dots" },
    };
  }

  /**
   * Whether the calendar has been initialized.
   *
   * @type {boolean}
   */
  #init = false;

  /**
   * The currently selected date range.
   *
   * @type {DateRange | null}
   */
  #selectedDateRange = null;

  /**
   * Creates a new EOxTimeControlPicker instance.
   */
  constructor() {
    super();

    /**
     * Reference to the vanilla-calendar-pro Calendar instance.
     *
     * @type {Calendar | null}
     */
    this.cal = null;

    /**
     * Whether the calendar is displayed in popup mode.
     *
     * @type {boolean}
     */
    this.popup = false;

    /**
     * Whether default styling is disabled.
     *
     * @type {boolean}
     */
    this.unstyled = false;

    /**
     * Whether range selection is enabled.
     *
     * @type {boolean}
     */
    this.range = false;

    /**
     * Whether to show dots indicating available data on calendar dates.
     *
     * @type {boolean}
     */
    this.showDots = false;
  }

  /**
   * Lifecycle method called after the component's first update.
   * Injects calendar styles and initializes the calendar if not already initialized.
   */
  firstUpdated() {
    firstUpdatedMethod();
    if (!this.#init) this.initCalendar();
  }

  /**
   * Lifecycle method called when the component is disconnected from the DOM.
   * Cleans up calendar styles to prevent memory leaks.
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    cleanCalendarStyles();
  }

  /**
   * Sets the date range and updates the calendar selection.
   *
   * @param {DateRange} dateRange - The date range as [startDate, endDate] in ISO format.
   */
  setDateRange(dateRange) {
    this.#selectedDateRange = dateRange;
    if (this.cal) {
      const selectedDates = getSelectedDatesMethod(
        this.#selectedDateRange,
        this.range,
      );
      this.cal.set({
        selectedDates: selectedDates.dates,
        selectedYear: selectedDates.year,
        selectedMonth: selectedDates.month,
      });
    }
  }

  /**
   * Initializes the calendar picker with the given options.
   * Creates a new vanilla-calendar-pro Calendar instance and sets up event handlers for date selection.
   *
   * @param {Object} [options={}] - Calendar initialization options.
   * @param {DateRange} [options.selectedDateRange] - Initial selected date range.
   * @param {DateAny} [options.min] - Minimum selectable date.
   * @param {DateAny} [options.max] - Maximum selectable date.
   */
  initCalendar(options = {}) {
    this.#init = true;
    const EOxTimeControl = /** @type {EOxTimeControl} */ (
      this.closest("eox-timecontrol")
    );
    setTimeout(() => {
      const defaultCalendarSelector = /** @type {HTMLElement} */ (
        this.renderRoot.querySelector("#cal")
      );
      const externalCalendarSelector =
        /** @type {import("../main.js").EOxTimeControl} */ (
          EOxTimeControl.querySelector(
            "eox-timecontrol-date",
          )?.shadowRoot?.querySelector("span")
        );
      const calendarSelector = !this.popup
        ? defaultCalendarSelector
        : externalCalendarSelector || defaultCalendarSelector;
      if (calendarSelector) {
        defaultCalendarSelector.innerHTML = "";
        this.#selectedDateRange = options.selectedDateRange;
        const selectedDates = getSelectedDatesMethod(
          this.#selectedDateRange,
          this.range,
        );
        this.cal = new Calendar(calendarSelector || "#cal", {
          selectedTheme: "light",
          dateMin: options.min,
          dateMax: options.max,
          displayDateMin: options.min,
          disableToday: true,
          displayDateMax: options.max,
          displayDatesOutside: false,
          type: this.range ? "multiple" : "default",
          selectionDatesMode: this.range ? "multiple-ranged" : "single",
          ...(selectedDates
            ? {
                selectedDates: selectedDates.dates,
                selectedYear: selectedDates.year,
                selectedMonth: selectedDates.month,
              }
            : {}),
          enableEdgeDatesOnly: false,
          inputMode: this.popup ? true : false,
          //@ts-expect-error error from vanilla-calendar-pro types
          positionToInput: ["top", "left"],
          selectedWeekends: [],
          onClickDate: (self) => {
            const lengthOfDates = self.context.selectedDates.length - 1;
            const start = self.context.selectedDates[0] || lastClickDate;
            const end = this.range && self.context.selectedDates[lengthOfDates];
            if (start) {
              const startDate = dayjs(start).startOf("day").utc().format();
              const endDate = dayjs(end || start)
                .endOf("day")
                .utc()
                .format();

              if (this.range) {
                if (lengthOfDates || lastClickDate === start) {
                  EOxTimeControl.dateChange(
                    [startDate, endDate],
                    EOxTimeControl,
                  );
                  lastClickDate = null;
                } else lastClickDate = start;
              } else {
                EOxTimeControl.dateChange([startDate, endDate], EOxTimeControl);
              }
            }
          },
          onCreateDateEls: (_self, dateEl) => {
            const date = extractISOFromCalendar(dateEl);
            const dateDots = groupBy(EOxTimeControl.items.get(), "start");
            const oldDots = dateEl.querySelector(".vc-day__dots");
            if (oldDots) oldDots.remove();

            if (dateDots[date] && dateEl.children.length) {
              const host = document.createElement("div");
              host.className = "vc-day__dots";

              const totalDots = dateDots[date].length;
              const dotsRequired = totalDots <= 3 ? totalDots : 3;
              for (let i = 0; i < dotsRequired; i++) {
                const EOxItemFilter = /** @type {EOxItemFilter} */ (
                  EOxTimeControl.querySelector("eox-itemfilter")
                );
                if (EOxItemFilter) {
                  const results = EOxItemFilter.results;
                  const dataAvaiableAfterFilter = find(
                    results,
                    (result) => result.start === date,
                  );
                  if (!dataAvaiableAfterFilter) {
                    dateEl.style.opacity = "0.5";
                  }
                }

                dateEl.classList.add("vc-data-available");
                if (dateEl.hasAttribute("data-vc-date-today")) {
                  dateEl.removeAttribute("data-vc-date-today");
                }

                if (this.showDots) {
                  if (i < 2 || (i === 2 && totalDots === 3)) {
                    const dot = document.createElement("div");
                    dot.className = "vc-day__dot";
                    host.appendChild(dot);
                  } else {
                    const plus = document.createElement("div");
                    plus.className = "vc-day__plus";
                    host.appendChild(plus);
                  }
                }
              }
              dateEl.appendChild(host);
            }
          },
        });
        this.cal.init();
      }
    });
  }

  render() {
    return html`
      <style>
        ${style}
        ${calendarStyle}
      </style>
      <div id="cal" class="timecontrol-calendar-input" readonly />
    `;
  }
}
customElements.define("eox-timecontrol-picker", EOxTimeControlPicker);
