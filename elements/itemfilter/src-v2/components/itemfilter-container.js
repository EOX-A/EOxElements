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
import { getChipItems, isFiltersDirty } from "../helpers";
import { when } from "lit/directives/when.js";

/**
 * EOxItemFilterContainer is a custom web component that provides a container for item filters.
 *
 * @module EOxItemFilterContainer
 * @extends LitElement
 * @property {Object} filterProperties - The properties for the filter.
 * @property {Boolean} inlineMode - Flag to determine if the component should operate in inline mode.
 * @property {Boolean} unstyled - Flag to determine if default styles should be applied.
 * @property {Object} filters - The filters applied in the container.
 */
export class EOxItemFilterContainer extends LitElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      filterProperties: { attribute: false, type: Object },
      inlineMode: { attribute: "inline-mode", type: Boolean },
      unstyled: { type: Boolean },
      filters: { state: true, type: Object },
    };
  }

  constructor() {
    super();

    /**
     * @type Object
     */
    this.filterProperties = {};

    /**
     * @type Boolean
     */
    this.unstyled = false;

    /**
     * @type Boolean
     */
    this.inlineMode = false;

    /**
     * @type Boolean
     */
    this.showDropdown = false;

    /**
     * @type Object
     */
    this.filters = {};

    /**
     * @type Function
     */
    this._handleClickOutside = this.#handleClickOutside.bind(this);

    /**
     * @type Function
     */
    this._handleKeyDown = this.#handleKeyDown.bind(this);
  }

  /**
   * Lifecycle method called when the element is connected to the DOM.
   * Adds event listeners if inline mode is enabled.
   */
  connectedCallback() {
    super.connectedCallback();
    if (this.inlineMode) {
      document.addEventListener("click", this._handleClickOutside);
      document.addEventListener("focusout", this._handleClickOutside);
      document.addEventListener("keydown", this._handleKeyDown);
    }
  }

  /**
   * Lifecycle method called when the element is disconnected from the DOM.
   * Removes event listeners if inline mode is enabled.
   */
  disconnectedCallback() {
    if (this.inlineMode) {
      document.removeEventListener("click", this._handleClickOutside);
      document.removeEventListener("focusout", this._handleClickOutside);
      document.removeEventListener("keydown", this._handleKeyDown);
    }
    super.disconnectedCallback();
  }

  /**
   * Handles click events outside the component to close the dropdown.
   *
   * @param {Event} event - The click event.
   * @private
   */
  #handleClickOutside(event) {
    handleClickOutsideMethod(event, this);
  }

  /**
   * Handles keydown events for the component.
   *
   * @param {Event} event - The keydown event.
   * @private
   */
  #handleKeyDown(event) {
    handleKeyDownMethod(event, this);
  }

  /**
   * Toggles the dropdown visibility.
   *
   * @param {Event} event - The toggle event.
   * @private
   */
  #handleToggleDropdown(event) {
    handleToggleDropdownMethod(event, this);
  }

  /**
   * Shows the dropdown on input focus.
   *
   * @private
   */
  #handleShowDropdownOnFocus() {
    handleShowDropdownOnFocusMethod(this);
  }

  /**
   * Handles click events on the form to prevent closing the dropdown.
   *
   * @param {Event} event - The click event.
   * @private
   */
  #handleFormClick(event) {
    handleFormClickMethod(event, this);
  }

  /**
   * Resets the filter using the resetFilterMethod.
   *
   * @param {Event} event - The reset event.
   * @private
   */
  #resetFilter(event) {
    resetFilterMethod(event, this);
  }

  /**
   * Searches the filter using the searchFilterMethod.
   *
   * @param {Event} event - The search event.
   * @private
   */
  #searchFilter(event) {
    searchFilterMethod(event, this);
  }

  updateInline() {
    if (this.inlineMode) this.requestUpdate();
  }

  /**
   * Renders the HTML template for the component.
   */
  render() {
    return html`
      <style>
        ${!this.unstyled && styleEOX} .inline-content {
          display: ${this.showDropdown ? "block" : "none"};
        }
      </style>
      ${this.inlineMode
        ? html`
            <div
              class="inline-container-wrapper"
              @click="${this.#handleToggleDropdown}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips-v2
                      .items=${getChipItems(this.filters)}
                      .controller=${{
                        remove: (event) => this.#resetFilter(event),
                      }}
                    >
                    </eox-itemfilter-chips-v2>
                  </div>

                  ${when(
                    isFiltersDirty(this.filters),
                    () => html`
                      <span
                        class="chip-close"
                        @click=${() =>
                          this.dispatchEvent(new CustomEvent("reset"))}
                        >x</span
                      >
                    `
                  )}
                </div>
                <div
                  class="input-container ${isFiltersDirty(this.filters)
                    ? "dirty-filter-input"
                    : ""}"
                >
                  <input
                    autocomplete="off"
                    id="itemfilter-input-search"
                    type="text"
                    @click="${this.#handleToggleDropdown}"
                    @focus="${this.#handleShowDropdownOnFocus}"
                    @input="${this.#searchFilter}"
                    placeholder="Search and add filter"
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
