import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import Fuse from "fuse.js";
import { styleEOX } from "../../style.eox.js";
import { when } from "lit/directives/when.js";
import _debounce from "lodash.debounce";

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
    this.filterObject.stringifiedState = Object.keys(this.filterObject.state)
      .filter((k) => this.filterObject.state[k])
      .join(", ");
    if (this.filterObject.stringifiedState?.length > 0) {
      this.filterObject.dirty = true;
    }

    this.dispatchEvent(new CustomEvent("filter"));
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
    this.selectedItems = this.selectedItems.filter((_, i) => i !== index);
    this.updateSuggestions();
    this.updateFilterList(this.selectedItems);
  }

  debouncedInputHandler = _debounce(this.toggleItem, 500, {
    leading: true,
  });

  render() {
    return html`
      <style>
        ${styleEOX} .autocomplete-container {
          position: relative;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #00417066;
          border-radius: 4px;
          justify-content: space-between;
          cursor: text;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .autocomplete-container:hover {
          border: 1px solid #004170;
        }
        .autocomplete-container-wrapper {
          padding: 4px;
          position: relative;
          display: flex;
          align-items: center;
          flex: 1;
          overflow-x: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .autocomplete-container-wrapper::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
        .autocomplete-input {
          flex: 1;
          border: none !important;
          outline: none;
          box-sizing: border-box;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          padding: 3px 0px !important;
          min-width: 150px;
          border-radius: 4px;
        }
        .suggestions-list {
          position: absolute;
          top: 110%;
          left: 0;
          right: 0;
          z-index: 1000;
          background: #fff;
          max-height: 200px;
          overflow-y: auto;
          box-sizing: border-box;
          border-radius: 4px;
          border: 1px solid #00417036;
          display: contents;
        }
        .suggestion-item {
          padding: 8px;
          cursor: pointer;
          white-space: nowrap;
          font-size: 0.85rem;
          text-transform: capitalize;
        }
        .suggestion-item.selected {
          background-color: #00417022;
          font-weight: 500;
        }
        .suggestion-item.highlighted,
        .suggestion-item:hover {
          background-color: #00417042;
        }
        .selected-items {
          display: flex;
          flex-wrap: nowrap;
          gap: 4px;
        }
        .selected-item {
          background: #00417022;
          padding: 4px 8px;
          border-radius: 4px;
          display: flex;
          align-items: center;
        }
        .selected-item span {
          margin-right: 8px;
        }
        .selected-item button {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
        }
        .multiselect-container,
        .select-container {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .multiselect-container label,
        .select-container label {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .multiselect-container input,
        .select-container input {
          margin-right: 8px;
        }
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
                      data-identifier="${suggestion.toLowerCase()}"
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
                data-identifier="${suggestion.toLowerCase()}"
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
