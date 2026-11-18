/**
 * @element eox-map-side-by-side
 * @description Side-by-side container for synchronized maps.
 */
export class EOxMapSideBySide extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block !important;
          width: 100% !important;
          height: 100% !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .container {
          display: flex !important;
          flex-direction: row !important;
          width: 100% !important;
          height: 100% !important;
          position: relative !important;
        }
        ::slotted(*) {
          flex: 1 1 50% !important;
          width: 50% !important;
          height: 100% !important;
          position: relative !important;
          display: block !important;
          box-sizing: border-box !important;
        }
      </style>
      <div class="container">
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get("eox-map-side-by-side")) {
  customElements.define("eox-map-side-by-side", EOxMapSideBySide);
}
