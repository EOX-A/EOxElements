import Polygon from "ol/geom/Polygon.js";
import Feature from "ol/Feature";

// Defining a MockMap class extending HTMLElement
export class MockMap extends HTMLElement {
  constructor() {
    super();
    // Initializing features array
    this.features = [
      new Feature({
        geometry: new Polygon([]),
      }),
      new Feature({
        geometry: new Polygon([]),
      }),
    ];
    // Simulating a map object with necessary methods
    this.map = {
      // Simulating getLayers method
      getLayers: () => ({
        // Simulating getArray method
        getArray: () => [
          {
            // Simulating get method
            get: () => "draw",
            set: () => "",
            getSource: () => ({
              // Simulating clear method to reset features array
              clear: () => {
                this.features = [];
              },
              // Simulating getFeatures method
              addFeatures: (features) => this.features.concat(features),
              getFeatures: () => this.features,
              removeFeature: () => this.features.splice(0, 1),
            }),
          },
        ],
      }),
      // Simulating removeLayer method
      removeLayer() {},
    };
    // Simulating addOrUpdateLayer method
    this.addOrUpdateLayer = () => this.map.getLayers().getArray()[0];
    // Simulating interactions object with necessary methods
    this.interactions = {
      drawInteraction: {
        // Simulating on method for drawInteraction
        on: (event, fun) => fun(event),
        // Simulating setActive method for drawInteraction
        setActive() {},
      },
      drawInteraction_modify: {
        // Simulating on method for drawInteraction_modify
        on() {},
      },
    };
    // Simulating removeInteraction method
    this.removeInteraction = () => {};
    // Simulate parse features
    this.parseFeature = () => {};
    this.selectInteractions = {
      SelectLayerClickInteraction: {
        setActive() {},
        remove() {},
        getId() {},
        selectStyleLayer: {
          on() {},
        },
        selectedFids: [],
      },
      SelectLayerHoverInteraction: {
        setActive() {},
        remove() {},
        selectStyleLayer: {
          on() {},
        },
        selectedFids: [],
      },
    };

    this.getLayerById = function (id) {
      const layer = this.layers.find((l) => l.properties.id === id);
      return {
        ...(layer ?? {}),
        properties: {
          _jsonDefinition: JSON.parse(JSON.stringify(layer ?? {})),
          ...(layer?.properties ?? {}),
        },
        get(key) {
          console.log(key, layer?.properties[key]);
          return this.properties[key];
        },
      };
    };
  }
}

// Registering the MockMap custom element
customElements.define("mock-map", MockMap);
