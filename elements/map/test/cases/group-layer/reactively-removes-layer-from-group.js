import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";

/**
 * Tests to reactively removes layers from group
 */
const reactivelyRemovesLayerFromGroup = (layersJson) => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const jsonCopy = JSON.parse(JSON.stringify(layersJson));
    jsonCopy[0].layers.length = 1;
    eoxMap.layers = jsonCopy;
    expect(eoxMap.getLayerById("regions"), "reactively remove layer from group")
      .to.not.exist;
  });
};

export default reactivelyRemovesLayerFromGroup;
