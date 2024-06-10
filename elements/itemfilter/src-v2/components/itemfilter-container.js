import { LitElement, html } from "lit";
import { styleEOX } from "../style.eox";
import {
  searchFilterMethod,
  resetFilterMethod,
  handleFormClickMethod,
  handleShowDropdownOnFocusMethod,
  handleToggleDropdownMethod,
  handleKeyDownMethod,
  handleClickOutsideMethod,
} from "../methods/container";
import { getChipItems } from "../helpers";

export class EOxItemFilterContainer extends LitElement {
  static get properties() {
    return {
      filterProperties: { attribute: false, type: Object },
      inlineMode: { attribute: "inline-mode", type: Boolean },
      unstyled: { type: Boolean },
      inlineContentElement: { state: true, type: Boolean },
      filters: { state: true, type: Object },
    };
  }

  constructor() {
    super();
    this.filterProperties = {};
    this.unstyled = false;
    this.inlineMode = false;
    this.inlineContentElement = false;
    this.showDropdown = false;
    this.filters = {};
    this._handleClickOutside = this.#handleClickOutside.bind(this);
    this._handleKeyDown = this.#handleKeyDown.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.inlineMode) {
      document.addEventListener("click", this._handleClickOutside);
      document.addEventListener("focusout", this._handleClickOutside);
      document.addEventListener("keydown", this._handleKeyDown);
    }
  }

  disconnectedCallback() {
    if (this.inlineMode) {
      document.removeEventListener("click", this._handleClickOutside);
      document.removeEventListener("focusout", this._handleClickOutside);
      document.removeEventListener("keydown", this._handleKeyDown);
    }
    super.disconnectedCallback();
  }

  #handleClickOutside(event) {
    handleClickOutsideMethod(event, this);
  }

  #handleKeyDown(event) {
    handleKeyDownMethod(event, this);
  }

  #handleToggleDropdown(event) {
    handleToggleDropdownMethod(event, this);
  }

  #handleShowDropdownOnFocus() {
    handleShowDropdownOnFocusMethod(this);
  }

  #handleFormClick(event) {
    handleFormClickMethod(event, this);
  }

  #resetFilter(event) {
    resetFilterMethod(event, this);
  }

  #searchFilter(event) {
    searchFilterMethod(event, this);
  }

  render() {
    return html`
      <style>
        ${!this.unstyled && styleEOX} .inline-content {
          display: ${this.showDropdown ? "block" : "none"};
        }
      </style>
      ${this.inlineMode
        ? html`
            <div class="inline-container-wrapper">
              <div class="inline-container" part="container">
                <div>
                  <eox-itemfilter-chips-v2
                    .items=${getChipItems(this.filters)}
                    .controller=${{
                      remove: (event) => this.#resetFilter(event),
                    }}
                  >
                  </eox-itemfilter-chips-v2>
                </div>
                <div class="input-container">
                  <input
                    id="itemfilter-input-search"
                    type="text"
                    @click="${this.#handleToggleDropdown}"
                    @focus="${this.#handleShowDropdownOnFocus}"
                    @input="${this.#searchFilter}"
                    placeholder="Click to open form"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div
                class="inline-content ${this.showDropdown ? "" : "hidden"}"
                slot="content"
                @keydown="${this.#handleKeyDown}"
                @click="${this.#handleFormClick}"
                @focus="${this.#handleFormClick}"
              >
                <slot name="section"></slot>
              </div>
            </div>
          `
        : html`<slot name="section"></slot>`}
    `;
  }
}

customElements.define("eox-itemfilter-container", EOxItemFilterContainer);
