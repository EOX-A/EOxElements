import { html } from "lit";
import { map } from "lit/directives/map.js";

/**
 * This parser displays STAC items in the tags section.
 * This element filters, formats, and displays tags in a structured layout.
 *
 * @typedef {Object} Property
 * @property {string} label
 * @property {string} formatted
 * @property {Array<string>} value
 *
 * @param {Array<Array<(Property)>>} tags - Array of tags to display.
 * @return {import("lit-html").TemplateResult}
 */
export default function parseTags(tags = []) {
  return html`
    <section id="tags" part="tags">
      <ul class="list">
        ${map(
          tags,
          ([, value]) =>
            html`<slot name=${value.label.toLowerCase()}
              ><li class="horizontal-padding small-padding">
                <nav class="wrap" style="gap: 0.5rem">
                  ${map(
                    value.value,
                    (tag) => html`
                      <button
                        class="chip primary"
                        style="--_size: 1rem; padding: 0.7rem; font-size: small"
                      >
                        ${tag}
                      </button>
                    `,
                  )}
                </nav>
              </li></slot
            >`,
        )}
      </ul>
    </section>
  `;
}
