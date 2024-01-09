import { html } from "lit";
import "../main";
import vectorLayerStyleJson from "./hoverInteraction.json";
import { simulateEvent } from "./utils/events";

describe("tooltip", () => {
  it("displays a tooltip on hover", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    cy.mount(
      html`<eox-map .layers=${vectorLayerStyleJson}>
        <eox-map-tooltip></eox-map-tooltip>
      </eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];

      eoxMap.map.on("loadend", () => {
        simulateEvent(eoxMap.map, "pointermove", 120, -140);
      });
    });
    cy.get("eox-map")
      .shadow()
      .within(() => {
        console.log("here");
        cy.get("eox-map-tooltip").should("exist");
        cy.get("eox-map-tooltip").and(($el) => {
          console.log($el[0]);
        });
        cy.get("eox-map-tooltip")
          .shadow()
          .within(() => {
            cy.get("ul").should("exist");
            cy.get("ul").children().should("have.length", 9);
          });
      });
  });
});
