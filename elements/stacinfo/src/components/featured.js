import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";

/**
 * This parser displays featured STAC properties.
 * This element filters, formats, and displays properties in a structured way.
 *
 * @param {Array} featured - Array of featured properties to display.
 * @return {import("lit").html.TemplateResult}
 */
export default function parseFeatured(featured = []) {
  return html`
    ${when(
      featured.length > 0,
      () => html`
        <section id="featured" part="featured">
          ${map(
            featured.filter(([_, value]) =>
              value.length !== undefined ? value.length > 0 : true
            ),
            ([, value]) => html`
              <details>
                <summary>
                  <slot
                    name="featured-${value.label.toLowerCase()}-summary"
                    class="title"
                  >
                    ${value.label}
                    ${when(
                      value.length,
                      () => html` <span class="count">${value.length}</span> `
                    )}
                  </slot>
                </summary>
                <div class="featured-container">
                  <slot name="featured-${value.label.toLowerCase()}">
                    ${when(
                      value.label.toLowerCase() === "description",
                      () => html`
                        <eox-stacinfo-shadow .content=${value.formatted}>
                        </eox-stacinfo-shadow>
                      `,
                      () => html`${unsafeHTML(value.formatted)}`
                    )}
                  </slot>
                </div>
              </details>
            `
          )}
        </section>
      `
    )}
  `;
}
