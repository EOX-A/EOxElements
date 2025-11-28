import { LitElement, html } from "lit";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { when } from "lit/directives/when.js";
import { style } from "../style.js";
import { styleEOX } from "../style.eox.js";
dayjs.extend(utc);
dayjs.extend(timezone);

export class EOxTimeControlDate extends LitElement {
  static get properties() {
    return {
      selectedDate: { type: String, attribute: "selected-date" },
      format: { type: String, attribute: "format" },
      navigation: { type: Boolean, attribute: "navigation" },
      unstyled: { type: Boolean, attribute: "unstyled" },
    };
  }

  constructor() {
    super();
    this.selectedDate = null;
    this.format = null;
    this.navigation = false;
    this.unstyled = false;
  }

  updateStep(step = 1) {
    const EOxTimeControl = this.closest("eox-timecontrol");
    // @ts-expect-error TODO: Fix typing
    EOxTimeControl.updateStep(step);
  }

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      ${when(this.navigation, () => {
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
      ${when(this.selectedDate, () => {
        return html`
          <small part="current">
            ${this.format
              ? dayjs(this.selectedDate).utc().format(this.format)
              : this.selectedDate}
          </small>
        `;
      })}
      ${when(this.navigation, () => {
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
