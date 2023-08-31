import { html, render } from "lit";
import { TemplateElement } from "../../../utils/templateElement";

export class EOxMapTooltip extends TemplateElement {
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
              ${Object.entries(content).map(
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
