import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";

/**
 * This parser displays footer information for STAC properties.
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
        <footer part="footer">
          <slot name="footer">
            ${map(
              footer,
              ([key, value], index) => staticHTML`
                  <div class="footer-container">
                    <h${unsafeStatic((index + 1).toString())}>
                      ${unsafeHTML(value.label)}
                    </h${unsafeStatic((index + 1).toString())}>
                    <small>${unsafeHTML(value.formatted)}</small>
                  </div>
                  ${when(
                    // @ts-ignore
                    key === "sci:citation",
                    () => html`
                      <button
                        class="copy icon"
                        @click=${() =>
                          navigator.clipboard.writeText(value.formatted)}
                      >
                        copy
                      </button>
                    `
                  )}
                `
            )}
          </slot>
        </footer>
      `
    )}
  `;
}
