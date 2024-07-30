import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, nothing } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";

/**
 *
 *
 */
export class EOxStacInfoProperties extends LitElement {
  static get properties() {
    return {
      tags: { attribute: false, type: Array },
    };
  }

  constructor() {
    super();
    this.properties = [];
  }

  /**
   * Override createRenderRoot to use LitElement as the render root
   */
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="properties">
        <ul class=${this.properties.length === 1 ? "single-property" : nothing}>
          ${map(
            this.properties,
            ([, value]) => html`
              <li>
                ${when(
                  this.properties.length > 1,
                  () => html` <span class="label"> ${value.label}</span
                    ><span class="colon">:</span>`
                )}
                <span class="value">
                  ${when(
                    value.label.toLowerCase() === "description",
                    () => html`
                      <eox-stacinfo-shadow .content=${value.formatted}>
                      </eox-stacinfo-shadow>
                    `,
                    () => html`${unsafeHTML(value.formatted)}`
                  )}
                </span>
              </li>
            `
          )}
        </ul>
      </section>
    `;
  }
}

customElements.define("eox-stacinfo-properties", EOxStacInfoProperties);
