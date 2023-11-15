export class MockMap extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const canvas = document.createElement("canvas");
    this.shadowRoot.appendChild(canvas);
  }
  addDraw() {}
  interactions = {
    drawInteraction: {
      on: () => {},
    },
    drawInteraction_modify: {
      on: () => {},
    },
  };
  removeInteraction() {}
  setLayers() {}
}
customElements.define("eox-map", MockMap);
