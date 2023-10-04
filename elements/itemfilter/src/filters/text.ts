import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import { customElement, property } from "lit/decorators.js";
import _debounce from "lodash.debounce";
import { resetFilter } from "../reset";

@customElement("eox-itemfilter-text")
export class EOxItemFilterText extends LitElement {
  @property()
  filterObject: TextFilterObject;

  inputHandler = () => {
    // Can't use evt.target.value here since it might
    // be undefined when debounced
    const searchInput = <HTMLInputElement>(
      this.renderRoot.querySelector("input[type='text']")
    );
    this.filterObject.keys.forEach((key) => {
      this.filterObject.state[key] = searchInput.value;
    });
    this.filterObject.dirty = true;
    this.filterObject.stringifiedState = searchInput.value;
    this.dispatchEvent(new CustomEvent("filter"));
  };

  debouncedInputHandler = _debounce(this.inputHandler, 500, {
    leading: true,
  });

  public reset() {
    const searchInput = <HTMLInputElement>(
      this.renderRoot.querySelector("input[type='text']")
    );
    searchInput.value = "";
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
        <input
          type="text"
          placeholder="Type something..."
          data-cy="search"
          part="input-search"
          value="${Object.values(this.filterObject.state)[0]}"
          @input="${this.debouncedInputHandler}"
        />
      `
    );
  }
}
