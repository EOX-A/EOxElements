import { EOxLayerSwitcher } from "../src/main";
import { EOxMap } from "../../map/main";
import mapIntegrationJson from "./mapIntegration.json";

describe("Layer Switcher", () => {
  beforeEach(() => {
    cy.visit("/elements/layerswitcher/test/mapIntegration.html");
  });

  it("loads the layerswitcher", () => {
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
    cy.get("eox-layerswitcher").should(($ls) => {
      const eoxLayerSwitcher = <EOxLayerSwitcher>$ls[0];
      eoxLayerSwitcher.attachTo(eoxMap.map);
    });
  });
});
