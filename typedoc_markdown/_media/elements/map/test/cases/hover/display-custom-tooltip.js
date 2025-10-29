import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerStyleJson from "../../fixtures/hoverInteraction.json";
import { simulateEvent } from "../../utils/events";

/**
 * Tests to display tooltip on hover
 */
customElements.define(
  "custom-tooltip",
  class extends HTMLElement {
    set feature(newFeature) {
      this.innerHTML = `
      <div class="surface-container-lowest large-padding small-round large-elevate">
        <h6 class="small bold">${newFeature.get("ECO_NAME")}</h6>
      </div>
    `;
    }
  },
);

const displayCustomTooltip = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.mount(
    html`<eox-map .layers=${vectorLayerStyleJson}>
      <custom-tooltip is="eox-map-tooltip"></custom-tooltip>
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
      cy.get("custom-tooltip").should("exist");
      cy.get("custom-tooltip").within(() => {
        cy.get("h6")
          .should("exist")
          .should(
            "contain.text",
            ecoRegionsFixture.features.find((f) => f.id === 710).properties
              .ECO_NAME,
          );
      });
    });
};

export default displayCustomTooltip;
