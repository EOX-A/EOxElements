import { LitElement, html } from "lit";
import { map } from "lit/directives/map.js";

export class EOxItemFilterChips extends LitElement {
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

  createRenderRoot() {
    return this;
  }

  #handleClose(event, index) {
    this.controller.remove(event, index);
  }

  render() {
    return html`
      <span class="chip-container">
        ${map(
          this.items,
          (item, index) => html`
            <span class="chip">
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

customElements.define("eox-itemfilter-chips-v2", EOxItemFilterChips);
