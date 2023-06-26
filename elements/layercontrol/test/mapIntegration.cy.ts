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
            layer.set("baseLayer", true);
          }
          if (index === 1) {
            layer.set("extent", [-14000000, 2000000, -8000000, 7000000]);
            // layer.set("displayInLayerControl", false);
          }
          if (index === 2) {
            layer.setVisible(false);
          }
        });
    });
    cy.get("eox-layercontrol").should(($ls) => {
      const eoxLayerControl = <EOxLayerControl>$ls[0];
      eoxLayerControl.attachTo(eoxMap.map);
      const eoxLayerControl2 = <EOxLayerControl>$ls[1];
      eoxLayerControl2.attachTo(eoxMap.map);
    });
  });
});
