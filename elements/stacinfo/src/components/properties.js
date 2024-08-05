import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html, nothing } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";

/**
 * This parser displays properties for STAC items.
 * This element filters, formats, and displays properties in a structured layout.
 *
 * @typedef {Object} Property
 * @property {string} label
 * @property {string} formatted
 *
 * @param {Array<Array<(Property)>>} properties - Array of properties to display.
 * @return {import("lit-html").TemplateResult}
 */
export default function parseProperties(properties = []) {
  return html`
    <section id="properties" part="properties">
      <ul class=${properties.length === 1 ? "single-property" : nothing}>
        ${map(
          properties,
          ([, value]) => html`
            <slot name=${value.label.toLowerCase()}>
              <li>
                ${when(
                  properties.length > 1,
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
