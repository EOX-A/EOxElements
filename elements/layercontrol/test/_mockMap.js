class MockLayer {
  constructor(layer) {
    Object.keys(layer).forEach((k) => {
      if (k === "properties") {
        this.properties = {
          ...this.properties,
          ...layer.properties,
        };
      } else {
        this[k] = layer[k];
      }
      if (layer.layers) {
        this.layers = new MockCollection(layer.layers);
        this.getLayers = () => {
          return this.layers || new MockCollection([]);
        };
      }
    });
  }
  get(prop) {
    return this.properties[prop] || this[prop];
  }
  getOpacity() {
    return this.opacity;
  }
  getVisible() {
    return this.visible;
  }
  opacity = 1;
  properties = {
    id: "foo",
    title: "layer",
  };
  minZoom = -Infinity;
  maxZoom = Infinity;
  set(prop, value) {
    this.properties[prop] = value;
  }
  setVisible(visible) {
    this.visible = visible;
  }
  visible = true;
  events = {
    ["change"]: () => undefined,
  };
  on = (event, fun) => (this.events = { [event]: fun });
  un = (event, fun) => {
    if (this.events[event] == fun) {
      delete this.events[event];
    }
  };
}

class MockCollection {
  constructor(layers) {
    this.layers = layers.map((l) => new MockLayer(l));
    setTimeout(() => {
      this.events["change:length"]();
    });
  }
  events = {
    ["change:length"]: () => undefined,
  };
  getArray = () => {
    return this.layers;
  };
  layers = [];
  on = (event, fun) => (this.events = { [event]: fun });
  un = (event, fun) => {
    if (this.events[event] == fun) {
      delete this.events[event];
    }
  };
  hasListener = (event) => event in this.events;
  pop() {
    this.layers.pop();
    this.events["change:length"]();
  }
  push(newLayer) {
    this.layers.push(new MockLayer(newLayer));
    this.events["change:length"]();
  }
  remove(layer) {
    layer = new MockLayer(layer);
    const i = this.layers.indexOf(layer);
    if (i) {
      this.layers.splice(i, 1);
      return layer;
    } else {
      return undefined;
    }
  }
  removeAt(index) {
    this.layers = [...this.layers.slice(index)];
  }
  insertAt(index, layer) {
    layer = new MockLayer(layer);
    this.layers = [
      ...this.layers.slice(0, index),
      layer,
      ...this.layers.slice(index),
    ];
  }
  getLength() {
    return this.layers.length;
  }
  forEach(func) {
    this.layers.forEach(func);
  }
}

export class MockMap extends HTMLElement {
  constructor() {
    super();
  }
  layers;
  events = {
    "change:resolution": [],
  };
  map = {
    getInteractions: () => ({
      getArray: () => [{}],
    }),
    getLayers: () => {
      if (this.layers) {
        return this.layers;
      } else {
        return new MockCollection([]);
      }
    },
    getEvents: () => this.events,
    getView: () => ({
      getZoom: () => this.zoom,
      on: (type, listener) => {
        this.events = {
          ...this.events,
          [type]: [...this.events[type], listener],
        };
      },
    }),
  };
  zoom = 1;
  setZoom = (z) => {
    this.zoom = z;
  };
  addOrUpdateLayer = (json) => {
    this.setLayers([json]);
  };
  setLayers = (layers) => {
    this.layers = new MockCollection(layers);
  };
}
customElements.define("mock-map", MockMap);
