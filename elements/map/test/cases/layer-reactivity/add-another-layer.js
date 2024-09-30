import { html } from "lit";

/**
 * Tests to add another layer by setting it as a property
 */
const addAnotherLayer = (OsmJson, OsmJson2) => {
  cy.mount(html`<eox-map></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    eoxMap.layers = [OsmJson];
    eoxMap.layers = [OsmJson, OsmJson2];
    expect(eoxMap.map.getLayers().getArray().length).to.be.equal(2);
  });
};

export default addAnotherLayer;
