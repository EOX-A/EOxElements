import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import markdownit from "markdown-it";
import markdownitFootnote from "markdown-it-footnote";
import {
  getCustomEleHandling,
  loadMarkdownURL,
  scrollAnchorClickEvent,
  scrollIntoView,
  renderHtmlString,
  parseNavWithAddSection,
  validateMarkdownAttrs,
  addLightBoxScript,
  addCustomSection,
  initSavedMarkdown,
} from "./helpers";
import mainStyle from "@eox/elements-utils/styles/dist/main.style";
import DOMPurify from "isomorphic-dompurify";
import {
  markdownItConfig,
  markdownItDecorateImproved,
} from "./markdown-it-plugin";
import styleEOX from "./style.eox.js";
import "./components/editor";
import {
  DEFAULT_SENSITIVE_TAGS,
  SAMPLE_ELEMENTS,
  CUSTOM_EDITOR_INTERFACES,
} from "./enums";
import _debounce from "lodash.debounce";
const md = /** @type {import("./types").CustomMarkdownIt} */ (
  markdownit({ html: true })
);

md.use(markdownItDecorateImproved).use(markdownItConfig);
md.use(markdownitFootnote);
/**
 * Manage drawn features on a map
 *
 * @element eox-storytelling
 */
export class EOxStoryTelling extends LitElement {
  // Define properties with defaults and types
  static get properties() {
    return {
      markdown: { attribute: "markdown", type: String },
      markdownURL: { attribute: "markdown-url", type: String },
      nav: { state: true, attribute: false, type: Array },
      showNav: { attribute: "show-nav", type: Boolean },
      showEditor: { attribute: "show-editor", type: String },
      noShadow: { attribute: "no-shadow", type: Boolean },
      disableAutosave: { attribute: "disable-autosave", type: Boolean },
      unstyled: { type: Boolean },
      addCustomSectionIndex: { type: Number, state: true },
      selectedCustomElement: { type: Object, state: true },
    };
  }

  /**
   * @type {HTMLElement[]} - Generated HTML Elements using markdown
   */
  #html;

  /**
   * Basic config
   *
   * @type {Object}
   */
  #config = {};

  /**
   * Debounce update markdown
   *
   * @type {Object}
   */
  #debounceUpdateMarkdown = null;
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
     * Disable auto save
     *
     * @type {Boolean}
     */
    this.disableAutosave = false;

    /**
     * Enable or disable editor
     *
     * @type {String | "closed" | undefined}
     */
    this.showEditor = undefined;

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

    /**
     * custom section index
     *
     * @type {Number}
     */
    this.addCustomSectionIndex = -1;

    /**
     * Selected custom element object
     *
     * @type {Object | null}
     */
    this.selectedCustomElement = null;
  }

  /**
   * @param {Element} element - Dom element
   */
  #dispatchInitEvent(element) {
    this.dispatchEvent(
      new CustomEvent("init", {
        detail: element,
      }),
    );
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
      if (this.markdown) {
        this.dispatchEvent(
          new CustomEvent("changed", {
            detail: this.markdown,
          }),
        );
      }

      const unsafeHTML = md.render(this.markdown);

      validateMarkdownAttrs(md.attrs.sections, this);

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
        this.#dispatchInitEvent.bind(this),
        this,
      );

      this.#html = parseNavWithAddSection(
        this.#html,
        this.nav,
        this.showNav,
        this.showEditor,
        this,
      );

      if (this.showEditor !== undefined) {
        const parent = this.shadowRoot || this;
        /**
         * @type {EOxStoryTelling}
         */
        const editorDOM = parent.querySelector("eox-storytelling-editor");
        /**
         * @type {import("@eox/jsonform").EOxJSONForm}
         */
        const jsonFormDOM = editorDOM.querySelector("eox-jsonform");

        // @ts-expect-error Story is not by default part of value, but only in this case
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
    this.#debounceUpdateMarkdown = _debounce((e) => {
      if (e.detail) {
        this.markdown = e.detail.Story;
        this.requestUpdate();
      }
    }, 1000);

    if (!this.disableAutosave) {
      initSavedMarkdown(this);
    }
    addLightBoxScript();

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
    const editorClass = `${
      this.showEditor !== undefined ? "editor-enabled" : ""
    } editor-${this.showEditor}`;

    return html`
      <slot class="slot-hide" @slotchange=${this.handleSlotChange}></slot>
      <style>
        :host { display: block; }
        .slot-hide { display: none; }
        ${!this.unstyled && styleEOX}
        ${!this.unstyled && mainStyle}
      </style>

      <div class="story-telling ${editorClass}">
        <div>${when(this.#html, () => html`${this.#html}`)}</div>
        ${when(
          this.showEditor !== undefined,
          () => html`
            <eox-storytelling-editor
              .isNavigation=${Boolean(this.showNav)}
              .storyId=${this.id}
              show-editor=${this.showEditor}
              @change=${this.#debounceUpdateMarkdown}
              .markdown=${this.markdown}
              .disableAutosave=${this.disableAutosave}
            ></eox-storytelling-editor>
          `,
        )}
      </div>

      ${when(
        this.addCustomSectionIndex > -1,
        () => html`
          <div class="story-telling-custom-section-list">
            <div
              class="overlay-popup"
              @click=${() => {
                this.addCustomSectionIndex = -1;
                this.selectedCustomElement = null;
                this.requestUpdate();
              }}
            ></div>
            <div class="story-telling-popup">
              ${when(
                this.selectedCustomElement,
                () => html`
                  <div class="story-telling-section-fields">
                    <div
                      class="story-telling-section-fields-overlay"
                      @click=${() => {
                        this.selectedCustomElement = null;
                        this.requestUpdate();
                      }}
                    ></div>
                    <div class="story-telling-section-fields-wrapper">
                      <div class="story-telling-section-fields-overflow">
                        <eox-jsonform
                          id="storytelling-editor-fields"
                          no-shadow
                          .schema=${this.selectedCustomElement.fields}
                          .customEditorInterfaces=${CUSTOM_EDITOR_INTERFACES}
                        ></eox-jsonform>
                      </div>
                      <div class="story-telling-section-submit-wrapper">
                        <button
                          @click=${() =>
                            addCustomSection(
                              this.markdown,
                              this.addCustomSectionIndex,
                              this.selectedCustomElement.markdown,
                              this.selectedCustomElement.fields,
                              true,
                              this,
                            )}
                        >
                          Add Section
                        </button>
                      </div>
                    </div>
                  </div>
                `,
              )}
              <div class="story-telling-popup-wrapper">
                ${SAMPLE_ELEMENTS.map(
                  (category) => html`
                    <div class="header">
                      <h4>${category.name}</h4>
                      <p>${category.elements.length}</p>
                    </div>
                    <hr />
                    <div class="grid-container">
                      ${category.elements.map(
                        (element) =>
                          html`<div
                            @click=${() =>
                              addCustomSection(
                                this.markdown,
                                this.addCustomSectionIndex,
                                element.markdown,
                                element.fields,
                                false,
                                this,
                              )}
                            class="grid-item"
                          >
                            <icon id="${element.id}"></icon>
                            <p>${element.name}</p>
                            <style>
                              icon#${element.id}::before {
                                content: url("${element.icon}");
                              }
                            </style>
                          </div>`,
                      )}
                    </div>
                  `,
                )}
              </div>
            </div>
          </div>
        `,
      )}
    `;
  }
}

customElements.define("eox-storytelling", EOxStoryTelling);
