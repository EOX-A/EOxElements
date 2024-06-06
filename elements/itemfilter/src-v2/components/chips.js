import { LitElement, html } from "lit";
import { map } from "lit/directives/map.js";
import { styleEOX } from "../style.eox";

export class EOxItemFilterChipsV2 extends LitElement {
  static get properties() {
    return {
      items: { attribute: false, type: Object },
      controller: { attribute: false, type: Object },
    };
  }

  constructor() {
    super();
    this.items = {};
    this.controller = {};
  }

  #handleClose(event, index) {
    this.controller.remove(event, index);
  }

  #dispatchEvent() {
    this.dispatchEvent(
      new CustomEvent("items-selected", {
        detail: this.items,
      })
    );
  }

  #handleKeyboard(key, textValue) {
    const highlightedChip = this.renderRoot.querySelector(".chip.highlighted");
    if (key === "Escape" || textValue) {
      if (highlightedChip) {
        highlightedChip.classList.remove("highlighted");
      }
    }
    if (key === "Backspace" && !textValue) {
      if (this.items.length) {
        if (highlightedChip) {
          highlightedChip.querySelector(".chip-close").click();
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
      this.#dispatchEvent();
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

  #keyboardEventListener(event) {
    const { code } = event;
    if (
      this.parentElement.classList.contains("hidden") &&
      ["ArrowLeft", "ArrowRight", "Backspace"].includes(code)
    )
      return;
    if (code === "Space") event.preventDefault();
    if (!["Escape", "Space", "Enter"].includes(code)) event.stopPropagation();
    if (["ArrowLeft", "ArrowRight", "Escape", "Backspace"].includes(code))
      this.#handleKeyboard(code, event.target.value ?? "");
  }

  connectedCallback() {
    super.connectedCallback();
    this.getRootNode().addEventListener(
      "keydown",
      this.#keyboardEventListener.bind(this)
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.getRootNode().removeEventListener(
      "keydown",
      this.#keyboardEventListener.bind(this)
    );
  }

  #handleChipClick(evt) {
    this.renderRoot.querySelectorAll(".chip").forEach((chip) => {
      chip.classList.remove("highlighted");
    });
    evt.target.classList.add("highlighted");
    this.requestUpdate();
  }

  render() {
    return html`
      <style>
        ${styleEOX}
      </style>
      <span class="chip-container">
        ${map(
          this.items,
          (item, index) => html`
            <span class="chip" @click=${this.#handleChipClick.bind(this)}>
              <span class="chip-title">${item.title}</span>
              <span
                class="chip-close"
                data-close="${item.key}"
                @click=${(e) => this.#handleClose(e, index)}
                >x</span
              >
            </span>
          `
        )}
      </span>
    `;
  }
}

customElements.define("eox-itemfilter-chips-v2", EOxItemFilterChipsV2);
