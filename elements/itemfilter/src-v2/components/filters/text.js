import { LitElement, html } from "lit";
import inputStyle from "../../../../../utils/styles/dist/input.style.js";
import _debounce from "lodash.debounce";
import { when } from "lit/directives/when.js";

export class EOxItemFilterText extends LitElement {
  static get properties() {
    return {
      filterObject: { attribute: false, type: Object },
      tabIndex: { attribute: false, type: Number },
      unstyled: { type: Boolean },
    };
  }

  inputHandler = () => {
    const searchInput = this.renderRoot.querySelector("input[type='text']");
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

  constructor() {
    super();
    this.filterObject = {};
    this.unstyled = false;
    this.tabIndex = 0;
  }

  render() {
    return when(
      this.filterObject,
      () => html`
        <style>
          ${!this.unstyled && inputStyle}
        </style>
        <input
          type="text"
          placeholder=${this.filterObject.placeholder}
          data-cy="search"
          part="input-search"
          value="${Object.values(this.filterObject.state)[0]}"
          tabindex=${this.tabIndex}
          @input="${this.debouncedInputHandler}"
          @click=${(evt) => evt.stopPropagation()}
        />
      `,
    );
  }
}

customElements.define("itemfilter-text", EOxItemFilterText);
