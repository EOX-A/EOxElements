import { LitElement, html, nothing } from "lit";
import { when } from "lit/directives/when.js";
import { fetchSTAC, parseEntries, updateProperties } from "./helpers/index.js";
import { style } from "./style.js";
import { styleEOX } from "./style.eox.js";
import { Formatters } from "@radiantearth/stac-fields";
import "./components/shadow";
import "./components/header";
import "./components/tags";
import "./components/properties";
import "./components/featured";
import "./components/footer";

/**
 * ### Introduction
 * Working with STAC catalogs, collections and items often times requires
 * to fetch a JSON file, parse its contents and display some of its fields
 * in some formatted way. To make these steps reusable, the `eox-stacinfo`
 * element offers a set of functionalities:
 * - **automatically fetch a STAC file** as soon as the element loads
 * - offer a **property whitelist** functionality to choose which properties to display
 * - display the properties in **configurable sections** (header, featured, footer)
 * - allow to **override** any property display for application-specific custom needs
 *
 * The use case for this element is alongside a map which displays STAC files
 * or in a catalog browsing scenario where a quick look at the most important properties
 * is needed.
 *
 * #### Technology
 * Under the hood, this element uses [stac-fields](https://github.com/stac-utils/stac-fields) for parsing and pre-formatting properties.
 *
 * @module EOxStacInfo
 * @extends {import("lit").LitElement}
 */
export class EOxStacInfo extends LitElement {
  static get properties() {
    return {
      allowHtml: { attribute: "allow-html", type: Boolean },
      unstyled: { attribute: "unstyled", type: Boolean },
      for: { attribute: "for", type: String },
      header: { attribute: false, type: Array },
      tags: { attribute: false, type: Array },
      properties: { attribute: false, type: Array },
      featured: { attribute: false, type: Array },
      footer: { attribute: false, type: Array },
      stacInfo: { attribute: false, state: true, type: Array },
      stacProperties: { attribute: false, state: true, type: Array },
    };
  }

  constructor() {
    super();

    /**
     * Whether to allow HTML in the property display.
     * @type {boolean}
     */
    this.allowHtml = false;

    /**
     * Whether to use unstyled mode.
     * @type {boolean}
     */
    this.unstyled = false;

    /**
     * The identifier for the STAC resource to fetch.
     * @type {string}
     */
    this.for = "";

    /**
     * Array of header properties to display.
     * @type {Array}
     */
    this.header = [];

    /**
     * Array of tags to display.
     * @type {Array}
     */
    this.tags = [];

    /**
     * Array of properties to display.
     * @type {Array}
     */
    this.properties = [];

    /**
     * Array of featured properties to display.
     * @type {Array}
     */
    this.featured = [];

    /**
     * Array of footer properties to display.
     * @type {Array}
     */
    this.footer = [];

    /**
     * The state object containing the fetched STAC information.
     * @type {Array}
     */
    this.stacInfo = [];

    /**
     * The state object containing the STAC properties.
     * @type {Array}
     */
    this.stacProperties = [];
  }

  /**
   * Lifecycle method called when the element's properties change.
   * Fetches STAC data and updates properties accordingly.
   *
   * @param {Map} _changedProperties - The properties that changed.
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
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <slot></slot>
      ${when(
        this.stacInfo.length,
        () => html`
          <eox-stacinfo-header
            .header=${parseEntries(this.header, this)}
          ></eox-stacinfo-header>
          <main>
            ${parseEntries(this.tags, this).length +
              parseEntries(this.properties, this).length >
            0
              ? html`
                  <eox-stacinfo-tags
                    .tags=${parseEntries(this.tags, this)}
                  ></eox-stacinfo-tags>
                  <eox-stacinfo-properties
                    .properties=${parseEntries(this.properties, this)}
                  ></eox-stacinfo-properties>
                `
              : nothing}
            <eox-stacinfo-featured
              .featured=${parseEntries(this.featured, this, "featured")}
            ></eox-stacinfo-featured>
          </main>
          <eox-stacinfo-footer
            .footer=${parseEntries(this.footer, this)}
          ></eox-stacinfo-footer>
        `,
        () => html`${nothing}`
      )}
    `;
  }
}

customElements.define("eox-stacinfo", EOxStacInfo);
