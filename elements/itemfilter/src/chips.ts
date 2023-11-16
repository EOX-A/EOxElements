import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";

@customElement("eox-itemfilter-chips")
export class EOxItemFilterChips extends LitElement {
  @property({ type: Array })
  items: FilterObject[] = [];

  @property()
  titleProperty: string = "title";

  @property({ type: Boolean })
  unstyled = false;

  _dispatchEvent() {
    this.dispatchEvent(
      new CustomEvent("items-selected", {
        detail: this.items,
      })
    );
  }

  _handleKeyboard(key: string, textValue: string) {
    const highlightedChip = this.renderRoot.querySelector(".chip.highlighted");
    if (key === "Escape" || textValue) {
      if (highlightedChip) {
        highlightedChip.classList.remove("highlighted");
      }
    }
    if (key === "Backspace" && !textValue) {
      if (this.items.length) {
        if (highlightedChip) {
          this.items.splice(
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
      }
      this._dispatchEvent();
    }
    if ((key === "ArrowLeft" || key === "ArrowRight") && !textValue) {
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
  }

  _keyboardEventListener: EventListener = (event: Event) => {
    const { code } = <KeyboardEvent>event;
    if (
      this.parentElement.classList.contains("hidden") &&
      code == "Backspace"
    ) {
      return;
    }
    if (code === "Space") {
      event.preventDefault();
    }
    if (!["Escape", "Space", "Enter"].includes(code)) {
      event.stopPropagation();
    }
    if (["ArrowLeft", "ArrowRight", "Escape", "Backspace"].includes(code)) {
      this._handleKeyboard(code, (<HTMLInputElement>event.target).value ?? "");
    }
  };

  connectedCallback() {
    super.connectedCallback();
    this.getRootNode().addEventListener("keydown", this._keyboardEventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.getRootNode().removeEventListener(
      "keydown",
      this._keyboardEventListener
    );
  }

  render() {
    return html`
      <style>
        .chip.highlighted {
          background: lightgrey;
        }
        .chip-title {
          pointer-events: none;
        }
        ${!this.unstyled
          ? html`
              .chip-container { display: flex; flex: 0; } .chip { display: flex;
              align-items: center; background: #00417022; border-radius: 4px;
              margin-right: 4px; padding: 5px 10px; font-size: small; cursor:
              default; white-space: nowrap; } .chip.highlighted { background:
              #004170; color: white; } .chip-close { cursor: pointer;
              margin-left: 4px; }
            `
          : nothing}
      </style>
      <span class="chip-container">
        ${map(
          this.items,
          (item) => html`
            <span
              class="chip"
              @click=${(evt: Event) => {
                this.renderRoot.querySelectorAll(".chip").forEach((chip) => {
                  chip.classList.remove("highlighted");
                });
                (<HTMLLIElement>evt.target).classList.add("highlighted");
                this.requestUpdate();
              }}
            >
              <span class="chip-title"
                >${item[this.titleProperty as keyof FilterObject]}</span
              >
              ${when(item._inProgress, () =>
                !item.stringifiedState ? html` ... ` : ""
              )}
              ${when(
                item.stringifiedState,
                () => html`: ${item.stringifiedState}`
              )}
              <span
                class="chip-close"
                @click=${(evt: Event) => {
                  evt.stopPropagation();
                  this.items.splice(this.items.indexOf(item), 1);
                  this._dispatchEvent();
                  this.requestUpdate();
                }}
                >✕</span
              >
            </span>
          `
        )}
      </span>
    `;
  }
}
