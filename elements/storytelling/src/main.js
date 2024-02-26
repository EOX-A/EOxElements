import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import markdownit from "markdown-it";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { loadMarkdownURL } from "./helpers/index";
import mainStyle from "../../../utils/styles/dist/main.style";
import DOMPurify from "isomorphic-dompurify";
const md = markdownit({ html: true });

export class EOxStoryTelling extends LitElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      markdown: { attribute: "markdown", type: String },
      markdownURL: { attribute: "markdown-url", type: String },
      noShadow: { type: Boolean },
      unstyled: { type: Boolean },
    };
  }

  /**
   * @type String - Generated HTML string using markdown
   */
  #html;
  constructor() {
    super();

    /**
     * @type String - Markdown Content
     */
    this.markdown = "";

    /**
     * @type String - Markdown Content URL
     */
    this.markdownURL = null;

    /**
     * Render the element without additional styles
     */
    this.unstyled = false;

    /**
     * Renders the element without a shadow root
     *
     * @type {Boolean}
     */
    this.noShadow = false;
  }

  /**
   * @param {Map} changedProperties - A map of changed properties.
   */
  async updated(changedProperties) {
    // Attempt to fetch new markdown content from the URL if `markdownURL` changed
    if (changedProperties.has("markdownURL") && this.markdownURL) {
      this.markdown =
        (await loadMarkdownURL(this.markdownURL)) || this.markdown;
      this.requestUpdate();
    }

    // Check if 'markdown' property itself has changed and generate sanitized html
    if (changedProperties.has("markdown")) {
      this.#html = DOMPurify.sanitize(md.render(this.markdown));
      this.requestUpdate();
    }
  }

  render() {
    return html`
      <style>
        :host { display: block; }
        ${!this.unstyled && mainStyle}
      </style>
      ${when(this.#html, () => html`${unsafeHTML(this.#html)}`)}
    `;
  }
}

customElements.define("eox-storytelling", EOxStoryTelling);
