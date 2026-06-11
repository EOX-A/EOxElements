import { LitElement, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { renderAndSanitizeMarkdown } from "../helpers/index.js";
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

  render() {
    const sanitizedHtml = renderAndSanitizeMarkdown(this.markdown);

    return html`
      <style>
        ${!this.unstyled && styleEOX}
      </style>
      <div class="story-telling">
        <div class="section-wrap container">
          ${this.title ? html`<h2>${this.title}</h2>` : ""}
          <div class="markdown-content">${unsafeHTML(sanitizedHtml)}</div>
        </div>
      </div>
    `;
  }
}

customElements.define("eox-storytelling-text", EOxStoryTellingText);
