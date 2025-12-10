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

export class EOxTimeControlDate extends LitElement {
  static get properties() {
    return {
      format: { type: String, attribute: "format" },
      navigation: { type: Boolean, attribute: "navigation" },
      unstyled: { type: Boolean, attribute: "unstyled" },
    };
  }

  #isInput = false;
  #selectedDateRange = null;
  constructor() {
    super();
    this.format = TIME_CONTROL_DATE_FORMAT;
    this.navigation = false;
    this.unstyled = false;
  }

  getEOxTimeControl() {
    return /** @type {import("../main.js").EOxTimeControl} */ (
      this.closest("eox-timecontrol")
    );
  }

  updateStep(step = 1) {
    const EOxTimeControl = this.getEOxTimeControl();
    const itemValues = Object.keys(
      groupBy(EOxTimeControl.items.get(), "date"),
    ).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    const index = findIndex(itemValues, (date) => {
      return (
        date ===
        dayjs(EOxTimeControl.selectedDateRange[0]).format(
          TIME_CONTROL_DATE_FORMAT,
        )
      );
    });
    let newIndex = index + step;
    if (newIndex > itemValues.length - 1) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = itemValues.length - 1;
    }

    const nextDate = itemValues[newIndex];
    const nextDateRange = [
      dayjs(nextDate).startOf("day").utc().format(),
      dayjs(nextDate).endOf("day").utc().format(),
    ];
    EOxTimeControl.dateChange(nextDateRange, EOxTimeControl);
  }

  setDateRange(dateRange) {
    this.#selectedDateRange = dateRange;
    this.requestUpdate();
  }

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

  #getFormattedDate(selectedDateRange, format) {
    const start = dayjs(selectedDateRange[0]);
    const end = dayjs(selectedDateRange[1]);
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
