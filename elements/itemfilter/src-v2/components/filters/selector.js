import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import Fuse from "fuse.js";
import { styleEOX } from "../../style.eox.js";
import { when } from "lit/directives/when.js";
import _debounce from "lodash.debounce";
import { resetFilter } from "../../helpers/index.js";
import checkboxStyle from "../../../../../utils/styles/dist/checkbox.style.js";
import radioStyle from "../../../../../utils/styles/dist/radio.style.js";

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
    if (changedProperties.has("suggestions")) {
      this.fuse = new Fuse(this.suggestions, { threshold: 0.3 });
      this.updateSuggestions();
    }
    if (changedProperties.has("query")) {
      this.updateSuggestions();
    }
  }

  updateSuggestions() {
    if (this.query) {
      this.filteredSuggestions = this.fuse
        .search(this.query)
        .map((result) => result.item);
    } else {
      this.filteredSuggestions = this.suggestions;
    }
    this.highlightedIndex = -1;
  }

  handleInput(event) {
    this.query = event.target.value;
    this.showSuggestions = true;
  }

  handleKeyDown(event) {
    switch (event.key) {
      case "ArrowDown":
        this.highlightedIndex = Math.min(
          this.highlightedIndex + 1,
          this.filteredSuggestions.length - 1
        );
        break;
      case "ArrowUp":
        this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
        break;
      case "Enter":
        if (this.highlightedIndex >= 0)
          this.toggleItem(this.filteredSuggestions[this.highlightedIndex]);
        break;
      case "Escape":
        this.showSuggestions = false;
        break;
    }
  }

  updateFilterList(selectedItems) {
    Object.keys(this.filterObject.state).forEach((k) => {
      this.filterObject.state[k] = selectedItems.map((i) => i).includes(k);
    });
    this.filterObject.stringifiedState =
      Object.keys(this.filterObject.state)
        .filter((k) => this.filterObject.state[k])
        .join(", ") || "";

    this.filterObject.dirty = Boolean(
      this.filterObject.stringifiedState.length > 0
    );

    this.dispatchEvent(new CustomEvent("filter"));
    this.requestUpdate();
  }

  toggleItem(item) {
    const itemIndex = this.selectedItems.indexOf(item);
    if (itemIndex >= 0) {
      this.selectedItems = this.selectedItems.filter((_, i) => i !== itemIndex);
    } else {
      if (this.type === "multiselect") {
        this.selectedItems = [...this.selectedItems, item];
      } else {
        this.selectedItems = [item];
        this.showSuggestions = false;
      }
    }
    this.query = "";
    this.updateSuggestions();
    this.updateFilterList(this.selectedItems);
  }

  removeItem(index) {
    this.selectedItems =
      index === -1 ? [] : this.selectedItems.filter((_, i) => i !== index);
    this.updateSuggestions();
    this.updateFilterList(this.selectedItems);
  }

  debouncedInputHandler = _debounce(this.toggleItem, 500, {
    leading: true,
  });

  reset() {
    if (this.filterObject.inline) this.removeItem(-1);
    else {
      const type = this.type === "select" ? "radio" : "checkbox";
      const selector = `input[type='${type}']`;
      this.renderRoot.querySelectorAll(selector).forEach((f) => {
        if (f) f.checked = false;
      });
    }

    resetFilter(this.filterObject);
    this.requestUpdate();
  }

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
    return html`
      <div class="autocomplete-container">
        <div class="autocomplete-container-wrapper">
          <div class="selected-items">
            <span class="chip-container">
              ${this.selectedItems.map(
                (item, index) => html`
                  <span class="chip">
                    <span class="chip-title">${item}</span>
                    <span
                      @click=${() => this.removeItem(index)}
                      class="chip-close"
                      >x</span
                    >
                  </span>
                `
              )}
            </span>
          </div>
          <input
            class="autocomplete-input"
            type="text"
            .value=${this.query}
            placeholder="${this.filterObject.placeholder || ""}"
            @input=${this.handleInput}
            @keydown=${this.handleKeyDown}
            @blur=${() => {
              this.showSuggestions = false;
            }}
            @focus=${() => {
              this.showSuggestions = true;
            }}
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
