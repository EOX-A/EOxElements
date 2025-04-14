/**
 * This element allows to quickly set up an app layout using a 12x12 grid. It consists of two elements:
 * - `eox-layout`: the container holding all the items
 * - `eox-layout-item`: the individual items placed on the grid, with a defined x/y coordinate, and a w(idth) and h(eight), which can be single values or three vlaues for small/medium/large
 */
export class EOxLayout extends HTMLElement {
  static get observedAttributes() {
    return ["column-width", "fill-grid", "gap", "row-height"];
  }
  constructor() {
    super();

    /**
     * The breakpoints for small/medium/large screens (in pixel).
     */
    this.mediaBreakpoints = [0, 600, 1280];

    this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        --row-height: ${this.getAttribute("row-height") || "1fr"};
        --column-width: ${this.getAttribute("column-width") || "1fr"};
        display: grid;
        padding: ${this.getAttribute("gap") || 0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap") || "0"}px;
        ${
          this.getAttribute("fill-grid") !== null
            ? `
          grid-template-columns: repeat(auto-fill, minmax(0, var(--column-width, 300px)));
          grid-template-rows: repeat(auto-fill, minmax(0, var(--row-height, 300px)));
          grid-auto-columns: var(--column-width, 300px);
          grid-auto-rows: var(--row-height, 300px);
          `
            : `
          grid-template-columns: repeat(12, ${this.getAttribute("column-width") ? "var(--column-width)" : "minmax(0, var(--column-width))"});
          grid-template-rows: repeat(12, ${this.getAttribute("row-height") ? "var(--row-height)" : "minmax(0, var(--row-height))"});
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
    // Check if attribute includes "/" for "s/m/l", if not return original
    const withMediaBreakpoints = (attribute, breakpointIndex = 0) => {
      if (attribute?.toString().includes("/")) {
        const sizes = attribute.split("/");
        let currentBreakpoint = sizes[breakpointIndex];
        return currentBreakpoint;
      }
      return attribute;
    };

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          overflow: hidden;
        }
          ${
            /**@type EOxLayout */ (this.parentElement)?.mediaBreakpoints
              .map(
                (bp, index) => `
              @media (min-width: ${bp}px) {
                :host {
                          ${
                            this.parentElement &&
                            this.parentElement.getAttribute("fill-grid") !==
                              null
                              ? `
                          grid-column: span ${withMediaBreakpoints(this.getAttribute("w"), index)};
                          grid-row: span ${withMediaBreakpoints(this.getAttribute("h"), index)};
                          `
                              : `            
                            grid-column: ${parseInt(withMediaBreakpoints(this.getAttribute("x"), index)) + 1} / span ${withMediaBreakpoints(this.getAttribute("w"), index)};
                            grid-row: ${parseInt(withMediaBreakpoints(this.getAttribute("y"), index)) + 1} / span ${withMediaBreakpoints(this.getAttribute("h"), index)};
                        `
                          }
                  display: ${
                    withMediaBreakpoints(this.getAttribute("w"), index) ===
                      "0" ||
                    withMediaBreakpoints(this.getAttribute("h"), index) === "0"
                      ? `none`
                      : `block`
                  }
                }
              }
              `,
              )
              .join("\n")
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
