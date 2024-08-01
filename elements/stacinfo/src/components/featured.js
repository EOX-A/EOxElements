import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, nothing } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";

/**
 *
 *
 */
export class EOxStacInfoFeatured extends LitElement {
  static get properties() {
    return {
      featured: { attribute: false, type: Array },
    };
  }

  constructor() {
    super();
    this.featured = [];
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
        this.featured.length > 0,
        () => html`
          <section id="featured" part="featured">
            ${map(
              this.featured.filter(([_, value]) =>
                value.length !== undefined ? value.length > 0 : true
              ),
              ([, value]) => html`
                <details>
                  <summary>
                    <span
                      name="featured-${value.label.toLowerCase()}-summary"
                      class="title"
                    >
                      ${value.label}
                      ${when(
                        value.length,
                        () => html` <span class="count">${value.length}</span> `
                      )}
                    </span>
                  </summary>
                  <div class="featured-container">
                    ${when(
                      value.label.toLowerCase() === "description",
                      () => html`
                        <eox-stacinfo-shadow .content=${value.formatted}>
                        </eox-stacinfo-shadow>
                      `,
                      () => html`${unsafeHTML(value.formatted)}`
                    )}
                  </div>
                </details>
              `
            )}
          </section>
        `
      )}
    `;
  }
}

customElements.define("eox-stacinfo-featured", EOxStacInfoFeatured);
