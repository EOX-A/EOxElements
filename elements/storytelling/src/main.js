import { LitElement, html } from "lit";
import { when } from "lit/directives/when.js";
import {
  loadMarkdownURL,
  scrollAnchorClickEvent,
  scrollIntoView,
  renderHtmlString,
  parseNavWithAddSection,
  validateMarkdownAttrs,
  addLightBoxScript,
  addCustomSection,
  initSavedMarkdown,
  md,
  renderAndSanitizeMarkdown,
} from "./helpers";
import styleEOX from "./style.eox.js";
import "./components/editor";
import "./components/text-section";
import "./components/hero-section";
import "./components/tour-step";
import "./components/tour-section";
import { SAMPLE_ELEMENTS, CUSTOM_EDITOR_INTERFACES } from "./enums";
import _debounce from "lodash.debounce";
/**
 * The `eox-storytelling` element enables the creation of interactive, multimedia-rich stories using Markdown and custom sections. It supports advanced features such as slot-based content, remote Markdown loading, and custom initialization logic via events.
 *
 * ## Usage
 * Place `<eox-storytelling></eox-storytelling>` in your application and pass Markdown content via the `markdown` property, slot, or a remote URL using the `markdown-url` property. The component automatically renders the story, including custom sections such as maps, images, and videos, using extended Markdown syntax and HTML comments for configuration.
 *
 * ## Features
 * - **Markdown Rendering:** Supports standard and extended Markdown syntax for rich story content.
 * - **Slot Content:** Accepts Markdown via slot for flexible content injection.
 * - **Remote Markdown:** Loads Markdown from external URLs for dynamic stories.
 * - **Custom Sections:** Add maps, images, videos, and more using HTML comment configuration.
 * - **Events:** Emits events such as `init` for custom initialization logic (e.g., map projection setup).
 *
 * ## Custom Markdown Extensions
 * In order to add custom functionality to the Markdown rendering, include HTML comments with a specific syntax: `<!--{ key="value" }-->`. Here are some of the supported extensions:
 * - **Section Configuration:** Define sections with attributes like `as`, `id`, `class`, `style`, and more.
 * - **Hero Section:** Create a full-screen hero section using `#` (Header 1) with additional attributes for images or videos.
 * - **Navigation Control:** Use the `nav` attribute to control the visibility of the navigation menu.
 * - **Custom Attributes:** Use HTML comments to define attributes for sections, such as `as`, `class`, `style`, and more.
 *
 * Read the [Markdown with Tour story](./?path=/story/elements-eox-storytelling--markdown-tour) for a comprehensive guide on using Markdown extensions.
 *
 * @element eox-storytelling
 * @property {Array<any>} [children] - Slotted children flat components
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
      showHeroScrollIndicator: {
        attribute: "show-hero-scroll-indicator",
        type: Boolean,
      },
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
     * @deprecated Will be removed in the next major version
     * @type {Boolean}
     */
    this.disableAutosave = false;

    /**
     * Enable or disable editor
     *
     * @deprecated Will be removed in the next major version
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
     * Enable or disable hero scroll indicator
     *
     * @type {Boolean}
     */
    this.showHeroScrollIndicator = false;

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

    /**
     * @type {HTMLElement | null}
     */
    this._slottedNavHtml = null;
  }

  /**
   * @param {Element} element - Dom element
   */
  #dispatchInitEvent(element) {
    /**
     * Fires when `eox-storytelling` has initialized; allowing to add custom logic
     * regarding the integrated `eox-maps` etc. The event detail contains the initialized element.
     */
    this.dispatchEvent(
      new CustomEvent("init", {
        detail: element,
      }),
    );
  }

  /**
   * Dummy placeholder for file upload event dispatching
   * as it is actually displatched from ./enums/custom-editor-interface.js
   */
  // @ts-expect-error Not used, since it is a dummy placeholder
  // eslint-disable-next-line
  #dispatchUploaded() {
    /**
     * Fires when a file is uploaded via the built-in editor. The event detail contains the uploaded file as well
     * as a callback function that can be used to update the file url end handle errors.
     * @deprecated Will be removed in the next major version
     */
    this.dispatchEvent(
      new CustomEvent("upload:file", {
        detail: "dummy",
        bubbles: true,
        composed: true,
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
          /**
           * Fires when the markdown content has changed. The event detail contains the updated markdown string.
           */
          new CustomEvent("changed", {
            detail: this.markdown,
          }),
        );

        const sanitizedHTML = renderAndSanitizeMarkdown(this.markdown);

        validateMarkdownAttrs(md.attrs.sections, this);

        this.#config = md.config;

        if (typeof this.#config.nav === "boolean")
          this.showNav = this.#config.nav;

        if (this.showNav) this.nav = md.nav;

        this.#html = renderHtmlString(
          sanitizedHTML,
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
      } else {
        this.#html = undefined;
      }

      this.requestUpdate();
    }

    // Check if 'nav' property itself has changed and generate anchor click event
    if (changedProperties.has("nav"))
      scrollAnchorClickEvent(this, ".navigation a");

    if (
      changedProperties.has("showNav") ||
      changedProperties.has("_isSlottedMode")
    ) {
      if (this._isSlottedMode) {
        this._handleSlottedChildrenChange();
      }
    }
  }

  /**
   * Handles changes to the slot's content, updating the component's internal state.
   *
   * @param {HTMLSlotElement} [slotElement]
   */
  handleSlotChange(slotElement) {
    // Query the shadow DOM for the slot element
    const slot = slotElement || this.shadowRoot.querySelector("slot");

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

  /**
   * Main slot change handler that routes based on mode
   */
  _handleSlotChange() {
    /**
     * @type {HTMLElement[]}
     */
    const flatElements = /** @type {HTMLElement[]} */ (
      Array.from(this.children).filter(
        (node) =>
          node instanceof HTMLElement &&
          (node.tagName.toLowerCase() === "eox-a2ui-element" ||
            (node.tagName.toLowerCase().startsWith("eox-storytelling-") &&
              node.tagName.toLowerCase() !== "eox-storytelling")),
      )
    );

    if (flatElements.length > 0) {
      this._isSlottedMode = true;

      // Update slots for hero elements
      flatElements.forEach((el, index) => {
        const isHero =
          el.tagName.toLowerCase() === "eox-storytelling-hero" ||
          (el.tagName.toLowerCase() === "eox-a2ui-element" &&
            (el.querySelector("eox-storytelling-hero") ||
              /** @type {any} */ (el).context?.componentModel?.type ===
                "EOxStorytellingHero"));

        if (index === 0 && isHero) {
          if (el.getAttribute("slot") !== "hero") {
            el.setAttribute("slot", "hero");
          }
        } else {
          if (el.getAttribute("slot") === "hero") {
            el.removeAttribute("slot");
          }
        }
      });

      this._handleSlottedChildrenChange();
    } else {
      this._isSlottedMode = false;
      this.handleSlotChange();
    }
  }

  /**
   * Handles changes to the slotted children in flat-component mode
   */
  _handleSlottedChildrenChange() {
    /**
     * @type {HTMLElement[]}
     */
    const flatElements = /** @type {HTMLElement[]} */ (
      Array.from(this.children).filter(
        (node) =>
          node instanceof HTMLElement &&
          (node.tagName.toLowerCase() === "eox-a2ui-element" ||
            (node.tagName.toLowerCase().startsWith("eox-storytelling-") &&
              node.tagName.toLowerCase() !== "eox-storytelling")),
      )
    );

    if (flatElements.length > 0) {
      flatElements.forEach((el) => {
        el.classList.remove(
          "section-start",
          "section-end",
          "section-after-nav",
          "section-item",
        );
      });

      const navIndex = this.showNav ? 0 : -1;
      const sectionStartIndex = navIndex + 1;

      flatElements.forEach((el, index) => {
        el.classList.add("section-item");
        if (index === 0) {
          el.classList.add("section-start");
        }
        if (index === flatElements.length - 1) {
          el.classList.add("section-end");
        }
        if (index === sectionStartIndex) {
          el.classList.add("section-after-nav");
        }
      });
    }

    if (this.showNav) {
      this.nav = flatElements
        .filter((child) => {
          const childAny = /** @type {any} */ (child);
          const inner =
            child.tagName.toLowerCase() === "eox-a2ui-element"
              ? child.querySelector("*")
              : child;
          const tagName = inner
            ? inner.tagName.toLowerCase()
            : child.tagName.toLowerCase();

          // Exclude hero components from the navigation list
          const isHero =
            tagName === "eox-storytelling-hero" ||
            (child.tagName.toLowerCase() === "eox-a2ui-element" &&
              childAny.context?.componentModel?.type === "EOxStorytellingHero");

          return !isHero;
        })
        .map((child) => {
          const childAny = /** @type {any} */ (child);
          const inner =
            child.tagName.toLowerCase() === "eox-a2ui-element"
              ? child.querySelector("*")
              : child;
          const innerAny = /** @type {any} */ (inner);
          const id =
            child.id ||
            child.getAttribute("id") ||
            (child.tagName.toLowerCase() === "eox-a2ui-element" &&
              childAny.context?.componentModel?.id) ||
            (inner && (inner.id || inner.getAttribute("id"))) ||
            "";
          let title =
            (innerAny &&
              ("title" in innerAny
                ? innerAny.title
                : innerAny.getAttribute("title"))) ||
            child.getAttribute("title") ||
            (child.tagName.toLowerCase() === "eox-a2ui-element" &&
              (childAny.context?.componentModel?.properties?.title ||
                childAny.context?.componentModel?.title ||
                childAny.controller?.props?.title)) ||
            "";

          if (!title) {
            let markdown = "";
            if (
              innerAny &&
              "markdown" in innerAny &&
              typeof innerAny.markdown === "string"
            ) {
              markdown = innerAny.markdown;
            } else if (
              child.tagName.toLowerCase() === "eox-a2ui-element" &&
              typeof childAny.context?.componentModel?.properties?.markdown ===
                "string"
            ) {
              markdown = childAny.context?.componentModel?.properties?.markdown;
            }

            if (markdown) {
              const headingMatch = markdown.match(/^\s*##\s+(.+)$/m);
              if (headingMatch) {
                title = headingMatch[1].replace(/<!--[\s\S]*?-->/g, "").trim();
              }
            }
          }
          let navState = true;
          let attrNav =
            child.getAttribute("nav") || (inner && inner.getAttribute("nav"));
          if (
            attrNav === null &&
            child.tagName.toLowerCase() === "eox-a2ui-element"
          ) {
            attrNav =
              childAny.context?.componentModel?.properties?.nav ||
              childAny.context?.componentModel?.nav ||
              childAny.controller?.props?.nav;
          }
          if (attrNav === "false" || /** @type {any} */ (attrNav) === false) {
            navState = false;
          }

          return {
            id,
            title,
            state: navState,
          };
        })
        .filter((item) => item.id && item.title);

      if (this.nav.length) {
        const parser = new DOMParser();
        const navHtml = `
          <div class="navigation">
            <div class="container nav-container">
              <span class="hamburger-menu" aria-label="Toggle navigation"></span>
              <div class="nav-overlay"></div>
              <ul class="nav-list">
                ${this.nav
                  .map(({ id, title, state }) =>
                    state
                      ? `<li class="nav-${id} center-align"><a href="#${id}"><small class="truncate">${title}</small></a></li>`
                      : "",
                  )
                  .join("")}
              </ul>
            </div>
          </div>
        `;
        const navDOM = /** @type {HTMLElement} */ (
          parser.parseFromString(navHtml, "text/html").body.firstChild
        );

        // Add click handler for hamburger menu
        const hamburgerBtn = navDOM.querySelector(".hamburger-menu");
        const navList = navDOM.querySelector(".navigation .container ul");
        const navOverlay = navDOM.querySelector(".nav-overlay");
        const navListItems = navDOM.querySelectorAll(".nav-list li");

        if (hamburgerBtn && navList) {
          const navEventHandlers = () => {
            hamburgerBtn.classList.toggle("active");
            navList.classList.toggle("show");
            navOverlay.classList.toggle("show");
          };
          hamburgerBtn.addEventListener("click", () => navEventHandlers());
          navOverlay.addEventListener("click", () => navEventHandlers());
          navListItems.forEach((item) => {
            item.addEventListener("click", () => navEventHandlers());
          });
        }

        // Attach click event listeners
        navDOM.querySelectorAll(".navigation a").forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            window.parent.location.hash = /** @type {HTMLAnchorElement} */ (
              e.currentTarget
            ).hash.replace("#", "");
            scrollIntoView(this);
          });
        });

        // Setup IntersectionObserver for active state
        const sectionNavObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const intersecting = entry.isIntersecting;
              const id = entry.target.getAttribute("id");
              if (intersecting) {
                const root = this.shadowRoot || this;
                root.querySelectorAll(".navigation li").forEach((navItem) => {
                  if (navItem.classList.contains(`nav-${id}`)) {
                    navItem.classList.add("active");
                  } else {
                    navItem.classList.remove("active");
                  }
                });
              }
            });
          },
          { rootMargin: "-50% 0px" },
        );

        flatElements.forEach((child) => {
          if (child.id) {
            sectionNavObserver.observe(child);
          }
        });

        this._slottedNavHtml = navDOM;
      } else {
        this._slottedNavHtml = null;
      }
    } else {
      this._slottedNavHtml = null;
    }
    this.requestUpdate();
  }

  async firstUpdated() {
    if (this.showEditor !== undefined) {
      console.info(
        "The built-in editor and the `show-editor` property are deprecated and will be removed in the next major version.",
      );
    }

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
    if (this.markdown || this.markdownURL) {
      if (this.#html === undefined) await this.waitForHtmlInitialization();
    }
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

    const navClass = `${this.showNav && this.nav.length ? "nav-enabled" : ""}`;
    const isSlotted =
      this._isSlottedMode && !this.markdown && !this.markdownURL;

    return html`
      <style>
        :host { display: block; }
        .slot-hide { display: none; }
        ${!this.unstyled && styleEOX}
      </style>

      <div class="story-telling ${editorClass} ${navClass}">
        <div class="story-telling-content">
          ${when(this.#html, () => html`${this.#html}`)}
          ${isSlotted
            ? html`
                <slot name="hero" @slotchange=${this._handleSlotChange}></slot>
                ${this._slottedNavHtml || ""}
                <slot @slotchange=${this._handleSlotChange}></slot>
              `
            : html`
                <slot
                  class="slot-hide"
                  @slotchange=${this._handleSlotChange}
                ></slot>
              `}
        </div>
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
            </div>
          </div>
        `,
      )}
    `;
  }
}

customElements.define("eox-storytelling", EOxStoryTelling);

export { blocksToMarkdown, markdownToBlocks } from "./helpers";
