import { EOxMap } from "../../map/main";
import mapIntegrationJson from "./mapIntegration.json";
import { Map } from "ol";

describe("Layer Control", () => {
  beforeEach(() => {
    cy.visit("/elements/layercontrol/test/mapIntegration.html");
  });

  it("loads the layercontrol", () => {
    let eoxMap: EOxMap;
    let olMap: Map;
    cy.get("eox-map").should(($el) => {
      eoxMap = <EOxMap>$el[0];
      // @ts-ignore
      olMap = eoxMap.map;
      const applyLayers = () => {
        eoxMap.setLayers(mapIntegrationJson);
        olMap
          .getLayers()
          .getArray()
          .forEach((layer, index) => {
            layer.set("name", "Layer " + index);
            layer.set("id", "layer" + index);
          });
      };
      applyLayers();
      const layers = olMap.getLayers();

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
  });
});
