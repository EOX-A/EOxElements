import { html } from "lit";

/**
 * Tests to remove layer by setting it as a property
 */
const removeLayerBySettingAsProperty = (OsmJson, OsmJson2) => {
  cy.mount(html`<eox-map></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    eoxMap.layers = [OsmJson, OsmJson2];
    eoxMap.layers = [OsmJson];
    expect(eoxMap.map.getLayers().getArray().length).to.be.equal(1);
  });
};

export default removeLayerBySettingAsProperty;
