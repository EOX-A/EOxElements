/**
 * This element allows to quickly set up an app layout using a 12x12 grid. It consists of two elements:
 * - `eox-layout`: the container holding all the items
 * - `eox-layout-item`: the individual items placed on the grid, with a defined x/y coordinate, and a w(idth) and h(eight)
 */
export class EOxSearch extends HTMLElement {
  static get observedAttributes() {
    return ["gap"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap") || 0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap") || "0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <input type="text" placeholder="Search..." />
    <slot></slot>
  `;
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
    this.render();
  }
}

customElements.define("eox-search", EOxSearch);
