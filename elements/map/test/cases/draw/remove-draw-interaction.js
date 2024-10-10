import { html } from "lit";
import drawInteractionLayerJson from "../../fixtures/drawInteraction.json";
import vectorLayerJson from "../../fixtures/vectorLayer.json";

/**
 * First tests to remove draw interaction in EOx Map
 */
const removeDrawInteractionFirstCase = () => {
  cy.mount(html`<eox-map .layers=${drawInteractionLayerJson}></eox-map>`).as(
    "eox-map"
  );
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    expect(eoxMap.interactions.drawInteraction).to.exist;
    expect(eoxMap.interactions.drawInteraction_modify).to.exist;
    $el[0].removeInteraction("drawInteraction");
    $el[0].removeInteraction("drawInteraction_modify");
    expect(eoxMap.interactions.drawInteraction).to.not.exist;
    expect(eoxMap.interactions.drawInteraction_modify).to.not.exist;
  });
};

/**
 * Second tests to remove draw interaction in EOx Map
 */
const removeDrawInteractionSecondCase = () => {
  cy.mount(html`<eox-map .layers=${drawInteractionLayerJson}></eox-map>`).as(
    "eox-map"
  );
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    expect(eoxMap.interactions.drawInteraction).to.exist;
    expect(eoxMap.interactions.drawInteraction_modify).to.exist;
    eoxMap.layers = vectorLayerJson;
    expect(eoxMap.interactions.drawInteraction).to.not.exist;
    expect(eoxMap.interactions.drawInteraction_modify).to.not.exist;
  });
};

export { removeDrawInteractionFirstCase, removeDrawInteractionSecondCase };
