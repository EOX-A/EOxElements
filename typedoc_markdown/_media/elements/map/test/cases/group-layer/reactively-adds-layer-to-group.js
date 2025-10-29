import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";

/**
 * Tests to reactively adds layers to group
 */
const reactivelyAddsLayerToGroup = (layersJson, osmJson) => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    layersJson[0].layers.push(osmJson);
    eoxMap.layers = layersJson;
    const newOsmInGroup = eoxMap.getLayerById("osm");
    expect(newOsmInGroup, "reactively add layer to group").to.exist;
  });
};

export default reactivelyAddsLayerToGroup;
