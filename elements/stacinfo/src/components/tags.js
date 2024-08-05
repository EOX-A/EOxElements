import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html } from "lit";
import { map } from "lit/directives/map.js";

/**
 * This parser displays tags for STAC items.
 * This element filters, formats, and displays tags in a structured layout.
 *
 * @typedef {Object} Property
 * @property {string} label
 * @property {string} formatted
 *
 * @param {Array<Array<(Property)>>} tags - Array of tags to display.
 * @return {import("lit-html").TemplateResult}
 */
export default function parseTags(tags = []) {
  return html`
    <section id="tags" part="tags">
      <ul>
        ${map(
          tags,
          ([, value]) => html`<slot name=${value.label.toLowerCase()}
            ><li>
              <span class="label">${unsafeHTML(value.formatted)}</span>
            </li></slot
          >`
        )}
      </ul>
    </section>
  `;
}
