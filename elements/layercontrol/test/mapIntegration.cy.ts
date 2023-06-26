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
      // @ts-ignore
      const olMap = eoxMap.map;
      eoxMap.setLayers(mapIntegrationJson);
      olMap
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
  });
});
