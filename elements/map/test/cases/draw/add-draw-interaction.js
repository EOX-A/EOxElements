import { html } from "lit";
import drawInteractionLayerJson from "../../fixtures/drawInteraction.json";

/**
 * Tests to add draw interaction in EOx Map
 */
const addDrawInteraction = () => {
  cy.mount(html`<eox-map .layers=${drawInteractionLayerJson}></eox-map>`).as(
    "eox-map",
  );
  cy.get("eox-map").and(($el) => {
    // get the interaction via the source key
    let drawInteraction = $el[0].interactions["drawInteraction"];
    expect(drawInteraction).to.exist;
    expect(drawInteraction.getActive()).to.equal(true);

    const eoxMap = $el[0];
    const map = eoxMap.map;
    const originalNumberOfInteractions = map.getInteractions().getLength();
    const newLayerJson = [Object.assign({}, drawInteractionLayerJson[0])];
    delete newLayerJson[0].interactions;
    eoxMap.layers = newLayerJson;
    drawInteraction = $el[0].interactions["drawInteraction"];
    expect(drawInteraction, "remove interaction from dictionary").to.not.exist;
    expect(
      map.getInteractions().getLength(),
      "remove draw and modify interaction",
    ).to.be.equal(originalNumberOfInteractions - 2);
  });
};

export default addDrawInteraction;
