import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import hoverInteractionLayerFixture from "../../fixtures/hoverInteractionLayerId.json";
import vectorLayerStyleJson from "../../fixtures/hoverInteraction.json";
import { simulateEvent } from "../../utils/events";

/**
 * Tests to display tooltip on hover
 */
const displayTooltipForLayer = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.intercept("https://foo.bar/baz.json", (req) => {
    req.reply(hoverInteractionLayerFixture);
  });
  cy.mount(
    html`<eox-map
      .layers=${[
        ...vectorLayerStyleJson,
        {
          type: "Vector",
          properties: {
            id: "targetLayer",
          },
          source: {
            type: "Vector",
            format: "GeoJSON",
            url: "https://foo.bar/baz.json",
          },
          interactions: [
            {
              type: "select",
              options: {
                id: "selectInteraction",
                condition: "pointermove",
              },
            },
          ],
        },
      ]}
    >
      <eox-map-tooltip for="targetLayer"></eox-map-tooltip>
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
          cy.get("ul").children().should("have.length", 2);
          cy.get("ul>li").and(($lis) => {
            assert(
              $lis[1].textContent.includes("targetLayer"),
              "includes property from targetLayer",
            );
          });
        });
    });
};

export default displayTooltipForLayer;
