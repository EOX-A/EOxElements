import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { button } from "../../../utils/styles/button";
import { computePosition, autoUpdate } from "@floating-ui/dom";

@customElement("eox-autocomplete")
export class EOxAutocomplete extends LitElement {
  @property()
  idProperty = "id";

  @property()
  items: Array<any> = [];

  @property()
  labelProperty = "label";

  @property({ type: Boolean })
  multiple = false;

  @property({ type: Boolean })
  unstyled = false;

  @state()
  public inputText = "";

  @state()
  selectedItems: Array<any> = [];

  _handleKeyboard(key: string) {
    if (key === "Escape") {
      // If nothing is selected yet, first clear the input,
      // then on second escape blur the input
      if (this.selectedItems.length < 1 || this.multiple) {
        if (this.renderRoot.querySelector("input").value !== "") {
          this.renderRoot.querySelector("input").value = "";
        } else {
          this.renderRoot.querySelector("eox-selectionlist").style.display =
            "none";
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
          this.renderRoot.querySelector("eox-selectionlist").style.display =
            "none";
        }
      }
      return;
    }
    const highlightedChip = this.renderRoot.querySelector(".chip.highlighted");
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
        if (!lastChip.classList.contains("highlighted")) {
          lastChip.classList.add("highlighted");
        }
        this.requestUpdate();
      } else {
        if (this.inputText.length === 0) {
          this.selectedItems = [];
          this._dispatchEvent();
        }
      }
    }
    if (key === "ArrowDown" || key === "ArrowUp") {
      this.renderRoot.querySelector("eox-selectionlist").style.display =
        "block";
    }
    if (key === "ArrowLeft" || key === "ArrowRight") {
      if (this.renderRoot.querySelectorAll(".chip").length < 1) {
        return;
      }
      let highlightedChipIndex = 0;
      const highlightedChip =
        this.renderRoot.querySelector(".chip.highlighted");
      if (highlightedChip) {
        highlightedChipIndex = Array.from(
          this.renderRoot.querySelectorAll(".chip")
        ).indexOf(highlightedChip);
        highlightedChip.classList.remove("highlighted");
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
      ].classList.add("highlighted");
    }
    this.renderRoot.querySelector("input").select();
  }

  _handleHighlight(items: Array<any>) {
    this.renderRoot.querySelector("input").value = items[0][this.labelProperty];
    this.renderRoot.querySelector("input").select();
  }

  _handleSelect(items: Array<any>) {
    this.selectedItems = items;
    if (items.length > 0) {
      if (this.multiple) {
        this.renderRoot.querySelector("input").value = "";
        this.renderRoot.querySelector("input").focus();
      } else {
        this.renderRoot.querySelector("input").value =
          items[0][this.labelProperty];
        this.renderRoot.querySelector("eox-selectionlist").style.display =
          "none";
      }
    } else {
      this.renderRoot.querySelector("input").select();
      this.renderRoot.querySelector("input").focus();
    }
    this._dispatchEvent();
    this.requestUpdate();
  }

  _dispatchEvent() {
    this.dispatchEvent(
      new CustomEvent("items-selected", {
        detail: this.selectedItems,
      })
    );
  }

  /**
   * Stores the autoUpdate cleanup function to be called
   * when disconnected
   */
  _overlayCleanup(): void {}

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.unstyled) {
      setTimeout(() => {
        const autocomplete = <HTMLElement>(
          this.renderRoot.querySelector(".container")
        );
        const dropdown = <HTMLElement>(
          this.renderRoot.querySelector("eox-selectionlist")
        );
        function updatePosition() {
          if (dropdown.style.display === "block") {
            computePosition(autocomplete, dropdown, { strategy: "fixed" }).then(
              ({ x, y }) => {
                Object.assign(dropdown.style, {
                  left: `${x}px`,
                  top: `${y}px`,
                  width: `${autocomplete.getBoundingClientRect().width}px`,
                });
              }
            );
          }
        }
        this._overlayCleanup = autoUpdate(
          autocomplete,
          dropdown,
          updatePosition
        );
      });
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._overlayCleanup();
  }

  firstUpdated() {
    this.getRootNode().addEventListener("keydown", (event) => {
      const { code } = <KeyboardEvent>event;
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "Escape",
          "Backspace",
        ].includes(code)
      ) {
        this._handleKeyboard(code);
      }
    });
  }

  render() {
    return html`
      <style>
        :host,
        .container {
          display: flex;
        }
        eox-selectionlist {
          display: none;
        }
        .chip.highlighted {
          background: lightgrey;
        }
        ${!this.unstyled
          ? html`
              ${button} .container { width: 100%; position: relative; border:
              1px solid #00417066; border-radius: 4px; height: 24px; padding:
              5px; flex: 1; justify-content: space-between; cursor: text;
              transition: all 0.2s ease-in-out; overflow-x: auto; }
              .container:hover { border: 1px solid #004170; } .chip-container {
              display: flex; flex: 0; } .chip { display: flex; align-items:
              center; background: #00417022; border-radius: 4px; margin-right:
              4px; padding: 5px 10px; font-size: small; cursor: default; }
              .chip.highlighted { background: #004170; color: white; }
              .chip-close { cursor: pointer; margin-left: 4px; }
              .input-container { display: flex; flex: 1; align-items: center; }
              input, input:focus { border: none; outline: none; }
              eox-selectionlist { position: fixed; top: 0px; left: 0; width:
              100%; margin: 0; padding: 0; background: white;
              border-bottom-left-radius: 4px; border-bottom-right-radius: 4px;
              box-shadow: 0 4px 4px #0007; cursor: default; max-height: 200px;
              overflow-y: auto; z-index: 99;} .button-container { display: flex;
              align-items: center; justify-content: center; position: absolute;
              right: 1px; top: 5px; height: calc(100% - 10px); width: 34px;
              background: white; } button.icon { color: #004170; height: 24px;
              font-size: large; width: unset; } .container::-webkit-scrollbar {
              height: 2px; } .container::-webkit-scrollbar-thumb { background:
              lightgrey; border-radius: 2px; }
            `
          : nothing}
      </style>
      <div
        class="container"
        @click=${() =>
          (<HTMLInputElement>(
            this.renderRoot.querySelector("input[type=text]")
          )).focus()}
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
                      @click=${(evt: Event) => {
                        evt.stopPropagation();
                        this.selectedItems.splice(
                          this.selectedItems.indexOf(item),
                          1
                        );
                        this._dispatchEvent();
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
              (<HTMLElement>(
                this.renderRoot.querySelector("eox-selectionlist")
              )).style.display = "block";
              this.inputText = "";
              this.requestUpdate();
            }}
            @input=${(event: Event) => {
              this.inputText = (event!
                .target as HTMLInputElement)!.value.toLowerCase();
            }}
          />
          ${when(
            this.items.length > 0,
            () => html`
              <eox-selectionlist
                .filter=${this.inputText}
                .items=${this.items.filter((f) =>
                  this.inputText
                    ? f[this.labelProperty]
                        .toLowerCase()
                        .includes(this.inputText.toLowerCase())
                    : true
                )}
                .multiple=${this.multiple}
                .selectedItems=${this.selectedItems}
                .unstyled=${this.unstyled}
                @items-highlighted=${(event: CustomEvent) => {
                  this._handleHighlight(event.detail);
                }}
                @items-selected=${(event: CustomEvent) => {
                  this._handleSelect(event.detail);
                }}
              >
              </eox-selectionlist>
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
                this._handleSelect([]);
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
