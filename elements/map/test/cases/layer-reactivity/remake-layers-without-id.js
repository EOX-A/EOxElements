import { html } from "lit";
import drawInteractionLayerJson from "../../fixtures/drawInteraction.json";

/**
 * Tests to remake layers without ID in EOx Map
 */
const remakeLayersWithoutId = (OsmJson) => {
  cy.mount(html`<eox-map></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    delete OsmJson.properties;
    eoxMap.layers = [OsmJson];
    delete drawInteractionLayerJson[0].properties;
    eoxMap.layers = [drawInteractionLayerJson[0]];
    expect(eoxMap.map.getLayers().getArray().length).to.be.equal(1);
  });
};

export default remakeLayersWithoutId;
