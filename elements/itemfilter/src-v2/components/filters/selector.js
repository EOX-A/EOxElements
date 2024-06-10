import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import Fuse from "fuse.js";
import { styleEOX } from "../../style.eox.js";
import { when } from "lit/directives/when.js";
import _debounce from "lodash.debounce";
import checkboxStyle from "../../../../../utils/styles/dist/checkbox.style.js";
import radioStyle from "../../../../../utils/styles/dist/radio.style.js";
import {
  resetSelectorMethod,
  removeItemSelectorMethod,
  toggleItemSelectorMethod,
  handleInputSelectorMethod,
  handleKeyDownSelectorMethod,
  updatedSelectorMethod,
} from "../../methods/filters";

export class EOxSelector extends LitElement {
  static properties = {
    filterObject: { attribute: false, type: Object },
    suggestions: { attribute: false, type: Array },
    selectedItems: { state: true, type: Array },
    query: { state: true, type: String },
    showSuggestions: { state: true, type: Boolean },
    highlightedIndex: { state: true, type: Number },
    filteredSuggestions: { state: true, type: Array },
    type: { attribute: true, type: String },
    unstyled: { type: Boolean },
  };

  constructor() {
    super();
    this.filterObject = {};
    this.suggestions = [];
    this.selectedItems = [];
    this.query = "";
    this.showSuggestions = false;
    this.highlightedIndex = -1;
    this.filteredSuggestions = [];
    this.type = "select"; // Default type
    this.fuse = new Fuse(this.suggestions, { threshold: 0.3 });
    this.unstyled = false;
  }

  updated(changedProperties) {
    updatedSelectorMethod(changedProperties, this);
  }

  #handleInput(event) {
    handleInputSelectorMethod(event, this);
  }

  #handleKeyDown(event) {
    handleKeyDownSelectorMethod(event, this);
  }

  #toggleItem(item) {
    toggleItemSelectorMethod(item, this);
  }

  #removeItem(index) {
    removeItemSelectorMethod(index, this);
  }

  reset() {
    resetSelectorMethod(this);
  }

  debouncedInputHandler = _debounce(this.#toggleItem, 500, {
    leading: true,
  });

  render() {
    return html`
      <style>
        ${!this.unstyled && styleEOX}
        ${!this.unstyled && checkboxStyle}
        ${!this.unstyled && radioStyle}
      </style>
      ${this.filterObject.inline
        ? this.renderAutocomplete()
        : this.renderSelect()}
    `;
  }

  renderAutocomplete() {
    const chipItems = this.selectedItems.map((item) => ({
      title: item,
      key: item,
    }));
    return html`
      <div class="autocomplete-container">
        <div class="autocomplete-container-wrapper">
          <div class="selected-items">
            <eox-itemfilter-chips-v2
              .items=${chipItems}
              .controller=${{
                remove: (event, index) => this.#removeItem(index),
              }}
            >
            </eox-itemfilter-chips-v2>
          </div>
          <input
            class="autocomplete-input"
            type="text"
            .value=${this.query}
            placeholder="${this.filterObject.placeholder || ""}"
            @input=${this.#handleInput}
            @keydown=${this.#handleKeyDown}
            @blur=${() => (this.showSuggestions = false)}
            @focus=${() => (this.showSuggestions = true)}
          />
        </div>
        ${when(
          this.showSuggestions,
          () => html`
            <div class="suggestions-list">
              ${this.filteredSuggestions.map(
                (suggestion, index) =>
                  html`
                    <div
                      data-identifier="${suggestion.toString().toLowerCase()}"
                      data-title="${suggestion}"
                      class=${classMap({
                        "suggestion-item": true,
                        highlighted: index === this.highlightedIndex,
                        selected: this.selectedItems.includes(suggestion),
                      })}
                      @mousedown=${() => this.debouncedInputHandler(suggestion)}
                    >
                      ${suggestion}
                    </div>
                  `
              )}
            </div>
          `
        )}
      </div>
    `;
  }

  renderSelect() {
    const type = this.type.includes("multi") ? "checkbox" : "radio";
    return html`
      <div class="select-container">
        <ul class="${this.type}">
          ${this.suggestions.map(
            (suggestion) => html`
              <li
                data-identifier="${suggestion.toString().toLowerCase()}"
                data-title="${suggestion}"
              >
                <label>
                  <input
                    type="${type}"
                    name="select"
                    .checked=${this.selectedItems.includes(suggestion)}
                    @change=${() => this.debouncedInputHandler(suggestion)}
                    tabindex=""
                  />
                  <span class="title">${suggestion}</span>
                </label>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}

customElements.define("eox-selector", EOxSelector);
