import { html } from "lit";
import tooltipCogLayer from "../../fixtures/tooltipCogLayer.json";
import { simulateEvent } from "../../utils/events";

/**
 * Tests to display tooltip on hover
 */
customElements.define(
  "custom-tooltip-cog",
  class extends HTMLElement {
    set feature(newFeature) {
      this.innerHTML = `
      <div class="surface-container-lowest large-padding small-round large-elevate">
        <h6 class="small bold">${newFeature.get("band1")}</h6>
      </div>
    `;
    }
  },
);

const displayTooltipCogWithCustomTooltip = () => {
  cy.mount(
    html`<eox-map
      .layers=${tooltipCogLayer}
      .center=${[3737055, 1886786]}
      .zoom=${10}
    >
      <custom-tooltip-cog is="eox-map-tooltip"></custom-tooltip-cog>
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
      cy.get("custom-tooltip-cog").should("exist");
      cy.get("custom-tooltip-cog").within(() => {
        cy.get("h6", { timeout: 10000 })
          .should("exist")
          .invoke("text")
          .then(parseInt)
          .should("be.a", "number");
      });
    });
};

export default displayTooltipCogWithCustomTooltip;
