import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import markdownit from "markdown-it";
import {
  getCustomEleHandling,
  loadMarkdownURL,
  scrollAnchorClickEvent,
  scrollIntoView,
  renderHtmlString,
  parseNav,
  validateMarkdownAttrs,
  addLightBoxScript,
} from "./helpers";
import mainStyle from "../../../utils/styles/dist/main.style";
import DOMPurify from "isomorphic-dompurify";
import {
  markdownItConfig,
  markdownItDecorateImproved,
} from "./markdown-it-plugin";
import styleEOX from "./style.eox.js";
import "./components/editor";
import { DEFAULT_SENSITIVE_TAGS } from "./enums";
const md = markdownit({ html: true });

md.use(markdownItDecorateImproved).use(markdownItConfig);

export class EOxStoryTelling extends LitElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      markdown: { attribute: "markdown", type: String },
      markdownURL: { attribute: "markdown-url", type: String },
      nav: { state: true, attribute: false, type: Array },
      showNav: { attribute: "show-nav", type: Boolean },
      showEditor: { attribute: "show-editor", type: Boolean },
      noShadow: { attribute: "no-shadow", type: Boolean },
      unstyled: { type: Boolean },
    };
  }

  /**
   * @type {String} - Generated HTML string using markdown
   */
  #html;

  /**
   * Basic config
   *
   * @type {Object}
   */
  #config = {};
  constructor() {
    super();

    this.#html = undefined;

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
     * Enable or disable editor
     *
     * @type {Boolean}
     */
    this.showEditor = false;

    /**
     * Enable or disable navigation
     *
     * @type {Boolean}
     */
    this.showNav = false;

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
      const unsafeHTML = md.render(this.markdown);

      await validateMarkdownAttrs(md.attrs.sections);

      this.#config = md.config;

      if (typeof this.#config.nav === "boolean")
        this.showNav = this.#config.nav;

      if (this.showNav) this.nav = md.nav;

      this.#html = renderHtmlString(
        DOMPurify.sanitize(unsafeHTML, {
          CUSTOM_ELEMENT_HANDLING: getCustomEleHandling(md),
          ADD_TAGS: DEFAULT_SENSITIVE_TAGS,
        }),
        md.sections,
        this
      );

      this.#html = parseNav(this.#html, this.nav, this.showNav);

      if (this.showEditor) {
        const parent = this.shadowRoot || this;
        const editorDOM = parent.querySelector("eox-storytelling-editor");
        const jsonFormDOM = editorDOM.querySelector("eox-jsonform");

        if (this.markdown !== jsonFormDOM?.value.Story)
          editorDOM.markdown = this.markdown;
      }

      this.requestUpdate();
    }

    // Check if 'nav' property itself has changed and generate anchor click event
    if (changedProperties.has("nav"))
      scrollAnchorClickEvent(this, ".navigation a");
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

  async firstUpdated() {
    addLightBoxScript(this);

    // Check if this.#html is initialized, if not, wait for it
    if (this.#html === undefined) await this.waitForHtmlInitialization();
    scrollIntoView(this);
  }

  // A utility function to pause execution for a given time
  async waitForHtmlInitialization() {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    while (this.#html === undefined) await sleep(100);
  }

  /**
   * Overrides createRenderRoot to handle shadow DOM creation based on the noShadow property.
   */
  createRenderRoot() {
    return this.noShadow ? this : super.createRenderRoot();
  }

  render() {
    return html`
      <slot class="slot-hide" @slotchange=${this.handleSlotChange}></slot>
      <style>
        :host { display: block; }
        .slot-hide { display: none; }
        ${!this.unstyled && styleEOX}
        ${!this.unstyled && mainStyle}
      </style>

      <div class="story-telling">
        <div>${when(this.#html, () => html`${this.#html}`)}</div>
        ${when(
          this.showEditor,
          () => html`
            <eox-storytelling-editor
              .isNavigation=${Boolean(this.showNav)}
              @change=${(e) => {
                if (e.detail) {
                  this.markdown = e.detail.Story;
                  this.requestUpdate();
                }
              }}
            ></eox-storytelling-editor>
          `
        )}
      </div>
    `;
  }
}

customElements.define("eox-storytelling", EOxStoryTelling);
