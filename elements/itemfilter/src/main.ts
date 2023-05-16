import { itemFilterTemplate } from "./template";

const template = document.createElement("template");
template.innerHTML = itemFilterTemplate;

export class EOxItemFilter extends HTMLElement {
  shadowRoot: ShadowRoot;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    this.shadowRoot.appendChild(div);
  }
}

customElements.define("eox-itemfilter", EOxItemFilter);
