import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";

/**
 * This parser displays STAC properties in the featured section.
 * This element filters, formats, and displays properties in a structured way.
 *
 * @typedef {Object} Property
 * @property {string} label
 * @property {string} formatted
 * @property {number} length
 *
 * @param {Array<Array<Property>>} featured - Array of featured properties to display.
 * @return {import("lit-html").TemplateResult}
 */
export default function parseFeatured(featured = []) {
  return html`
    ${when(
      featured.length > 0,
      () => html`
        <section id="featured" class="small-margin top-margin" part="featured">
          ${map(
            featured,
            ([, value]) => html`
              <details class="max-width">
                <summary class="square">
                  <nav class="responsive tiny-space">
                    <slot
                      name="featured-${value.label.toLowerCase()}-summary"
                      class="title"
                    >
                      <i class="small">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <title>chevron-right</title>
                          <path
                            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                          />
                        </svg>
                      </i>
                      ${value.label}
                      ${when(
                        value.length,
                        () => html`
                          <button
                            class="chip"
                            style="--_size: 1rem; padding: 0.7rem; font-size: small"
                          >
                            ${value.length}
                          </button>
                        `,
                      )}
                    </slot>
                  </nav>
                </summary>
                <div class="featured-container">
                  <slot name="featured-${value.label.toLowerCase()}">
                    ${when(
                      value.label.toLowerCase() === "description",
                      () => html`
                        <eox-stacinfo-shadow .content=${value.formatted}>
                        </eox-stacinfo-shadow>
                      `,
                      () => html`${unsafeHTML(value.formatted)}`,
                    )}
                  </slot>
                </div>
              </details>
            `,
          )}
        </section>
      `,
    )}
  `;
}
