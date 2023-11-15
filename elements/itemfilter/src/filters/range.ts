import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import dayjs from "dayjs";
import _debounce from "lodash.debounce";

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
    this.dispatchEvent(new CustomEvent("filter"));
    this.requestUpdate();
  };

  debouncedInputHandler = _debounce(this.inputHandler, 0, {
    leading: true,
  });

  public reset() {
    // @ts-ignore
    this.filterObject.state.min = this.filterObject.min;
    // @ts-ignore
    this.filterObject.state.max = this.filterObject.max;
    delete this.filterObject.dirty;
    this.requestUpdate();
  }

  // skip shadow root creation
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="range-before">
        ${this.filterObject.format === "date"
          ? // @ts-ignore
            dayjs.unix(this.filterObject.state.min)
          : this.filterObject.state.min}
      </div>
      <tc-range-slider
        min="${this.filterObject.min}"
        max="${this.filterObject.max}"
        value1="${this.filterObject.state.min}"
        value2="${this.filterObject.state.max}"
        step="1"
        @change="${this.debouncedInputHandler}"
      ></tc-range-slider>
      <div class="range-after">
        ${this.filterObject.format === "date"
          ? // @ts-ignore
            dayjs.unix(this.filterObject.state.max)
          : this.filterObject.state.max}
      </div>
    `;
  }
}
