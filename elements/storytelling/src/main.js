import { LitElement, html } from "lit";
import markdownit from "markdown-it";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { loadMarkdownURL } from "./helpers/index";
const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
});

export class EOxStoryTelling extends LitElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      markdown: { attribute: "markdown", type: String },
      markdownURL: { attribute: "markdown-url", type: String },
    };
  }

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
  }

  async markdownURLFetch() {
    if (this.markdownURL) {
      this.markdown = await loadMarkdownURL(this.markdownURL);
      this.requestUpdate();
    }
  }

  async updated(changedProperties) {
    if (changedProperties.has("markdownURL")) await this.markdownURLFetch();
  }

  render() {
    return html` ${unsafeHTML(md.render(this.markdown))} `;
  }
}

customElements.define("eox-storytelling", EOxStoryTelling);
