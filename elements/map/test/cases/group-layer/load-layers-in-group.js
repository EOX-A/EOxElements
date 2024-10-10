import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";

/**
 * Tests to load vector layers in a group
 */
const loadLayersInGroup = (layersJson) => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });

  cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];

    const groupLayer = eoxMap.getLayerById("group");
    expect(groupLayer, "find group layer").to.exist;

    const layerInsideGroup = eoxMap.getLayerById("regions");
    expect(layerInsideGroup, "find layer inside group").to.exist;

    const groupLayerInsideGroup = eoxMap.getLayerById("groupLayerInsideGroup");
    expect(groupLayerInsideGroup, "find group layer inside group").to.exist;

    const layerInsideGroupInsideGroup = eoxMap.getLayerById(
      "layerInsideGroupInsideGroup"
    );
    expect(layerInsideGroupInsideGroup, "find layer inside group inside group")
      .to.exist;

    const parentParentGroup = layerInsideGroupInsideGroup
      .get("_group")
      .get("_group");
    expect(
      parentParentGroup.get("id"),
      "correctly sets reference to parent layers"
    ).to.be.equal("group");
  });
};

export default loadLayersInGroup;
