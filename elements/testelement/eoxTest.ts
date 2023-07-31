export class EOxTestelement extends HTMLElement {
  private shadow: ShadowRoot;
  // public message2: string;

  set message2(value: string) {
    this._message2 = value;
    this.shadow.querySelector("div").innerHTML = value;
  }

  get message2() {
    return this._message2;
  }
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
    div.innerHTML = this.getAttribute("message")
    this.shadow.appendChild(div);
    div.innerHTML = this.getAttribute("message2");
  }
}

customElements.define("eox-testelement", EOxTestelement);
