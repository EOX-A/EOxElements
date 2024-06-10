import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import _debounce from "lodash.debounce";
import "toolcool-range-slider";
import {
  rangeInputHandlerMethod,
  rangeLabelMethod,
  resetRangeMethod,
} from "../../methods/filters/index.js";

export class EOxItemFilterRange extends LitElement {
  static properties = {
    filterObject: { attribute: false, type: Object },
  };

  constructor() {
    super();
    this.filterObject = {};
    this.inputHandler = this.#inputHandler.bind(this);
    this.debouncedInputHandler = _debounce(this.inputHandler, 0, {
      leading: true,
    });
  }

  #inputHandler(evt) {
    rangeInputHandlerMethod(evt, this);
  }

  #label(val, pos) {
    return rangeLabelMethod(val, pos, this);
  }

  reset() {
    resetRangeMethod(this);
  }
  createRenderRoot() {
    return this;
  }

  render() {
    return when(
      this.filterObject,
      () => html`
        ${this.#label("min", "before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min}"
          value2="${this.filterObject.state.max}"
          step="1"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${this.#label("max", "after")}
      `
    );
  }
}

customElements.define("itemfilter-range", EOxItemFilterRange);
