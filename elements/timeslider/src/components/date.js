import { LitElement, html } from "lit";
export class EOxDate extends LitElement {
  static get properties() {
    return {
      selectedDate: { type: String, attribute: "selected-date" },
      format: { type: String, attribute: "format" },
      navigation: { type: Boolean, attribute: "navigation" },
    };
  }

  constructor() {
    super();
    this.selectedDate = null;
    this.format = null;
    this.navigation = false;
  }

  render() {
    return html`
      <small part="current">
        ${this.format
          ? dayjs(this.controlValues[this._newStepIndex])
              .utc()
              .format(this.displayFormat)
          : this.controlValues[this._newStepIndex]}
      </small>
    `;
  }
}
