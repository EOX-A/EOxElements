import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, nothing } from "lit";
import { map } from "lit/directives/map.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";

/**
 *
 *
 */
export class EOxStacInfoHeader extends LitElement {
  static get properties() {
    return {
      header: { attribute: false, type: Array },
    };
  }

  constructor() {
    super();
    this.header = [];
  }

  /**
   * Override createRenderRoot to use LitElement as the render root
   */
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      ${this.header.length > 0
        ? html`
            <header part="header">
              ${map(
                this.header,
                ([, value], index) => staticHTML`
              <h${unsafeStatic((index + 1).toString())}>${unsafeHTML(
                  value.formatted
                )}</h${unsafeStatic((index + 1).toString())}>
              `
              )}
            </header>
          `
        : nothing}
    `;
  }
}

customElements.define("eox-stacinfo-header", EOxStacInfoHeader);
