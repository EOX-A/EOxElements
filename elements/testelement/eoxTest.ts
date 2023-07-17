export class EOxTestelement extends HTMLElement {
  private shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    const shadowStyleFix = `
      :host {
        display: block;
      }
    `;
    style.innerHTML = shadowStyleFix;
    this.shadow.appendChild(style);
    const div = document.createElement("div");
    div.innerHTML = "Hello world!";
    div.innerHTML = this.getAttribute("message")
    this.shadow.appendChild(div); 
  }
}

customElements.define("eox-testelement", EOxTestelement);
