const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes") {
      mutation.target.render();
    }
  });
});

customElements.define(
  "eox-layout",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
      observer.observe(this, {
        attributes: true,
      });
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
      <slot></slot>
    `;
    }
  }
);

customElements.define(
  "eox-layout-item",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
      observer.observe(this, {
        attributes: true,
      });
    }
    render() {
      this.shadowRoot.innerHTML = `
        <style>
            :host {
                background: lightgrey;
                border: 1px solid darkgrey;
                border-radius: 4px;
                padding: 4px 8px;
                overflow: hidden;


                grid-column: ${
                  parseInt(this.getAttribute("x")) + 1
                } / span ${this.getAttribute("w")};
                grid-row: ${
                  parseInt(this.getAttribute("y")) + 1
                } / span ${this.getAttribute("h")};
            }
        </style>
        <slot></slot>
      `;
    }
  }
);
