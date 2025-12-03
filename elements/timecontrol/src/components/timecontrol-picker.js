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
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../main.js").EOxTimeControl} EOxTimeControl
 */
export class EOxTimeControlPicker extends LitElement {
  static get properties() {
    return {
      cal: { attribute: false, state: true },
      popup: { type: Boolean, attribute: "popup" },
      unstyled: { type: Boolean, attribute: "unstyled" },
      range: { type: Boolean, attribute: "range" },
      showDots: { type: Boolean, attribute: "show-dots" },
    };
  }

  #init = false;
  #selectedDateRange = null;
  constructor() {
    super();
    this.cal = null;
    this.popup = false;
    this.unstyled = false;
    this.range = false;
    this.showDots = false;
  }

  firstUpdated() {
    firstUpdatedMethod();
    if (!this.#init) this.initCalendar();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    cleanCalendarStyles();
  }

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
            if (self.context.selectedDates[0]) {
              const startDate = dayjs(
                self.context.selectedDates[0] + "T00:00:00",
              )
                .utc()
                .format();
              const endDate = dayjs(
                (self.context.selectedDates[1] ||
                  self.context.selectedDates[0]) + "T23:59:59",
              )
                .utc()
                .format();
              EOxTimeControl.dateChange([startDate, endDate], EOxTimeControl);
            }
          },
          onCreateDateEls: (_self, dateEl) => {
            if (this.showDots) {
              const date = extractISOFromCalendar(dateEl);
              const dateDots = groupBy(EOxTimeControl.items.get(), "start");
              const oldDots = dateEl.querySelector(".vc-day__dots");
              if (oldDots) oldDots.remove();

              if (dateDots[date] && dateEl.children.length) {
                const host = document.createElement("div");
                host.className = "vc-day__dots";

                for (let i = 0; i < dateDots[date].length; i++) {
                  const dot = document.createElement("div");
                  dot.className = "vc-day__dot";
                  host.appendChild(dot);
                }
                dateEl.appendChild(host);
              }
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
