import { LitElement, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html as staticHTML, unsafeStatic } from "lit/static-html.js";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import StacFields from "@radiantearth/stac-fields";
import { STAC } from "stac-js";

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
@customElement("eox-stacinfo")
export class EOxStacInfo extends LitElement {
  @property({ type: Boolean })
  unstyled: boolean;

  @property()
  for: string;

  @property({ type: Array })
  header: Array<string> = [];

  @property({ type: Array })
  properties: Array<string> = [];

  @property({ type: Array })
  featured: Array<string> = [];

  @property({ type: Array })
  footer: Array<string> = [];

  @state()
  stacInfo: Array<typeof STAC> = [];

  @state()
  public stacProperties: Array<typeof STAC>;

  fetchStac = async (url: string) => {
    const response = await fetch(`${url}?ts=${Date.now()}`);
    const stac = await response.json();
    this.stacInfo = await this.parseStac(stac);
    this.dispatchEvent(new CustomEvent("loaded"));
  };

  parseStac = async (stac: typeof STAC) => {
    if (stac.type === "Catalog") {
      return StacFields.formatCatalog(stac);
    }
    if (stac.type === "Collection") {
      return StacFields.formatCollection(stac);
    }
    if (stac.type === "Feature") {
      return StacFields.formatItemProperties(stac);
    }
  };

  buildProperties(stacArray: Array<typeof STAC>) {
    const parseEntries = (list: Array<string>) =>
      Object.entries(this.stacProperties)
        .filter(([key]) => {
          return list === this.properties && (!list || list.length < 1)
            ? true
            : list?.includes(key);
        })
        .reverse()
        .sort(([keyA], [keyB]) =>
          list?.indexOf(keyA) > list?.indexOf(keyB) ? 1 : -1
        );
    if (stacArray.length < 1) {
      return null;
    }
    // Throwing all properties from all extensions into one object
    // TODO render extensions in separate sections?
    this.stacProperties = stacArray.reduce(
      (acc, curr) => ({
        ...acc,
        ...curr.properties,
      }),
      {}
    );
    return html`
      ${parseEntries(this.header).length > 0
        ? html`
            <header part="header">
              <slot name="header">
                ${map(
                  parseEntries(this.header),
                  ([, value], index) => staticHTML`
              <h${unsafeStatic((index + 1).toString())}>${unsafeHTML(
                    value.formatted
                  )}</h${unsafeStatic((index + 1).toString())}>
              `
                )}
              </slot>
            </header>
          `
        : nothing}
      <main>
        ${parseEntries(this.properties).length > 0
          ? html`
              <section id="properties" part="properties">
                <ul>
                  ${map(
                    parseEntries(this.properties),
                    ([, value]) => html`
                      <slot name=${value.label.toLowerCase()}>
                        <li>
                          <span class="label">
                            ${
                              // TODO
                              // @ts-ignore
                              value.label
                            } </span
                          >:
                          <span class="value">
                            ${
                              // TODO
                              // @ts-ignore
                              unsafeHTML(value.formatted)
                            }
                          </span>
                        </li>
                      </slot>
                    `
                  )}
                </ul>
              </section>
            `
          : nothing}
        ${parseEntries(this.featured).length > 0
          ? html`
              <section id="featured" part="featured">
                ${map(
                  parseEntries(this.featured),
                  ([, value]) => html`
                    <details>
                      <summary>
                        <slot
                          name="featured-${value.label.toLowerCase()}-summary"
                        >
                          ${
                            // TODO
                            // @ts-ignore
                            value.label
                          }
                        </slot>
                      </summary>
                      <slot name="featured-${value.label.toLowerCase()}">
                        ${unsafeHTML(
                          // TODO
                          // @ts-ignore
                          value.formatted
                        )}
                      </slot>
                    </details>
                  `
                )}
              </section>
            `
          : nothing}
      </main>
      ${parseEntries(this.footer).length > 0
        ? html`
            <footer part="footer">
              <slot name="footer">
                ${map(
                  parseEntries(this.footer),
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
                    <div>
                      <button
                        class="copy icon-text"
                        @click=${() =>
                          navigator.clipboard.writeText(value.formatted)}
                      >
                        copy
                      </button>
                    </div>
                  `
                )}
              `
                )}
              </slot>
            </footer>
          `
        : nothing}
    `;
  }

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <slot></slot>
      ${this.buildProperties(this.stacInfo)}
    `;
  }

  protected updated(
    _changedProperties: PropertyValues<string> | Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has("for")) {
      this.fetchStac(this.for);
    }
  }
}
