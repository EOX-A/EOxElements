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
  unstyled: Boolean;

  @property()
  for: string;

  @property({ type: Array })
  properties: Array<string> = [];

  @property({ type: Array })
  featured: Array<string> = [];

  @state()
  stacInfo: Array<typeof STAC> = [];

  fetchStac = async (url: string) => {
    const response = await fetch(url);
    const stac = await response.json();
    this.stacInfo = this.parseStac(stac);
  };

  parseStac = (stac: typeof STAC) => {
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
    const stac = stacArray[0];
    if (!stac) {
      return false;
    }
    console.log(stac.properties);
    return html`
      <h1>
        ${(propertyFilter ? this.properties.includes("title") : true)
          ? stac.properties.title?.formatted
          : nothing}
      </h1>
      <p>
        ${(propertyFilter ? this.properties.includes("description") : true)
          ? unsafeHTML(stac.properties.description?.formatted)
          : nothing}
      </p>
      <ul part="properties">
        ${map(
          Object.entries(stac.properties)
            .filter(([key]) => {
              // title and description are always shonw on top, if available
              return !["title", "description"].includes(key);
            })
            .filter(([key]) =>
              !propertyFilter ? true : this.properties.includes(key)
            )
            .sort(([keyA], [keyB]) =>
              this.properties.indexOf(keyA) > this.properties.indexOf(keyB)
                ? 1
                : -1
            ),
          ([key, value]) =>
            this.hasTemplate(key)
              ? html`${this.renderTemplate(key, stac.properties[key], key)}`
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
        Object.entries(stac.properties)
          .filter(([key]) => this.featured.includes(key))
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
              ? html`${this.renderTemplate(key, stac.properties[key], key)}`
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
