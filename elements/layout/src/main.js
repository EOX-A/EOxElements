/**
 * This element allows to quickly set up an app layout using a 12x12 grid. It consists of two elements:
 * - `eox-layout`: the container holding all the items
 * - `eox-layout-item`: the individual items placed on the grid, with a defined x/y coordinate, and a w(idth) and h(eight)
 */
export class EOxLayout extends HTMLElement {
  static get observedAttributes() {
    return ["column-width", "fill-grid", "gap", "row-height"];
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
        --row-height: ${this.getAttribute("row-height")};
        --column-width: ${this.getAttribute("column-width")};
        display: grid;
        padding: ${this.getAttribute("gap") || 0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap") || "0"}px;
        ${
          this.getAttribute("fill-grid") !== null
            ? `
          grid-template-columns: repeat(auto-fill, minmax(var(--column-width, 300px), 1fr));
          grid-template-rows: repeat(auto-fill, minmax(var(--row-height, 300px), 1fr));
          `
            : `
          grid-template-columns: repeat(12, var(--column-width, 1fr));
          grid-template-rows: repeat(12, var(--row-height, 1fr));
          `
        }
        overflow: auto;
      }
    </style>
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

export class EOxLayoutItem extends HTMLElement {
  static get observedAttributes() {
    return ["x", "y", "w", "h"];
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
          overflow: hidden;

          ${
            this.parentElement &&
            this.parentElement.getAttribute("fill-grid") !== null
              ? `
            grid-column: span ${this.getAttribute("w")};
            grid-row: span ${this.getAttribute("h")};
            `
              : `
            grid-column: ${
              parseInt(this.getAttribute("x")) + 1
            } / span ${this.getAttribute("w")};
            grid-row: ${
              parseInt(this.getAttribute("y")) + 1
            } / span ${this.getAttribute("h")};
          `
          }
        }
      </style>
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

customElements.define("eox-layout", EOxLayout);
customElements.define("eox-layout-item", EOxLayoutItem);
