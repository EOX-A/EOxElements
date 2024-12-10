import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerStyleJson from "../../fixtures/hoverInteraction.json";
import { simulateEvent } from "../../utils/events";

/**
 * Tests to disable the default hover tooltip
 */
const disableTooltip = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  const layers = JSON.parse(JSON.stringify(vectorLayerStyleJson));
  layers[0].interactions[0].options.tooltip = false;
  cy.mount(
    html`<eox-map .layers=${layers}>
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
      cy.get("eox-map-tooltip").should("not.exist");
    });
};

export default disableTooltip;
