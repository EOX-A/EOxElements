import { EOxMap } from "../main";
import vectorLayerStyleJson from "./drawInteraction.json";

describe("draw interaction", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });
  it("loads a Vector Layer", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(vectorLayerStyleJson);
      const interactions = eoxMap.map.getInteractions();
      // get the interaction via the source key
      const drawInteraction = interactions.getArray().find(i => i.get('id') === 'draw_draw_layer');
      expect(drawInteraction).to.exist;
      expect(drawInteraction.getActive()).to.equal(true)
    });
  });
});
