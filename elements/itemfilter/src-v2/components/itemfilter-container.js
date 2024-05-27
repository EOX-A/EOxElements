import { LitElement, html } from "lit";
import { styleEOX } from "../style.eox";

export class EOxItemFilterContainer extends LitElement {
  static get properties() {
    return {
      filterProperties: { attribute: false, type: Object },
      inlineMode: { attribute: "inline-mode", type: Boolean },
      unstyled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.filterProperties = {};
    this.unstyled = false;
    this.inlineMode = false;
  }

  render() {
    return html`
      <style>
        ${!this.unstyled && styleEOX}
      </style>
      ${this.inlineMode
        ? html`
            <div class="container" part="container">
              <eox-itemfilter-chips></eox-itemfilter-chips>
              <div class="input-container">
                <input
                  id="inline-input"
                  slot="trigger"
                  type="text"
                  placeholder="Type something..."
                />
                <div slot="content">
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `
        : html`<slot name="section"></slot>`}
    `;
  }
}

customElements.define("eox-itemfilter-container", EOxItemFilterContainer);
