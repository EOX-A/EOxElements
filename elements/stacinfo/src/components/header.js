import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html, nothing } from "lit";
import { map } from "lit/directives/map.js";
import { html as staticHTML } from "lit/static-html.js";

/**
 * This parser displays STAC properties in the header.
 * This element filters, formats, and displays properties in a structured header layout.
 *
 * @typedef {Object} Property
 * @property {string} formatted
 *
 * @param {Array<Array<(Property)>>} header - Array of header properties to display.
 * @return {import("lit-html").TemplateResult}
 */
export default function parseHeader(header = []) {
  return html`
    ${header.length > 0
      ? html`
          <header part="header">
            <slot name="header">
              ${map(
                header,
                ([, value]) => staticHTML`
              <p><strong>${unsafeHTML(value.formatted)}</strong></p>
              `,
              )}
            </slot>
          </header>
        `
      : nothing}
  `;
}
