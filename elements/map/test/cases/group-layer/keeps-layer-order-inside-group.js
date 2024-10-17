import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";

/**
 * Tests to check layer order stability inside group
 */
const keepsLayerOrder = (layersJson) => {
  console.log(layersJson);
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const layerOrderInJSON = layersJson[0].layers.map((l) => l.properties.id);
    eoxMap.layers = structuredClone(layersJson);
    const groupLayer = eoxMap.getLayerById("group");
    const reversedLayerOrderInOl = groupLayer
      .getLayers()
      .getArray()
      .map((l) => l.get("id"))
      .toReversed();

    expect(
      layerOrderInJSON,
      "keeps transformation from revese painters order to painters order",
    ).to.be.deep.equal(reversedLayerOrderInOl);
  });
};

export default keepsLayerOrder;
