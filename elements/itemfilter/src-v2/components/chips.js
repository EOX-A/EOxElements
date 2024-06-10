import { LitElement, html } from "lit";
import { map } from "lit/directives/map.js";
import { styleEOX } from "../style.eox";
import {
  handleChipClickMethod,
  handleCloseMethod,
  keyboardEventListenerMethod,
} from "../methods/chips";

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

  #handleClose(event, index) {
    handleCloseMethod(event, index, this);
  }

  _dispatchEvent() {
    this.dispatchEvent(
      new CustomEvent("items-selected", {
        detail: this.items,
      })
    );
  }

  #keyboardEventListener(event) {
    keyboardEventListenerMethod(event, this);
  }

  #handleChipClick(evt) {
    handleChipClickMethod(evt, this);
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
