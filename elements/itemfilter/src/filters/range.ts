import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import { customElement, property } from "lit/decorators.js";
import dayjs from "dayjs";
import _debounce from "lodash.debounce";
import { resetFilter } from "../reset";

@customElement("eox-itemfilter-range")
export class EOxItemFilterRange extends LitElement {
  @property()
  filterObject: RangeFilterObject;

  inputHandler = (evt: CustomEvent) => {
    const [min, max] = evt.detail.values;
    if (
      min !== this.filterObject.state.min ||
      max != this.filterObject.state.max
    ) {
      [this.filterObject.state.min, this.filterObject.state.max] = [min, max];
      this.filterObject.dirty = true;
    }
    if (this.filterObject.dirty) {
      this.filterObject.stringifiedState = `${dayjs(min)} - ${dayjs(max)}`;
    }
    this.dispatchEvent(new CustomEvent("filter"));
    this.requestUpdate();
  };

  debouncedInputHandler = _debounce(this.inputHandler, 0, {
    leading: true,
  });

  public reset() {
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
        <div class="range-before">
          ${this.filterObject.format === "date"
            ? dayjs.unix(<number>this.filterObject.state.min)
            : this.filterObject.state.min}
        </div>
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min}"
          value2="${this.filterObject.state.max}"
          step="1"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        <div class="range-after">
          ${this.filterObject.format === "date"
            ? dayjs.unix(<number>this.filterObject.state.max)
            : this.filterObject.state.max}
        </div>
      `,
    );
  }
}
