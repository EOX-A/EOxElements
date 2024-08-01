import { LitElement, html, nothing } from "lit";
import { when } from "lit/directives/when.js";
import {
  fetchSTAC,
  parseEntries,
  updateProperties,
} from "./helpers/index.js";
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
 */
class EOxStacInfo extends LitElement {
  static get properties() {
    return {
      allowHtml: { type: Boolean, attribute: "allow-html" },
      unstyled: { type: Boolean },
      for: { type: String },
      header: { type: Array },
      tags: { type: Array },
      properties: { type: Array },
      featured: { type: Array },
      footer: { type: Array },
      stacInfo: { state: true },
      stacProperties: { state: true },
    };
  }

  constructor() {
    super();
    this.allowHtml = false;
    this.unstyled = false;
    this.for = "";
    this.header = [];
    this.tags = [];
    this.properties = [];
    this.featured = [];
    this.footer = [];
    this.stacInfo = [];
    this.stacProperties = [];
  }

  updated(_changedProperties) {
    if (_changedProperties.has("for")) fetchSTAC(this);
    if (_changedProperties.has("stacInfo")) {
      Formatters.allowHtmlInCommonMark = this.allowHtml !== undefined;
      updateProperties(this);
    }
  }

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
