import { html } from "lit";
import wmsLayer from "../../fixtures/imageWmsLayer.json";
import { simulateEvent } from "../../utils/events";

/**
 * Tests to display tooltip on hover
 */
const displayTooltipOnWMS = () => {
  cy.intercept(/^.*REQUEST=GetMap.*$/, {
    fixture: "./map/test/fixtures/tiles/wms/wms0.png",
  });
  cy.intercept(/^.*REQUEST=GetFeatureInfo.*$/, {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "states.25",
        properties: {
          foo: "bar",
          baz: "boo",
        },
      },
    ],
  });
  cy.mount(
    html`<eox-map
      .layers=${wmsLayer}
      .zoom=${4}
      .center=${[-10997148, 4569099]}
    >
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>`,
  ).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];

    eoxMap.map.on("loadend", () => {
      simulateEvent(eoxMap.map, "click", 120, -140);
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
          cy.get("ul").children().should("have.length", 4);
        });
    });
};

export default displayTooltipOnWMS;
