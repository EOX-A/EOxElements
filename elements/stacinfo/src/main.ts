import { html, nothing, PropertyValueMap } from "lit";
import { property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import StacFields from "@radiantearth/stac-fields";
import { STAC } from "stac-js";
import { TemplateElement } from "../../../utils/templateElement";

/**
 * A simple element for automatically fetching and displaying a STAC file (catalog, collection or item)
 */
export class EOxStacInfo extends TemplateElement {
  /**
   * Render the element without styling
   */
  @property({ type: Boolean })
  unstyled: boolean;

  /**
   * The link to a STAC JSON file
   */
  @property()
  for: string;

  /**
   * A whitelist of properties from the STAC JSON to display
   */
  @property({ type: Array })
  properties: Array<string> = ["title", "description"];

  /**
   * A list of featured properties which are rendered full-width and expandable
   */
  @property({ type: Array })
  featured: Array<string> = [];

  @state()
  private stacInfo: Array<typeof STAC> = [];

  private fetchStac = async (url: string) => {
    const response = await fetch(`${url}?ts=${Date.now()}`);
    const stac = await response.json();
    this.stacInfo = await this.parseStac(stac);
  };

  private parseStac = async (stac: typeof STAC) => {
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

  private buildProperties(stacArray: Array<typeof STAC>) {
    const propertyFilter = this.properties?.length > 0;
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
        ${(propertyFilter ? this.properties?.includes("title") : true)
          ? stacProperties.title?.formatted
          : nothing}
      </h1>
      <p>
        ${(propertyFilter ? this.properties?.includes("description") : true)
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
              !propertyFilter ? true : this.properties?.includes(key)
            )
            .reverse()
            .sort(([keyA], [keyB]) =>
              this.properties?.indexOf(keyA) > this.properties?.indexOf(keyB)
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
          .filter(([key]) => this.featured?.includes(key))
          .reverse()
          .sort(([keyA], [keyB]) =>
            this.properties?.indexOf(keyA) > this.properties?.indexOf(keyB)
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

customElements.define("eox-stacinfo", EOxStacInfo);
