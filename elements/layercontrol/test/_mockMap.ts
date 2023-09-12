const mockLayer = (layerId: number) =>
  <{ [key: string]: any }>{
    get(prop: string): any {
      return this[prop];
    },
    getOpacity() {
      return this.opacity;
    },
    getVisible() {
      return this.visible;
    },
    title: `layer ${layerId}`,
    id: layerId,
    layerControlDisable: undefined,
    layerControlExclusive: undefined,
    layerControlExpanded: undefined,
    layerControlHide: undefined,
    layerControlOptional: undefined,
    opacity: 1,
    set(): void {
      return undefined;
    },
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
      on: (event: string, fun: () => void) => (this.events[event] = fun),
    }),
  };
  setLayers = (layers: Array<any>) => {
    this.layers = layers.map((l, index) => ({
      ...mockLayer(index),
      ...l,
    }));
    this.events["change:length"]();
  };
  getLayerById = (id: string, layers = this.layers): any => {
    for (const layer of layers) {
      if (layer.id === id) {
        return layer;
      } else if (layer.layers) {
        const foundLayer = this.getLayerById(id, layer.layers);
        if (foundLayer) return foundLayer;
      }
    }
    return undefined;
  };
  removeLayerById = (id: string) => {
    const index = this.layers.findIndex(layer => layer.id === id);
    if (index !== -1) {
      this.layers.splice(index, 1);
      this.events["change:length"]();
    }
    for (const layer of this.layers) {
      if (layer.layers) {
        const childIndex = layer.layers.findIndex(child => child.id === id);
        if (childIndex !== -1) {
          layer.layers.splice(childIndex, 1);
          this.events["change:length"]();
        }
      }
    }
  };
}
customElements.define("mock-map", MockMap);
