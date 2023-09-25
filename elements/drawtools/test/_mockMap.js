export class MockMap extends HTMLElement {
  constructor() {
    super();
  }
  map = {
    getLayers: () => ({
      getArray: () => [
        {
          get: () => "draw",
          getSource: () => ({
            clear: () => ({}),
            getFeatures: () => [{}],
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
