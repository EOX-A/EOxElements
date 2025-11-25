import { LitElement, html, nothing } from "lit";
import { when } from "lit/directives/when.js";
import { fetchSTAC, parseEntries, updateProperties } from "./helpers/index.js";
import { styleEOX } from "./style.eox.js";
import { Formatters } from "@radiantearth/stac-fields";
import parseBody from "./components/body";
import parseHeader from "./components/header.js";
import parseTags from "./components/tags.js";
import parseFeatured from "./components/featured.js";
import parseFooter from "./components/footer.js";
import "./components/shadow";

/**
 * ### Introduction
 * Working with STAC catalogs, collections and items often times requires
 * to fetch a JSON file, parse its contents and display some of its fields
 * in some formatted way. To make these steps reusable, the `eox-stacinfo`
 * element offers a set of functionalities:
 * - **automatically fetch a STAC file** as soon as the element loads
 * - offer a **property whitelist** functionality to choose which properties to display
 * - display the properties in **configurable sections** (header, body, featured, footer)
 * - allow to **override** any property display for application-specific custom needs
 *
 * The use case for this element is alongside a map which displays STAC files
 * or in a catalog browsing scenario where a quick look at the most important properties
 * is needed.
 *
 * #### Technology
 * Under the hood, this element uses [stac-fields](https://github.com/stac-utils/stac-fields) for parsing and pre-formatting properties.
 *
 * #### Usage
 * Place `<eox-stacinfo></eox-stacinfo>` in your application and set the `for` property to a valid STAC resource URL. The element will fetch the file and display its properties in configurable sections:
 * - `header`: Array of property keys to display at the top
 * - `tags`: Array of property keys to display as tags
 * - `body`: Array of property keys for the main content
 * - `featured`: Array of property keys for prominent display
 * - `footer`: Array of property keys for the bottom section
 *
 * #### Customization
 * - **Slots**: You can override the default rendering of any property by providing a slot with the property name. This enables advanced customization and integration with application-specific UI.
 * - **Unstyled mode**: By setting the `unstyled` property, only minimal styles are applied, allowing for full custom styling and integration into different design systems.
 *
 * @element eox-stacinfo
 */
export class EOxStacInfo extends LitElement {
  static get properties() {
    return {
      allowHtml: { attribute: "allow-html", type: Boolean },
      unstyled: { attribute: "unstyled", type: Boolean },
      for: { attribute: "for", type: String },
      header: { attribute: false, type: Array },
      tags: { attribute: false, type: Array },
      body: { attribute: false, type: Array },
      featured: { attribute: false, type: Array },
      footer: { attribute: false, type: Array },
      stacInfo: { attribute: false, state: true, type: Array },
      stacProperties: { attribute: false, state: true, type: Array },
    };
  }

  constructor() {
    super();

    /**
     * Whether to allow HTML in the property display
     * @type {boolean}
     */
    this.allowHtml = false;

    /**
     * Whether to use unstyled mode
     * @type {boolean}
     */
    this.unstyled = false;

    /**
     * The identifier for the STAC resource to fetch
     * @type {string}
     */
    this.for = "";

    /**
     * Keys of properties to display in the header
     * @type {Array<any>}
     */
    this.header = [];

    /**
     * Keys of properties to display to display as tags
     * @type {Array<any>}
     */
    this.tags = [];

    /**
     * Keys of properties to display to display in the main body
     * @type {Array<any>}
     */
    this.body = [];

    /**
     * Keys of properties to display in the featured section
     * @type {Array<any>}
     */
    this.featured = [];

    /**
     * Keys of properties to display in the footer
     * @type {Array<any>}
     */
    this.footer = [];

    /**
     * The state object containing the fetched STAC information
     * @type {Array<any>}
     */
    this.stacInfo = [];

    /**
     * The state object containing the parsed STAC properties
     * @type {Array<any>}
     */
    this.stacProperties = [];
  }

  /**
   * Lifecycle method called when the element's properties change.
   * Fetches STAC data and updates properties accordingly.
   * @param {Map} _changedProperties
   */
  updated(_changedProperties) {
    if (_changedProperties.has("for")) fetchSTAC(this);
    if (_changedProperties.has("stacInfo")) {
      Formatters.allowHtmlInCommonMark = this.allowHtml !== undefined;
      updateProperties(this);
    }
  }

  /**
   * Renders the HTML template for the component.
   */
  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        ${!this.unstyled && styleEOX}
      </style>
      <slot></slot>
      ${when(
        this.stacInfo.length,
        () => html`
          <!-- Header Component-->
          ${parseHeader(parseEntries(this.header, this))}
          <main>
            ${parseEntries(this.tags, this).length +
              parseEntries(this.body, this).length >
            0
              ? html`
                  <!-- Tags Component-->
                  ${parseTags(parseEntries(this.tags, this))}

                  <!-- Body Component-->
                  ${parseBody(parseEntries(this.body, this))}
                `
              : nothing}

            <!-- Featured Component-->
            ${parseFeatured(parseEntries(this.featured, this, "featured"))}
          </main>

          <!-- Footer Component-->
          ${parseFooter(parseEntries(this.footer, this))}
        `,
        () => html`${nothing}`,
      )}
    `;
  }
}

customElements.define("eox-stacinfo", EOxStacInfo);
