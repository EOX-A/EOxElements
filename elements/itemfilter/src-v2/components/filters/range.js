import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import dayjs from "dayjs";
import _debounce from "lodash.debounce";
import "toolcool-range-slider";
import { resetFilter } from "../../helpers/index.js";

export class EOxItemFilterRange extends LitElement {
  static properties = {
    filterObject: { attribute: false, type: Object },
  };

  constructor() {
    super();
    this.filterObject = {};
    this.inputHandler = this.inputHandler.bind(this);
    this.debouncedInputHandler = _debounce(this.inputHandler, 0, {
      leading: true,
    });
  }

  inputHandler(evt) {
    const [min, max] = evt.detail.values;

    if (
      min !== this.filterObject.state.min ||
      max !== this.filterObject.state.max
    ) {
      [this.filterObject.state.min, this.filterObject.state.max] = [min, max];
      this.filterObject.dirty = true;
    }

    if (this.filterObject.dirty)
      this.filterObject.stringifiedState = `${dayjs(min)} - ${dayjs(max)}`;

    this.dispatchEvent(new CustomEvent("filter"));
    this.requestUpdate();
  }

  reset() {
    resetFilter(this.filterObject);
    this.requestUpdate();
  }

  // skip shadow root creation
  createRenderRoot() {
    return this;
  }

  render() {
    return when(
      this.filterObject,
      () => html`
        ${this.label("min", "before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min}"
          value2="${this.filterObject.state.max}"
          step="1"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${this.label("max", "after")}
      `
    );
  }

  label(val, pos) {
    const isDate = Boolean(this.filterObject.format === "date");
    const filteredVal = this.filterObject.state[val];
    const label = isDate ? dayjs.unix(filteredVal) : filteredVal;
    return html`<div class="range-${pos}">${label}</div>`;
  }
}

customElements.define("itemfilter-range", EOxItemFilterRange);
