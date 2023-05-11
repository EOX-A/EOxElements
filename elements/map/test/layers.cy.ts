import { EOxMap } from "../main";

import testLayers from "./layers.json";
describe("layers", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });
  it("loads a set of layers from a JSON", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(testLayers);
      expect(eoxMap.map.getLayers().getArray()).to.have.lengthOf(7);
    });
  });
});
