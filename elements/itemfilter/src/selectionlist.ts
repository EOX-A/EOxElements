import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { checkbox } from "../../../utils/styles/checkbox";
import { button } from "../../../utils/styles/button";
import { style } from "./style";
import { styleEOX } from "./style.eox";

@customElement("eox-selectionlist")
export class EOxSelectionlist extends LitElement {
  @property()
  filter = "";

  @property()
  idProperty = "id";

  @property()
  items = [];

  @property()
  labelProperty = "label";

  @property({ type: Boolean })
  multiple = false;

  @property()
  selectedItems = [];

  @property({ type: Boolean })
  unstyled = false;

  @state()
  _currentHighlight = null;

  _handleKeyboard(key) {
    const currentlyHighlighted =
      this.renderRoot.querySelector("li.highlighted");
    if (key === "Escape") {
      if (this._currentHighlight) {
        this._currentHighlight = null;
      }
      return;
    }
    if (key === "Enter") {
      if (currentlyHighlighted) {
        const currentItem = this.items.find(
          (f) => f[this.idProperty] === currentlyHighlighted.dataset.identifier
        );
        this._handleSelect(currentItem);
        this.requestUpdate();
      }
      return;
    }
    const listItems = this.renderRoot.querySelectorAll("li");
    let currentIndex = -1;
    if (currentlyHighlighted) {
      delete currentlyHighlighted.dataset.highlighted;
      currentIndex = Array.from(listItems).indexOf(currentlyHighlighted);
    }
    if (key === "ArrowDown") {
      currentIndex++;
      if (currentIndex > listItems.length - 1) {
        currentIndex = 0;
      }
    }
    if (key === "ArrowUp") {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = listItems.length - 1;
      }
    }
    const currentListItem = Array.from(listItems)[currentIndex];
    if (currentListItem) {
      this._currentHighlight = this.items.find(
        (f) => f[this.idProperty] === currentListItem.dataset.identifier
      );
      this.renderRoot.querySelector("input").value =
        currentListItem.dataset.label;
    }
    this.dispatchEvent(
      new CustomEvent("items-highlighted", { detail: [this._currentHighlight] })
    );
  }

  _handleSelect(item) {
    if (item) {
      if (this.multiple) {
        // In multiple mode, selecting the same item again removes it from the selectedItem list
        const selected = this.selectedItems.find(
          (i) => i[this.idProperty] === item[this.idProperty]
        );
        if (selected) {
          this.selectedItems.splice(this.selectedItems.indexOf(selected), 1);
        } else {
          this.selectedItems.push(item);
        }
      } else {
        this.selectedItems = [item];
      }
    } else {
      this.selectedItems = [];
      this._currentHighlight = null;
    }
    this._dispatchEvent();
  }

  _dispatchEvent() {
    this.dispatchEvent(
      new CustomEvent("items-selected", { detail: this.selectedItems })
    );
  }

  firstUpdated() {
    this.getRootNode().addEventListener("keydown", (event) => {
      if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(event.code)) {
        this._handleKeyboard(event.code);
      }
    });
  }

  updated(changedProperties) {
    if (changedProperties.has("filter")) {
      if (this.filter.length > 0) {
        setTimeout(() => {
          const firstItem = this.renderRoot.querySelectorAll("li")[0];
          if (firstItem) {
            this._currentHighlight = this.items.find(
              (f) => f[this.idProperty] === firstItem.dataset.identifier
            );
          }
        });
      } else {
        this._currentHighlight = null;
      }
    }
  }

  render() {
    return html`
      <style>
        ${style}
        :host {
          height: auto;
        }
        ul {
          width: 100%;
        }
        li.highlighted {
          background: lightgrey;
        }
        ${!this.unstyled && styleEOX}
      </style>
      <ul>
        ${map(
          this.items.filter((item) =>
            this.filter
              ? item[this.labelProperty]
                  .toLowerCase()
                  .includes(this.filter.toLowerCase())
              : true
          ),
          (item, index) => html`
            <li
              class=${this._currentHighlight === item ? "highlighted" : nothing}
              data-identifier=${item[this.idProperty]}
              data-label=${item[this.labelProperty]}
              @mouseenter=${() => {
                this._currentHighlight = item;
              }}
              @mouseleave=${() => {
                this._currentHighlight = null;
              }}
            >
              <label>
                <input
                  type="${this.multiple ? "checkbox" : "radio"}"
                  .checked=${this.selectedItems.find(
                    (i) => i[this.idProperty] === item[this.idProperty]
                  ) || nothing}
                  @change=${() => this._handleSelect(item)}
                />
                <span class="title">${item[this.labelProperty]}</span>
              </label>
            </li>
          `
        )}
      </ul>
    `;
  }
}
