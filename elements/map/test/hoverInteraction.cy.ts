import { Select } from "ol/interaction";
import { EOxMap } from "../main";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("select interaction with hover", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });

  it("adds a select interaction", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(vectorLayerStyleJson);
      eoxMap.addSelect("countries_fill", {
        id: "selectInteraction",
        tooltip: "eox-map-tooltip",
        condition: "pointermove",
      });

      // get the interaction via the source key
      const selectInteraction = eoxMap.interactions[
        "selectInteraction"
      ] as Select;
      expect(selectInteraction).to.exist;
      expect(selectInteraction.getActive()).to.equal(true);
    });
  });

  /*it("fires a select event", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      // get the interaction via the source key
      const drawInteraction = eoxMap.interactions["drawInteraction"];
      expect(drawInteraction).to.exist;
      expect(drawInteraction.getActive()).to.equal(true);
    });
  });


  it("remove interaction", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.removeInteraction("drawInteraction");
    });
  });*/
});
