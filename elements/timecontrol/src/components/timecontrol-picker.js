import { LitElement, html } from "lit";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { style } from "../style.js";
import { styleEOX } from "../style.eox.js";
import { firstUpdatedMethod } from "../methods/picker";
import { cleanCalendarStyles, extractISOFromCalendar } from "../helpers";
import { Calendar } from "vanilla-calendar-pro";
import groupBy from "lodash.groupby";
import vanillaCalendarCSS from "vanilla-calendar-pro/styles/index.css?inline";
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * @typedef {import("../main.js").EOxTimeControl} EOxTimeControl
 */
export class EOxTimeControlPicker extends LitElement {
  static get properties() {
    return {
      cal: { attribute: false, state: true },
      temporary: { type: Boolean, attribute: "temporary" },
      unstyled: { type: Boolean, attribute: "unstyled" },
      range: { type: Boolean, attribute: "range" },
      showDots: { type: Boolean, attribute: "show-dots" },
    };
  }

  #init = false;
  constructor() {
    super();
    this.cal = null;
    this.temporary = false;
    this.unstyled = false;
    this.range = false;
    this.showDots = false;
  }

  firstUpdated() {
    firstUpdatedMethod(this);
    if (!this.#init) this.initCalendar();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    cleanCalendarStyles();
  }

  initCalendar(options = {}) {
    this.#init = true;
    const EOxTimeControl = /** @type {EOxTimeControl} */ (
      this.closest("eox-timecontrol")
    );
    setTimeout(() => {
      const calendarInput =
        /** @type {HTMLElement} */ (
          EOxTimeControl.querySelector(
            "eox-timecontrol-date",
          )?.renderRoot?.querySelector("span")
        ) || /** @type {HTMLElement} */ (this.renderRoot.querySelector("#cal"));
      if (calendarInput) {
        if (!this.temporary) calendarInput.innerHTML = "";
        this.cal = new Calendar(calendarInput || "#cal", {
          selectedTheme: "light",
          dateMin: options.min,
          dateMax: options.max,
          displayDateMin: options.min,
          displayDateMax: options.max,
          displayDatesOutside: false,
          type: this.range ? "multiple" : "default",
          selectionDatesMode: this.range ? "multiple-ranged" : "single",
          ...(options.selectedDate
            ? { selectedDates: [options.selectedDate] }
            : {}),
          enableEdgeDatesOnly: false,
          inputMode: this.temporary ? true : false,
          //@ts-expect-error error from vanilla-calendar-pro types
          positionToInput: ["top", "left"],
          selectedWeekends: [],
          onClickDate: (self) => {
            if (self.context.selectedDates[0])
              EOxTimeControl.dateChange(
                self.context.selectedDates[0],
                EOxTimeControl,
              );
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
        ${!this.unstyled && styleEOX}
        ${vanillaCalendarCSS}
      </style>
      <div id="cal" class="timecontrol-calendar-input" readonly />
    `;
  }
}
customElements.define("eox-timecontrol-picker", EOxTimeControlPicker);
