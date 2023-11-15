export class MockMap extends HTMLElement {
  constructor() {
    super();
  }
  features = [{}];
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
  };
  addDraw() {}
  interactions = {
    drawInteraction: {
      on: (event, fun) => fun(event),
    },
    drawInteraction_modify: {
      on() {},
    },
  };
  removeInteraction() {}
}
customElements.define("mock-map", MockMap);
