import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, nothing } from "lit";
import { map } from "lit/directives/map.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";
import { styleEOX } from "../style.eox.js";

/**
 * EOxStacInfoHeader is a custom element that displays header information
 * for STAC properties. This element filters, formats, and displays properties
 * in a structured header layout.
 *
 * @module EOxStacInfoHeader
 * @extends {import("lit").LitElement}
 */
export class EOxStacInfoHeader extends LitElement {
  static get properties() {
    return {
      header: { attribute: false, type: Array },
      unstyled: { attribute: "unstyled", type: Boolean },
    };
  }

  constructor() {
    super();

    /**
     * Array of header properties to display.
     * @type {Array}
     */
    this.header = [];

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
        ${!this.unstyled && styleEOX}
      </style>
      ${this.header.length > 0
        ? html`
            <header part="header">
              <slot name="header">
                ${map(
                  this.header,
                  ([, value], index) => staticHTML`
              <h${unsafeStatic((index + 1).toString())}>${unsafeHTML(
                    value.formatted
                  )}</h${unsafeStatic((index + 1).toString())}>
              `
                )}
              </slot>
            </header>
          `
        : nothing}
    `;
  }
}

customElements.define("eox-stacinfo-header", EOxStacInfoHeader);
