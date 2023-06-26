import { html, render } from "lit-html";
import { TemplateElement } from "../../../utils/templateElement";

export class EOxMapTooltip extends TemplateElement {
  renderContent(content: Object) {
    render(
      this.hasTemplate("tooltip")
        ? html`${this.renderTemplate(
            "tooltip",
            content,
            // `tooltip-${this.content.id}`
            "tooltip-1"
          )}`
        : html`<ul>
            ${Object.entries(content).map(
              ([key, value]) => html`<li>${key}: ${value}</li>`
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
