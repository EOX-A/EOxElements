import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html, nothing } from "lit";
import { map } from "lit/directives/map.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";

/**
 * This parser displays header information for STAC properties.
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
