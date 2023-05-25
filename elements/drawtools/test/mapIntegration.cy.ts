import { EOxDrawTools } from "../src/main";
import { EOxMap } from "../../map/main";
import mapIntegrationJson from "./mapIntegration.json";

describe("Layer Switcher", () => {
  beforeEach(() => {
    cy.visit("/elements/drawtools/test/mapIntegration.html");
  });

  it("loads the drawtools", () => {
    let eoxMap: EOxMap;
    cy.get("eox-map").should(($el) => {
      eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(mapIntegrationJson);
    });
    cy.get("eox-drawtools").should(($ls) => {
      const eoxDrawTools = <EOxDrawTools>$ls[0];
      eoxDrawTools.attachTo(eoxMap.map, {
        property: "mapbox-source",
        value: "draw_layer",
      });
    });
  });
});
