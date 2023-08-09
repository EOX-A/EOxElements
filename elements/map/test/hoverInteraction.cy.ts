import { Select } from "ol/interaction";
import "../main";
import vectorLayerStyleJson from "./hoverInteraction.json";

describe("select interaction with hover", () => {
  it("adds a select interaction", () => {
    cy.mount(
      `<eox-map layers='${JSON.stringify(vectorLayerStyleJson)}'></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.addSelect("regions", {
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
