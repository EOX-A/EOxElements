import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import markdownit from "markdown-it";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { loadMarkdownURL } from "./helpers/index";
import mainStyle from "../../../utils/styles/dist/main.style";
import DOMPurify from "isomorphic-dompurify";
import { markdownItDecorateImproved } from "./markdown-it-plugin";
const md = markdownit({ html: true });

md.use(markdownItDecorateImproved);

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
   * @type {String} - Generated HTML string using markdown
   */
  #html;
  constructor() {
    super();

    /**
     * @type {String} - Markdown Content
     */
    this.markdown = "";

    /**
     * @type {String} - Markdown Content URL
     */
    this.markdownURL = null;

    /**
     * Render the element without additional styles
     *
     * @type {Boolean}
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

  /**
   * Handles changes to the slot's content, updating the component's internal state.
   */
  handleSlotChange() {
    // Query the shadow DOM for the slot element
    const slot = this.shadowRoot.querySelector("slot");

    if (slot) {
      // Retrieve all nodes assigned to the slot, flattening any nested nodes
      const slottedContent = slot.assignedNodes({ flatten: true });

      // Map each node to its text content, filtering out any non-text nodes, and join into a single string
      this.markdown = slottedContent
        .map((node) => (node.textContent ? node.textContent : ""))
        .join("");

      // Request an update to re-render the component with the new content
      this.requestUpdate();
    }
  }

  render() {
    return html`
      <style>
        :host { display: block; }
        .slot-hide { display: none; }
        iframe,
        img,
        video {
          max-width: 100%;
        }
        ${!this.unstyled && mainStyle}
      </style>
      <slot class="slot-hide" @slotchange=${this.handleSlotChange}></slot>
      ${when(this.#html, () => html`${unsafeHTML(this.#html)}`)}
    `;
  }
}

customElements.define("eox-storytelling", EOxStoryTelling);
