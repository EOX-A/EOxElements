import { LitElement, html } from "lit";
import markdownit from "markdown-it";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
});

export class EOxStoryTelling extends LitElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      content: { attribute: "content", type: String },
    };
  }

  constructor() {
    super();

    /**
     * @type String - Markdown Content
     */
    this.content = "";
  }

  render() {
    return html` ${unsafeHTML(md.render(this.content))} `;
  }
}

customElements.define("eox-storytelling", EOxStoryTelling);
