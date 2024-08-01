import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";

/**
 *
 *
 */
export class EOxStacInfoFooter extends LitElement {
  static get properties() {
    return {
      footer: { attribute: false, type: Array },
    };
  }

  constructor() {
    super();
    this.footer = [];
  }

  /**
   * Override createRenderRoot to use LitElement as the render root
   */
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      ${when(
        this.footer.length > 0,
        () => html`
          <footer>
            ${map(
              this.footer,
              ([key, value], index) => staticHTML`
                <div class="footer-container">
                  <h${unsafeStatic((index + 1).toString())}>
                    ${unsafeHTML(value.label)}
                  </h${unsafeStatic((index + 1).toString())}>
                  <small>${unsafeHTML(value.formatted)}</small>
                </div>
                ${when(
                  key === "sci:citation",
                  () => html`
                    <button
                      class="copy icon"
                      @click=${() =>
                        navigator.clipboard.writeText(value.formatted)}
                    >
                      copy
                    </button>
                  `
                )}
              `
            )}
          </footer>
        `
      )}
    `;
  }
}

customElements.define("eox-stacinfo-footer", EOxStacInfoFooter);
