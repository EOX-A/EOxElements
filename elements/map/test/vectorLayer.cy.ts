import { EOxMap } from "../main";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("layers", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });
  it("loads a Vector Layer", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(vectorLayerStyleJson);
      const layers = eoxMap.map.getLayers().getArray();
      expect(layers).to.have.length(2);
    });
  });
});
