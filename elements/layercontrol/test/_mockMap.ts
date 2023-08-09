const mockLayer: { [key: string]: any } = {
  get(prop: string): any {
    return this[prop];
  },
  getOpacity() {
    return this.opacity;
  },
  getVisible() {
    return this.visible;
  },
  title: undefined,
  id: undefined,
  layerControlDisable: undefined,
  layerControlExclusive: undefined,
  layerControlHide: undefined,
  layerControlOptional: undefined,
  opacity: 1,
  setVisible(visible: boolean) {
    this.visible = visible;
  },
  visible: true,
};

export class MockMap extends HTMLElement {
  constructor() {
    super();
  }
  layers: Array<any> = [];
  events: { [key: string]: any } = {};
  map = {
    getInteractions: () => ({
      getArray: () => [{}],
    }),
    getLayers: () => ({
      getArray: () => this.layers,
      on: (event: string, fun: Function) => (this.events[event] = fun),
    }),
  };
  setLayers = (layers: Array<any>) => {
    this.layers = layers.map((l) => ({
      ...mockLayer,
      ...l,
    }));
    this.events["change:length"]();
  };
}
customElements.define("mock-map", MockMap);
