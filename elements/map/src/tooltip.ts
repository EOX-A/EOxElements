export class EOxMapTooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = "<slot></slot>";
    /*const shadow: ShadowRoot = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    const shadowStyleFix = `
      :host {
        display: block;
      }
    `;
    style.innerHTML = shadowStyleFix;
    shadow.appendChild(style);

    const div = document.createElement("div");
    shadow.appendChild(div);*/
  }
}

customElements.define("eox-map-tooltip", EOxMapTooltip);
