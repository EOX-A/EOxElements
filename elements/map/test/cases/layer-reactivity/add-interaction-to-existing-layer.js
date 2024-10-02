import { html } from "lit";
import drawInteractionLayerJson from "../../fixtures/drawInteraction.json";

/**
 * Tests to add new interaction to existing layer
 */
const addInteractionToExistingLayer = () => {
  cy.mount(html`<eox-map></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const interactions = drawInteractionLayerJson[0].interactions;
    delete drawInteractionLayerJson[0].interactions;
    eoxMap.layers = drawInteractionLayerJson;

    drawInteractionLayerJson[0].interactions = interactions;
    eoxMap.layers = drawInteractionLayerJson;
    expect(eoxMap.interactions.drawInteraction).to.exist;
    expect(eoxMap.interactions.drawInteraction_modify).to.exist;
  });
};

export default addInteractionToExistingLayer;
