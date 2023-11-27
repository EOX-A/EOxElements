export class MockMap extends HTMLElement {
  constructor() {
    super();
  }
  features = [];
  map = {
    getLayers: () => ({
      getArray: () => [
        {
          get: () => "draw",
          getSource: () => ({
            clear: () => {
              this.features = [];
            },
            getFeatures: () => this.features,
          }),
        },
      ],
    }),
    removeLayer() {},
  };
  addOrUpdateLayer = () => this.map.getLayers().getArray()[0];
  interactions = {
    drawInteraction: {
      on: (event, fun) => fun(event),
      setActive() {},
    },
    drawInteraction_modify: {
      on() {},
    },
  };
  removeInteraction() {}
}
customElements.define("mock-map", MockMap);
