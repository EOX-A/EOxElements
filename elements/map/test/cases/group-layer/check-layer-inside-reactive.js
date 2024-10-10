import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";

/**
 * Tests to check layer inside the group is reactive
 */
const checkLayerInsideReactive = (layersJson) => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];

    layersJson[0].layers[1].layers[0].opacity = 0.2;
    eoxMap.layers = layersJson;

    expect(
      eoxMap.getLayerById("layerInsideGroupInsideGroup").getOpacity(),
      "reactive layer 2 levels deep",
    ).to.be.equal(0.2);
  });
};

export default checkLayerInsideReactive;
