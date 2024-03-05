import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import markdownit from "markdown-it";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { highlightNavigation, loadMarkdownURL } from "./helpers/index";
import mainStyle from "../../../utils/styles/dist/main.style";
import DOMPurify from "isomorphic-dompurify";
import { markdownItDecorateImproved } from "./markdown-it-plugin";
import styleEOX from "./style.eox.js";
const md = markdownit({ html: true });

md.use(markdownItDecorateImproved);

export class EOxStoryTelling extends LitElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      markdown: { attribute: "markdown", type: String },
      markdownURL: { attribute: "markdown-url", type: String },
      enableNav: { type: Boolean },
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

    /**
     * Enable or disable navigation
     *
     * @type {Boolean}
     */
    this.enableNav = false;

    /**
     * List of items in navigation
     *
     * @type {Array<Object>}
     */
    this.nav = [];
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
      if (this.enableNav) this.nav = md.nav;
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

  // Lifecycle method called after the first update
  firstUpdated() {
    // Add scroll event listener for navigation highlighting
    document.addEventListener("scroll", highlightNavigation);
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        :host { display: block; }
        .slot-hide { display: none; }
        ${!this.unstyled && styleEOX}
        ${!this.unstyled && mainStyle}
      </style>

      <div class="story-telling">
        ${when(
          this.enableNav && this.nav.length,
          () => html`
            <div class="navigation">
              <div class="container">
                <ul>
                  ${this.nav.map(
                    ({ id, title }) =>
                      html`<li><a href="#${id}">${title}</a></li>`
                  )}
                </ul>
              </div>
            </div>
          `
        )}
        <div class="container">
          <slot class="slot-hide" @slotchange=${this.handleSlotChange}></slot>
          ${when(this.#html, () => html`${unsafeHTML(this.#html)}`)}
        </div>
      </div>
    `;
  }
}

customElements.define("eox-storytelling", EOxStoryTelling);
