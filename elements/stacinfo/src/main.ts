import { html, nothing, PropertyValueMap } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import StacFields from "@radiantearth/stac-fields";
import { STAC } from "stac-js";
import { TemplateElement } from "../../../utils/templateElement";

@customElement("eox-stacinfo")
export class EOxStacInfo extends TemplateElement {
  @property({ type: Boolean })
  unstyled: boolean;

  @property()
  for: string;

  @property({ type: Array })
  properties: Array<string> = [];

  @property({ type: Array })
  featured: Array<string> = [];

  @state()
  stacInfo: Array<typeof STAC> = [];

  fetchStac = async (url: string) => {
    const response = await fetch(`${url}?ts=${Date.now()}`);
    const stac = await response.json();
    this.stacInfo = await this.parseStac(stac);
  };

  parseStac = async (stac: typeof STAC) => {
    // Custom fetching logic for story assets
    // TODO keep this? Or have markdown in description
    if (stac.assets?.story) {
      // TEMP for demo
      stac.assets.story.href =
        "https://raw.githubusercontent.com/eurodatacube/eodash/staging/app/public/eodash-data/stories/E10a6.md";
      const response = await fetch(stac.assets.story.href);
      const text = await response.text();
      if (response.status < 400) {
        stac.description = text;
      } else {
        console.error(`Story loading failed! ${text}`);
      }
    }
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
    const propertyFilter = this.properties.length > 0;
    if (stacArray.length < 1) {
      return null;
    }
    // Throwing all properties from all extensions into one object
    // TODO render extensions in separate sections?
    const stacProperties = stacArray.reduce(
      (acc, curr) => ({
        ...acc,
        ...curr.properties,
      }),
      {}
    );
    return html`
      <h1>
        ${(propertyFilter ? this.properties.includes("title") : true)
          ? stacProperties.title?.formatted
          : nothing}
      </h1>
      <p>
        ${(propertyFilter ? this.properties.includes("description") : true)
          ? unsafeHTML(stacProperties.description?.formatted)
          : nothing}
      </p>
      <ul part="properties">
        ${map(
          Object.entries(stacProperties)
            .filter(([key]) => {
              // title and description are always shonw on top, if available
              // don't show links by default // TODO
              return !["title", "description", "links"].includes(key);
            })
            .filter(([key]) =>
              !propertyFilter ? true : this.properties.includes(key)
            )
            .reverse()
            .sort(([keyA], [keyB]) =>
              this.properties.indexOf(keyA) > this.properties.indexOf(keyB)
                ? 1
                : -1
            ),
          ([key, value]) =>
            this.hasTemplate(key)
              ? html`${this.renderTemplate(key, stacProperties[key], key)}`
              : html`
                  <li>
                    <span class="label"
                      >${
                        // TODO
                        // @ts-ignore
                        value.label
                      }</span
                    >:
                    <span class="value"
                      >${
                        // TODO
                        // @ts-ignore
                        unsafeHTML(value.formatted)
                      }</span
                    >
                  </li>
                `
        )}
      </ul>
      ${map(
        Object.entries(stacProperties)
          .filter(([key]) => this.featured.includes(key))
          .reverse()
          .sort(([keyA], [keyB]) =>
            this.properties.indexOf(keyA) > this.properties.indexOf(keyB)
              ? 1
              : -1
          ),
        ([key, value]) => html`
          <details>
            <summary>
              ${
                // TODO
                // @ts-ignore
                value.label
              }
            </summary>
            ${this.hasTemplate(key)
              ? html`${this.renderTemplate(key, stacProperties[key], key)}`
              : unsafeHTML(
                  // TODO
                  // @ts-ignore
                  value.formatted
                )}
          </details>
        `
      )}
    `;
  }

  render() {
    return html`
      <style>
        ${style}
        ${!this.unstyled && styleEOX}
      </style>
      <div>
        <slot></slot>
        ${this.buildProperties(this.stacInfo)}
      </div>
    `;
  }

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has("for")) {
      this.fetchStac(this.for);
    }
  }
}
