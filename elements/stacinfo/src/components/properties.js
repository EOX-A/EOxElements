import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, nothing } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { styleEOX } from "../style.eox.js";

/**
 * EOxStacInfoProperties is a custom element that displays properties
 * for STAC items. This element filters, formats, and displays properties
 * in a structured layout.
 *
 * @module EOxStacInfoProperties
 * @extends {import("lit").LitElement}
 */
export class EOxStacInfoProperties extends LitElement {
  static get properties() {
    return {
      tags: { attribute: false, type: Array },
      unstyled: { attribute: "unstyled", type: Boolean },
    };
  }

  constructor() {
    super();

    /**
     * Array of properties to display.
     * @type {Array}
     */
    this.properties = [];

    /**
     * Whether to use unstyled mode.
     * @type {boolean}
     */
    this.unstyled = false;
  }

  /**
   * Renders the HTML template for the component.
   */
  render() {
    return html`
      <style>
        :host {
            display: block;
        }
        ${!this.unstyled && styleEOX}
      </style>
      <section id="properties" part="properties">
        <ul class=${this.properties.length === 1 ? "single-property" : nothing}>
          ${map(
            this.properties,
            ([, value]) => html`
              <slot name=${value.label.toLowerCase()}>
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
              </slot>
            `
          )}
        </ul>
      </section>
    `;
  }
}

customElements.define("eox-stacinfo-properties", EOxStacInfoProperties);
