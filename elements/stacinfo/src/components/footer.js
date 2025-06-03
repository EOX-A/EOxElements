import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";

/**
 * This parser displays STAC properties in the footer.
 * This element filters, formats, and displays properties in a structured footer layout.
 *
 * @typedef {Object} Property
 * @property {string} label
 * @property {string} formatted
 *
 * @param {Array<Array<(Property)>>} footer - Array of footer properties to display.
 * @return {import("lit-html").TemplateResult}
 */
export default function parseFooter(footer = []) {
  return html`
    ${when(
      footer.length > 0,
      () => html`
        <footer class="primary" part="footer">
          <slot name="footer">
            ${map(
              footer,
              ([key, value], index) => staticHTML`
                  <div class="footer-container">
                    <h${unsafeStatic((index + 5).toString())} class="small">
                      ${unsafeHTML(value.label)}
                    </h${unsafeStatic((index + 5).toString())}>
                    <small>${unsafeHTML(value.formatted)}</small>
                  </div>
                  ${when(
                    // @ts-expect-error TODO
                    key === "sci:citation",
                    () => html`
                      <button
                        class="copy circle transparent"
                        @click=${() =>
                          navigator.clipboard.writeText(value.formatted)}
                      >
                        <i class="small">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <title>content-copy</title>
                            <path
                              d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
                            />
                          </svg>
                        </i>
                      </button>
                    `,
                  )}
                `,
            )}
          </slot>
        </footer>
      `,
    )}
  `;
}
