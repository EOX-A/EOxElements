import { LitElement, html, nothing } from "lit";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";
import { fetchSTAC, transformProperties } from "./helpers";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import { Formatters } from "@radiantearth/stac-fields";
import "./components/shadow";
import "./components/header";
import "./components/tags";
import "./components/properties";

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
      styleOverride: { type: String, attribute: "style-override" },
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
    this.styleOverride = "";
    this.stacInfo = [];
    this.stacProperties = [];
  }

  parseEntries(list, type) {
    return transformProperties(
      Object.entries(this.stacProperties)
        .filter(([key]) => {
          return list === this.properties && (!list || list.length < 1)
            ? true
            : list?.includes(key);
        })
        .reverse()
        .sort(([keyA], [keyB]) =>
          list?.indexOf(keyA) > list?.indexOf(keyB) ? 1 : -1
        ),
      type
    );
  }

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
        ${this.styleOverride}
      </style>
      <slot></slot>
      ${when(
        this.stacInfo.length,
        () => html`
          <eox-stacinfo-header
            .header=${this.parseEntries(this.header)}
          ></eox-stacinfo-header>
          <main>
            ${this.parseEntries(this.tags).length +
              this.parseEntries(this.properties).length >
            0
              ? html`
                  <eox-stacinfo-tags
                    .tags=${this.parseEntries(this.tags)}
                  ></eox-stacinfo-tags>
                  <eox-stacinfo-properties
                    .properties=${this.parseEntries(this.properties)}
                  ></eox-stacinfo-properties>
                `
              : nothing}
            ${this.parseEntries(this.featured, "featured").length > 0
              ? html`
                  <section id="featured" part="featured">
                    ${map(
                      this.parseEntries(this.featured, "featured").filter(
                        ([_, value]) =>
                          value.length !== undefined ? value.length > 0 : true
                      ),
                      ([, value]) => html`
                        <details>
                          <summary>
                            <span
                              name="featured-${value.label.toLowerCase()}-summary"
                              class="title"
                            >
                              ${value.label}
                              ${when(
                                value.length,
                                () => html`
                                  <span class="count">${value.length}</span>
                                `
                              )}
                            </span>
                          </summary>
                          <div class="featured-container">
                            ${when(
                              value.label.toLowerCase() === "description",
                              () => html`
                                <eox-stacinfo-shadow
                                  .content=${value.formatted}
                                >
                                </eox-stacinfo-shadow>
                              `,
                              () => html`${unsafeHTML(value.formatted)}`
                            )}
                          </div>
                        </details>
                      `
                    )}
                  </section>
                `
              : nothing}
          </main>
          ${this.parseEntries(this.footer).length > 0
            ? html`
                <footer part="footer">
                  <slot name="footer">
                    ${map(
                      this.parseEntries(this.footer),
                      ([key, value], index) => staticHTML`
                <div class="footer-container">
                  <h${unsafeStatic((index + 1).toString())}>
                    ${unsafeHTML(value.label)}
                  </h${unsafeStatic((index + 1).toString())}>
                  <small>${unsafeHTML(value.formatted)}</small>
                </div>
                ${when(
                  key === "sci:citation",
                  () => html`
                    <button
                      class="copy icon"
                      @click=${() =>
                        navigator.clipboard.writeText(value.formatted)}
                    >
                      copy
                    </button>
                  `
                )}
              `
                    )}
                  </slot>
                </footer>
              `
            : nothing}
        `,
        () => html`${nothing}`
      )}
    `;
  }

  updated(_changedProperties) {
    if (_changedProperties.has("for")) {
      fetchSTAC(this);
    }
    if (_changedProperties.has("stacInfo")) {
      Formatters.allowHtmlInCommonMark = this.allowHtml !== undefined;
      if (this.stacInfo.length) {
        this.stacProperties = this.stacInfo.reduce(
          (acc, curr) => ({
            ...acc,
            ...curr.properties,
          }),
          {}
        );
        this.requestUpdate();
      }
    }
  }
}

customElements.define("eox-stacinfo", EOxStacInfo);
