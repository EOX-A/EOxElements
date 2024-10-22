import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerStyleJson from "../../fixtures/hoverInteraction.json";
import { simulateEvent } from "../../utils/events";

/**
 * Tests to display tooltip on hover
 */
const displayTooltip = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.mount(
    html`<eox-map .layers=${vectorLayerStyleJson}>
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>`,
  ).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];

    eoxMap.map.on("loadend", () => {
      simulateEvent(eoxMap.map, "pointermove", 120, -140);
    });
  });
  cy.get("eox-map")
    .shadow()
    .within(() => {
      cy.get("eox-map-tooltip").should("exist");
      cy.get("eox-map-tooltip")
        .shadow()
        .within(() => {
          cy.get("ul").should("exist");
          cy.get("ul").children().should("have.length", 9);
        });
    });
};

export default displayTooltip;
