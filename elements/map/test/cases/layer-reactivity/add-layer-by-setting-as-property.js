import { html } from "lit";

/**
 * Tests to add layer by setting it as a property
 */
const addLayerBySettingAsProperty = (OsmJson) => {
  cy.mount(html`<eox-map></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    eoxMap.layers = [OsmJson];
    expect(eoxMap.getLayerById("osm")).to.exist;
  });
};

export default addLayerBySettingAsProperty;
