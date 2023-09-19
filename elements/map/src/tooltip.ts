import { html, render } from "lit";
import { property } from "lit/decorators.js";
import { TemplateElement } from "../../../utils/templateElement";

export class EOxMapTooltip extends TemplateElement {
  /**
   * Transform the default rendering of each feature property key/value.
   * Useful for e.g. translating keys or introducing a whitelist.
   */
  @property()
  propertyTransform: Function = (property: [key: string, value: any]) =>
    property;

  renderContent(content: Object) {
    render(
      this.hasTemplate("properties")
        ? html`${this.renderTemplate(
            "properties",
            content,
            // `tooltip-${this.content.id}`
            "tooltip-1"
          )}`
        : html` <style>
              ul {
                margin: 0;
                padding: 15px 15px 15px 30px;
                background: #0008;
                border-radius: 15px;
                color: white;
                max-width: 250px;
                font-size: small;
              }
              span {
                font-weight: bold;
              }
            </style>
            <ul>
              ${Object.entries(content)
                .map(([key, value]) => this.propertyTransform([key, value]))
                .filter((v) => v)
                .map(
                  ([key, value]) => html`<li><span>${key}</span>: ${value}</li>`
                )}
            </ul>`,
      this.shadowRoot
    );
  }

  constructor() {
    super();
  }
}

customElements.define("eox-map-tooltip", EOxMapTooltip);
