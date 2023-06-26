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
      eoxMap.setLayers(mapIntegrationJson);
      eoxMap.map
        .getLayers()
        .getArray()
        .forEach((layer, index) => {
          layer.set("name", "Layer " + index);
          layer.set("id", "layer" + index);
          if (index === 0) {
            layer.set("zIndex", 44);
          }
          if (index === 1) {
            layer.set("zIndex", 0);
          }
          if (index === 2) {
            layer.set("zIndex", 10);
          }
        });
    });
    cy.get("eox-layercontrol").should(($ls) => {
      const eoxLayerControl = <EOxLayerControl>$ls[0];
      eoxLayerControl.setAttribute("sortBy", "zIndex");
      eoxLayerControl.attachTo(eoxMap.map);
    });
  });
});
