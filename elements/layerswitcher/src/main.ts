import { layerSwitcherTemplate } from "./template";

const template = document.createElement("template");
template.innerHTML = layerSwitcherTemplate;

export class EOxLayerSwitcher extends HTMLElement {
  shadowRoot: ShadowRoot;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const style = document.createElement("style");
    style.innerText = `
      :host {
        display: block;
      }
    `;
    this.shadowRoot.appendChild(style);
    const div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    this.shadowRoot.appendChild(div);
  }
}

customElements.define("eox-layerswitcher", EOxLayerSwitcher);
