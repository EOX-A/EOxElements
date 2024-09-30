import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerStyleJson from "../../fixtures/vectorLayer.json";

/**
 * Tests to load Vector Layer
 */
const loadVectorLayer = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.mount(html`<eox-map .layers=${vectorLayerStyleJson}></eox-map>`).as(
    "eox-map"
  );
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const layers = eoxMap.map.getLayers().getArray();
    expect(layers).to.have.length(1);
    expect(eoxMap.getLayerById("regions")).to.exist;
  });
};

export default loadVectorLayer;
