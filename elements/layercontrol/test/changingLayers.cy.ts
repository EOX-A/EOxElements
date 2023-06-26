import { EOxLayerControl } from "../src/main";
import { EOxMap } from "../../map/main";
import mapIntegrationJson from "./mapIntegration.json";

describe("Layer Control", () => {
  beforeEach(() => {
    cy.visit("/elements/layercontrol/test/mapIntegration.html");
  });

  it("loads the layercontrol", () => {
    let eoxMap: EOxMap;
    cy.get("eox-map").should(($el) => {
      eoxMap = <EOxMap>$el[0];
      const applyLayers = () => {
        eoxMap.setLayers(mapIntegrationJson);
        eoxMap.map
          .getLayers()
          .getArray()
          .forEach((layer, index) => {
            layer.set("name", "Layer " + index);
            layer.set("id", "layer" + index);
          });
      };
      applyLayers();
      const layers = eoxMap.map.getLayers();

      setTimeout(() => {
        eoxMap.setLayers(layers.removeAt(layers.getArray().length - 1));
      }, 2000);
      setTimeout(() => {
        eoxMap.setLayers(layers.removeAt(layers.getArray().length - 1));
      }, 4000);
      setTimeout(() => {
        eoxMap.setLayers(layers.removeAt(layers.getArray().length - 1));
      }, 6000);
      setTimeout(() => {
        applyLayers();
      }, 8000);
    });
    cy.get("eox-layercontrol").should(($ls) => {
      const eoxLayerControl = <EOxLayerControl>$ls[0];
      eoxLayerControl.attachTo(eoxMap.map);
    });
  });
});
