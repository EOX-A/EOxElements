const mockLayer = (
  layer: { events?: any; layers?: Array<any> },
  layerId: string
) =>
  <{ [key: string]: any }>{
    get(prop: string): any {
      return this[prop];
    },
    ...(layer.layers
      ? {
          getLayers: () => ({
            ...mockCollection(layer),
          }),
        }
      : {}),
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

const mockCollection = (collection: { events?: any; layers?: Array<any> }) =>
  <{ [key: string]: any }>{
    getArray() {
      return collection.layers.map((l: any, i: number) => ({
        ...mockLayer(l, `${i}`),
        ...l,
      }));
    },
    on: (event: string, fun: () => void) =>
      (collection.events = { [event]: fun }),
    push(newLayer: object) {
      collection.layers.push(newLayer);
      collection.events["change:length"]();
    },
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
      ...mockCollection(this),
    }),
  };
  setLayers = (layers: Array<any>) => {
    this.layers = layers.map((layer, index) => ({
      ...mockLayer(layer, `${index}`),
      ...layer,
    }));
    this.events["change:length"]();
  };
}
customElements.define("mock-map", MockMap);
