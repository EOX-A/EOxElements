import { LitElement, html } from "lit";
import inputStyle from "../../../../../utils/styles/dist/input.style.js";
import _debounce from "lodash.debounce";
import { when } from "lit/directives/when.js";
import { resetTextMethod, textInputHandlerMethod } from "../../methods/filters";

export class EOxItemFilterText extends LitElement {
  static get properties() {
    return {
      filterObject: { attribute: false, type: Object },
      tabIndex: { attribute: false, type: Number },
      unstyled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.filterObject = {};
    this.unstyled = false;
    this.tabIndex = 0;
  }

  #inputHandler = () => {
    textInputHandlerMethod(this);
  };

  reset() {
    resetTextMethod(this);
  }

  debouncedInputHandler = _debounce(this.#inputHandler, 500, {
    leading: true,
  });

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
      `
    );
  }
}

customElements.define("itemfilter-text", EOxItemFilterText);