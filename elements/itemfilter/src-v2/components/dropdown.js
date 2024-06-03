import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import Fuse from "fuse.js";
import { styleEOX } from "../style.eox.js";
import { when } from "lit/directives/when.js";

class DropdownSelector extends LitElement {
  static properties = {
    suggestions: { attribute: false, type: Array },
    selectedItems: { state: true, type: Array },
    multiple: { attribute: false, type: Boolean },
    query: { state: true, type: String },
    showSuggestions: { state: true, type: Boolean },
    highlightedIndex: { state: true, type: Number },
    filteredSuggestions: { state: true, type: Array },
  };

  constructor() {
    super();
    this.suggestions = [];
    this.selectedItems = [];
    this.multiple = false;
    this.query = "";
    this.showSuggestions = false;
    this.highlightedIndex = -1;
    this.filteredSuggestions = [];
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

  toggleItem(item) {
    const itemIndex = this.selectedItems.indexOf(item);
    if (itemIndex >= 0) {
      this.selectedItems = this.selectedItems.filter((_, i) => i !== itemIndex);
    } else {
      if (this.multiple) {
        this.selectedItems = [...this.selectedItems, item];
      } else {
        this.selectedItems = [item];
        this.showSuggestions = false;
      }
    }
    this.query = "";
    this.updateSuggestions();
    this.dispatchEvent(
      new CustomEvent("item-selected", { detail: this.selectedItems })
    );
  }

  removeItem(index) {
    this.selectedItems = this.selectedItems.filter((_, i) => i !== index);
    this.updateSuggestions();
    this.dispatchEvent(
      new CustomEvent("item-selected", { detail: this.selectedItems })
    );
  }

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
          padding: 4px 0px !important;
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
        }
        .suggestion-item {
          padding: 8px;
          cursor: pointer;
          white-space: nowrap;
          font-size: 0.85rem;
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
      </style>
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
                      class=${classMap({
                        "suggestion-item": true,
                        highlighted: index === this.highlightedIndex,
                        selected: this.selectedItems.includes(suggestion),
                      })}
                      @mousedown=${() => this.toggleItem(suggestion)}
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
}

customElements.define("dropdown-selector", DropdownSelector);
