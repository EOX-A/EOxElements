// import { EOxLayerSwitcher } from "../src/main";
import { EOxMap } from "../../map/main";
import mapIntegrationJson from "./mapIntegration.json";

describe("Layer Switcher", () => {
  beforeEach(() => {
    cy.visit("/elements/layerswitcher/test/mapIntegration.html");
  });

  it("loads the layerswitcher", () => {
    cy.get("eox-map").should(($el) => {
      // const eoxLayerSwitcher = <EOxLayerSwitcher>$el[0];
      // cy.get("eox-map").should(($map) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(mapIntegrationJson);
      eoxMap.map
        .getLayers()
        .getArray()
        .forEach((layer, index) => {
          layer.set("title", "layer " + index);
          if (index === 0) {
            layer.set("baseLayer", true);
          }
          if (index === 1) {
            layer.set("extent", [-14000000, 2000000, -8000000, 7000000]);
          }
        });
      // });
    });
  });
});
