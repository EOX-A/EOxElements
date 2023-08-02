import { LitElement, html, PropertyValueMap } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { style } from "./style";
import { styleEOX } from "./style.eox";
import StacFields from "@radiantearth/stac-fields";
import { STAC } from "stac-js";

@customElement("eox-stacinfo")
export class EOxStacInfo extends LitElement {
  @property({ type: Boolean })
  unstyled: Boolean;

  @property()
  for: string;

  @property({ type: Array })
  properties: Array<string> = [];

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
      for (let field in stac.properties) {
        let value = stac.properties[field];
        let formatted = StacFields.format(value, field, stac);
        let label = StacFields.label(field);
        console.log(label, formatted);
        const properties = StacFields.formatItemProperties(stac);
        console.log(properties);
      }
    }
  };

  buildProperties(stacArray: Array<{ properties?: object }>) {
    const stac = stacArray[0];
    if (!stac) {
      return false;
    }
    console.log(stac.properties);
    return html`
      ${map(
        Object.entries(stac.properties)
          .filter(([key]) =>
            this.properties.length < 1 ? true : this.properties.includes(key)
          )
          .sort(([keyA], [keyB]) =>
            this.properties.indexOf(keyA) > this.properties.indexOf(keyB)
              ? 1
              : -1
          ),
        ([, value]) => html`
          <h3>${value.label}</h3>
          <p>${unsafeHTML(value.formatted)}</p>
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
