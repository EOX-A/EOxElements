import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { style } from "./style";
import { styleEOX } from "./style.eox";

@customElement("eox-autocomplete")
export class EOxAutocomplete extends LitElement {
  @property()
  idProperty = "id";

  @property()
  items = [];

  @property()
  labelProperty = "label";

  @property()
  multiple = false;

  @state()
  _currentHighlight = null;

  @state()
  _itemFilter = "";

  @state()
  selectedItem = null;

  _handleKeyboard(key) {
    const currentlyHighlighted = this.renderRoot.querySelector(
      "li[data-highlighted]"
    );
    if (key === "Enter") {
      if (currentlyHighlighted) {
        const selectedItem = this.items.find(
          (f) => f[this.idProperty] === currentlyHighlighted.dataset.identifier
        );
        this._handleSelect(selectedItem);
      }
      return;
    }
    if (key === "Escape") {
      if (this._currentHighlight) {
        this._currentHighlight = null;
        this.requestUpdate();
      }
      if (!this.selectedItem) {
        if (this.renderRoot.querySelector("input").value !== "") {
          this.renderRoot.querySelector("input").value = "";
        } else {
          this.renderRoot.querySelector("input").blur();
        }
        return;
      }
      if (
        this.renderRoot.querySelector("input").value !==
        this.selectedItem[this.labelProperty]
      ) {
        this.renderRoot.querySelector("input").value =
          this.selectedItem[this.labelProperty];
      } else {
        this.renderRoot.querySelector("input").blur();
      }
      return;
    }
    const listItems = this.renderRoot
      .querySelector("ul")
      .querySelectorAll("li");
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
    setTimeout(() => {
      this.renderRoot.querySelector("input").select();
    });
  }

  _handleSelect(item) {
    if (item) {
      this.selectedItem = item;
      this.renderRoot.querySelector("input").value = item[this.labelProperty];
      this.renderRoot.querySelector("input").blur();
    } else {
      this.selectedItem = null;
      this._currentHighlight = null;
      this.renderRoot.querySelector("input").value = "";
      this.renderRoot.querySelector("input").focus();
    }
    this._currentHighlight = null;
    this.dispatchEvent(
      new CustomEvent("item-selected", {
        detail: this.selectedItem,
      })
    );
  }

  firstUpdated() {
    this.getRootNode().addEventListener("keydown", (event) => {
      if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(event.code)) {
        this._handleKeyboard(event.code);
      }
    });
  }

  render() {
    return html`
      <style>
        li[data-highlighted] {
          background: #00417022;
        }
        ul {
          display: none;
        }
        input:focus ~ ul,
        ul:active {
          display: block;
        }
      </style>
      <input
        type="text"
        @focus=${() => {
          this._currentHighlight = null;
          this._itemFilter = "";
          this.requestUpdate();
        }}
        @input=${(evt) => {
          this._itemFilter = evt.target.value.toLowerCase();
          if (this._itemFilter.length > 0) {
            setTimeout(() => {
              const firstItem = this.renderRoot
                .querySelector("ul")
                .querySelectorAll("li")[0];
              if (firstItem) {
                this._currentHighlight = this.items.find(
                  (f) => f[this.idProperty] === firstItem.dataset.identifier
                );
              }
            });
          } else {
            this._currentHighlight = null;
          }
        }}
      />
      ${when(
        this.selectedItem,
        () => html`
          <button
            @click=${() => {
              this._handleSelect(null);
            }}
          >
            ✕
          </button>
        `
      )}
      ${when(
        this.items.length > 0,
        () => html`
          <ul>
            ${map(
              this.items.filter((f) =>
                this._itemFilter
                  ? f[this.labelProperty]
                      .toLowerCase()
                      .includes(this._itemFilter.toLowerCase())
                  : true
              ),
              (filterItem) => html`
                <li
                  data-highlighted=${this._currentHighlight === filterItem ||
                  nothing}
                  data-identifier=${filterItem[this.idProperty]}
                  data-label=${filterItem[this.labelProperty]}
                  @click=${() => {
                    this._handleSelect(filterItem);
                  }}
                  @mouseenter=${() => {
                    this._currentHighlight = filterItem;
                  }}
                  @mouseleave=${() => {
                    this._currentHighlight = null;
                  }}
                >
                  <input
                    type="checkbox"
                    .checked=${filterItem === this.selectedItem}
                  />
                  ${filterItem[this.labelProperty]}
                </li>
              `
            )}
          </ul>
        `
      )}
    `;
  }
}
