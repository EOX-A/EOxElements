import { LitElement, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { renderAndSanitizeMarkdown, processNode } from "../helpers/index.js";
import styleEOX from "../style.eox.js";

/**
 * @element eox-storytelling-text
 */
export class EOxStoryTellingText extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      markdown: { type: String },
      unstyled: { type: Boolean },
      noShadow: { type: Boolean, attribute: "no-shadow" },
    };
  }

  constructor() {
    super();
    /**
     * @type {string}
     */
    this.title = "";
    /**
     * @type {string}
     */
    this.markdown = "";
    /**
     * @type {boolean}
     */
    this.unstyled = false;
    /**
     * @type {boolean}
     */
    this.noShadow = false;
  }

  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  updated(changedProperties) {
    if (changedProperties.has("markdown") || changedProperties.has("title")) {
      processNode(
        /** @type {any} */ (this.shadowRoot),
        () => {},
        /** @type {any} */ (this),
      );
    }
  }

  render() {
    const sanitizedHtml = renderAndSanitizeMarkdown(this.markdown);
    // Check if the sanitized HTML starts with a section wrapper div (which is generated for headings)
    const hasHeader = /^\s*<div[^>]*class="[^"]*section-wrap/i.test(
      sanitizedHtml,
    );

    return html`
      <style>
        ${!this.unstyled && styleEOX}
      </style>
      <div class="story-telling">
        ${hasHeader
          ? html`<div class="markdown-content">
              ${unsafeHTML(sanitizedHtml)}
            </div>`
          : html`
              <div class="section-wrap container">
                ${this.title ? html`<h2>${this.title}</h2>` : ""}
                <div class="markdown-content">${unsafeHTML(sanitizedHtml)}</div>
              </div>
            `}
      </div>
    `;
  }
}

customElements.define("eox-storytelling-text", EOxStoryTellingText);
