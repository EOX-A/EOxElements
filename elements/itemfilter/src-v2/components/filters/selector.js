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

/**
 * EOxSelector is a custom web component that provides a flexible selector interface for filtering items.
 * It supports both autocomplete and select modes and integrates with external methods for handling input,
 * key events, and selection updates.
 *
 * @module EOxSelector
 * @extends LitElement
 * @property {Object} filterObject - The filter object containing state and placeholder.
 * @property {Array} suggestions - The list of suggestions for the selector.
 * @property {Array} selectedItems - The list of currently selected items.
 * @property {String} query - The current input query for autocomplete.
 * @property {Boolean} showSuggestions - Flag to control the display of suggestions in autocomplete mode.
 * @property {Number} highlightedIndex - The index of the currently highlighted suggestion.
 * @property {Array} filteredSuggestions - The list of suggestions filtered based on the query.
 * @property {String} type - The type of selector ("select", "multi-select", etc.).
 * @property {Boolean} unstyled - Flag to determine if default styles should be applied.
 * @property {Number} tabIndex - The tab index for the input elements.
 */
export class EOxSelector extends LitElement {
  // Define properties with defaults and types
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
    tabIndex: { attribute: false, type: Number },
  };

  constructor() {
    super();

    /**
     * @type Object
     */
    this.filterObject = {};

    /**
     * @type Array
     */
    this.suggestions = [];

    /**
     * @type Array
     */
    this.selectedItems = [];

    /**
     * @type String
     */
    this.query = "";

    /**
     * @type Boolean
     */
    this.showSuggestions = false;

    /**
     * @type Number
     */
    this.highlightedIndex = -1;

    /**
     * @type Array
     */
    this.filteredSuggestions = [];

    /**
     * @type String
     */
    this.type = "select";

    /**
     * @type Object
     */
    this.fuse = new Fuse(this.suggestions, { threshold: 0.3 });

    /**
     * @type Boolean
     */
    this.unstyled = false;

    /**
     * @type Number
     */
    this.tabIndex = 0;
  }

  /**
   * Called when the element is updated. Triggers the updatedSelectorMethod.
   *
   * @param {Map} changedProperties - The properties that have changed.
   */
  updated(changedProperties) {
    updatedSelectorMethod(changedProperties, this);
  }

  /**
   * Handles input events on the autocomplete input element.
   *
   * @param {Event} event - The input event.
   * @private
   */
  #handleInput(event) {
    handleInputSelectorMethod(event, this);
  }

  /**
   * Handles keydown events on the autocomplete input element.
   *
   * @param {Event} event - The keydown event.
   * @private
   */
  #handleKeyDown(event) {
    handleKeyDownSelectorMethod(event, this);
  }

  /**
   * Toggles the selection of an item.
   *
   * @param {Object} item - The item to toggle.
   * @private
   */
  #toggleItem(item) {
    toggleItemSelectorMethod(item, this);
  }

  /**
   * Removes an item from the selected items.
   *
   * @param {Number} index - The index of the item to remove.
   * @private
   */
  #removeItem(index) {
    removeItemSelectorMethod(index, this);
  }

  /**
   * Resets the selector using the resetSelectorMethod.
   */
  reset() {
    resetSelectorMethod(this);
  }

  /**
   * Debounced version of the toggleItem method to improve performance by limiting the rate at which the method is called.
   *
   * @function debouncedInputHandler
   * @private
   */
  debouncedInputHandler = _debounce(this.#toggleItem, 500, {
    leading: true,
  });

  /**
   * Renders the HTML template for the component.
   */
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

  /**
   * Renders the autocomplete interface.
   */
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
            tabindex=${this.tabIndex}
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

  /**
   * Renders the select interface.
   */
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
