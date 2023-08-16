import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import _debounce from "lodash.debounce";

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
    // this.filterObject.state = searchInput.value;
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
    this.filterObject.keys.forEach((key) => {
      this.filterObject.state[key] = undefined;
    });
    delete this.filterObject.dirty;
  }

  // skip shadow root creation
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <input
        type="text"
        placeholder="Type something..."
        data-cy="search"
        part="input-search"
        value="${Object.values(this.filterObject.state)[0]}"
        @input="${this.debouncedInputHandler}"
      />
    `;
  }
}
