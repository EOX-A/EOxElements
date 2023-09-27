import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { checkbox } from "../../../utils/styles/checkbox";
import { button } from "../../../utils/styles/button";

@customElement("eox-autocomplete")
export class EOxAutocomplete extends LitElement {
  @property()
  idProperty = "id";

  @property()
  items = [];

  @property()
  labelProperty = "label";

  @property({ type: Boolean })
  multiple = false;

  @property({ type: Boolean })
  unstyled = false;

  @state()
  _currentHighlight = null;

  @state()
  _itemFilter = "";

  @state()
  selectedItems = [];

  _handleKeyboard(key) {
    const currentlyHighlighted = this.renderRoot.querySelector(
      "li[data-highlighted]"
    );
    if (key === "Enter") {
      if (currentlyHighlighted) {
        const currentItem = this.items.find(
          (f) => f[this.idProperty] === currentlyHighlighted.dataset.identifier
        );
        this._handleSelect(currentItem);
      }
      if (this.multiple) {
        // In multiple mode, delete the current text input right away so the user
        // can continue searching for other items
        this._itemFilter = "";
      }
      return;
    }
    if (key === "Escape") {
      if (this._currentHighlight) {
        this._currentHighlight = null;
        this.requestUpdate();
      }
      // If nothing is selected yet, first clear the input,
      // then on second escape blur the input
      if (this.selectedItems.length < 1 || this.multiple) {
        if (this.renderRoot.querySelector("input").value !== "") {
          this.renderRoot.querySelector("input").value = "";
        } else {
          this.renderRoot.querySelector("input").blur();
        }
        return;
      }
      if (!this.multiple) {
        // In single-select mode, check if the currently displayed text matches
        // the selected item or not. Useful if the user "browses" the list but
        // wants to abort; resets input to the currently selected item
        if (
          this.renderRoot.querySelector("input").value !==
          this.selectedItems[0][this.labelProperty]
        ) {
          this.renderRoot.querySelector("input").value =
            this.selectedItems[0][this.labelProperty];
        } else {
          this.renderRoot.querySelector("input").blur();
        }
      }
      return;
    }
    const highlightedChip = this.renderRoot.querySelector(
      ".chip[data-highlighted"
    );
    if (key === "Backspace") {
      if (
        this.multiple &&
        this.selectedItems.length &&
        this.renderRoot.querySelector("input[type=text]").value === ""
      ) {
        if (highlightedChip) {
          this.selectedItems.splice(
            Array.from(this.renderRoot.querySelectorAll(".chip")).indexOf(
              highlightedChip
            ),
            1
          );
        }
        const lastChip =
          this.renderRoot.querySelectorAll(".chip")[
            this.renderRoot.querySelectorAll(".chip").length - 1
          ];
        if (!lastChip.dataset.highlighted) {
          lastChip.dataset.highlighted = "";
        } else {
        }
        this.requestUpdate();
      }
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
      delete highlightedChip?.dataset.highlighted;
      currentIndex++;
      if (currentIndex > listItems.length - 1) {
        currentIndex = 0;
      }
    }
    if (key === "ArrowUp") {
      delete highlightedChip?.dataset.highlighted;
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = listItems.length - 1;
      }
    }
    if (key === "ArrowLeft" || key === "ArrowRight") {
      if (this.renderRoot.querySelectorAll(".chip").length < 1) {
        return;
      }
      let highlightedChipIndex = 0;
      const highlightedChip = this.renderRoot.querySelector(
        ".chip[data-highlighted]"
      );
      if (highlightedChip) {
        highlightedChipIndex = Array.from(
          this.renderRoot.querySelectorAll(".chip")
        ).indexOf(highlightedChip);
        delete highlightedChip.dataset.highlighted;
      }
      highlightedChipIndex =
        highlightedChipIndex + (key === "ArrowLeft" ? -1 : +1);
      if (key === "ArrowLeft" && highlightedChipIndex < 0) {
        highlightedChipIndex =
          this.renderRoot.querySelectorAll(".chip").length - 1;
      }
      if (
        key === "ArrowRight" &&
        highlightedChipIndex >
          this.renderRoot.querySelectorAll(".chip").length - 1
      ) {
        highlightedChipIndex = 0;
      }
      Array.from(this.renderRoot.querySelectorAll(".chip"))[
        highlightedChipIndex
      ].dataset.highlighted = "";
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
      if (this.multiple) {
        // In multiple mode, selecting the same item again removes it from the selectedItem list
        if (this.selectedItems.includes(item)) {
          this.selectedItems.splice(item, 1);
          this.requestUpdate();
        } else {
          this.selectedItems.push(item);
          this.renderRoot.querySelector("input").value = "";
        }
        this.renderRoot.querySelector("input").focus();
      } else {
        this.selectedItems = [item];
        this.renderRoot.querySelector("input").value = item[this.labelProperty];
        this.renderRoot.querySelector("input").blur();
      }
    } else {
      this.selectedItems = [];
      this._currentHighlight = null;
      this.renderRoot.querySelector("input").value = "";
      this.renderRoot.querySelector("input").focus();
    }
    this._currentHighlight = null;
    this.dispatchEvent(
      new CustomEvent("items-selected", {
        detail: this.selectedItems,
      })
    );
  }

  _handleScroll() {
    const dropdown = this.renderRoot.querySelector("ul");
    const autocomplete = this.renderRoot.querySelector(".container");
    const { bottom, left, width } = autocomplete?.getBoundingClientRect();
    dropdown.style.top = `${bottom}px`;
    dropdown.style.left = `${left}px`;
    dropdown.style.width = `${width}px`;
  }

  firstUpdated() {
    this.getRootNode().addEventListener("keydown", (event) => {
      if (
        [
          "ArrowDown",
          "ArrowUp",
          "ArrowLeft",
          "ArrowRight",
          "Enter",
          "Escape",
          "Backspace",
        ].includes(event.code)
      ) {
        this._handleKeyboard(event.code);
      }
    });

    if (!this.unstyled) {
      this._handleScroll();
      window.addEventListener("scroll", () => this._handleScroll());
    }
  }

  render() {
    return html`
      <style>
        :host,
        .container {
          display: flex;
        }
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
        ${!this.unstyled
          ? html`
              ${checkbox} ${button} :host { position: relative; } .container {
              width: 100%; position: relative; border: 1px solid #00417066;
              border-radius: 4px; height: 24px; padding: 5px; flex: 1;
              justify-content: space-between; cursor: text; transition: all 0.2s
              ease-in-out; } .container:hover { border: 1px solid #004170; }
              .chip-container { display: flex; flex: 0; } .chip { display: flex;
              align-items: center; background: #00417022; border-radius: 4px;
              margin-right: 4px; padding: 5px 10px; font-size: small; cursor:
              default; } .chip[data-highlighted] { background: #004170; color:
              white; } .chip-close { cursor: pointer; margin-left: 4px; }
              .input-container { display: flex; flex: 1; align-items: center; }
              input, input:focus { border: none; outline: none; } ul { position:
              fixed; top: 0px; left: 0; width: 100%; margin: 0; padding: 0;
              background: white; border-bottom-left-radius: 4px;
              border-bottom-right-radius: 4px; box-shadow: 0 4px 4px #0007;
              cursor: default; max-height: 200px; overflow-y: auto; z-index: 1;}
              li { display: flex; align-items: center; list-style: none;
              padding: 5px 10px; font-size: small; } .button-container {
              display: flex; align-items: center; position: absolute; right: 0;
              height: 100%; width: 30px; } button { color: #004170; height:
              24px; font-size: large; }
            `
          : nothing}
      </style>
      <div
        class="container"
        @click=${() =>
          this.renderRoot.querySelector("input[type=text]").focus()}
      >
        ${when(
          this.multiple,
          () => html`
            <span class="chip-container">
              ${map(
                this.selectedItems,
                (item) => html`
                  <span class="chip">
                    <span class="chip-label">${item[this.labelProperty]}</span>
                    <span
                      class="chip-close"
                      @click=${() => {
                        this.selectedItems.splice(item, 1);
                        this.requestUpdate();
                      }}
                      >✕</span
                    >
                  </span>
                `
              )}
            </span>
          `
        )}
        <div class="input-container">
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
                      data-highlighted=${this._currentHighlight ===
                        filterItem || nothing}
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
                        .checked=${this.selectedItems.includes(filterItem)}
                      />
                      ${filterItem[this.labelProperty]}
                    </li>
                  `
                )}
              </ul>
            `
          )}
        </div>
      </div>
      ${when(
        this.selectedItems.length > 0,
        () => html`
          <div class="button-container">
            <button
              class="icon"
              @click=${() => {
                this._handleSelect(null);
              }}
            >
              ✕
            </button>
          </div>
        `
      )}
    `;
  }
}
