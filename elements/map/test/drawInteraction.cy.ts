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
      eoxMap.addDraw('draw_layer', {
        id: 'drawInteraction',
        type: 'LineString',
      });

      // get the interaction via the source key
      const drawInteraction = eoxMap.interactions['drawInteraction']
      expect(drawInteraction).to.exist; 
      expect(drawInteraction.getActive()).to.equal(true)
    });
  });
});
