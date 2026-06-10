import { nothing } from "lit";
import { html, unsafeStatic } from "lit/static-html.js";
import { createRef, ref } from "lit/directives/ref.js";
import { A2uiLitElement, A2uiController } from "@a2ui/lit/v0_9";
import { eoxCatalog } from "./eox-catalog.js";

export class EOxA2uiElement extends A2uiLitElement {
  constructor() {
    super();
    this._elementRef = createRef();
  }

  createRenderRoot() {
    return this;
  }

  createController() {
    const type = this.context.componentModel.type;
    const api = eoxCatalog.components.get(type);
    if (!api) {
      throw new Error(
        `Component implementation not found in eoxCatalog for type: ${type}`,
      );
    }
    return new A2uiController(this, api);
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    const element = this._elementRef.value;
    if (element && this.controller?.props) {
      // Pass all properties to the EOxElement
      for (const [key, value] of Object.entries(this.controller.props)) {
        if (element[key] !== value) {
          element[key] = value;
        }
      }
    }
  }

  render() {
    const type = this.context.componentModel.type;
    const api = eoxCatalog.components.get(type);
    if (!api) {
      return nothing;
    }

    const targetTag = unsafeStatic(api.targetTagName);
    return html`<${targetTag} id=${this.context.componentModel.id} ${ref(this._elementRef)}></${targetTag}>`;
  }
}

customElements.define("eox-a2ui-element", EOxA2uiElement);
