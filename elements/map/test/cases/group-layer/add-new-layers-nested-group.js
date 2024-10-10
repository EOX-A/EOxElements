import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";

/**
 * Tests to add new layers inside nested group reactively
 */
const addNewLayersNestedGroup = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  cy.intercept(/^.*openstreetmap.*$/, {
    fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
  });
  const layersJson = [
    {
      type: "Group",
      properties: { id: "outerGroup" },
      layers: [
        {
          type: "Group",
          properties: {
            id: "groupLayerInsideGroup",
          },
          layers: [
            {
              type: "Tile",
              properties: {
                id: "layerInsideGroupInsideGroup",
              },
              source: {
                type: "OSM",
              },
            },
          ],
        },
      ],
    },
  ];

  cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");

  layersJson[0].layers[0].layers.push({
    type: "Vector",
    properties: {
      id: "regionsRed",
    },
    style: {
      "fill-color": "red",
    },
    source: {
      type: "Vector",
      url: "https://openlayers.org/data/vector/ecoregions.json",
      format: "GeoJSON",
    },
  });

  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    eoxMap.layers = layersJson;
    const layer = eoxMap.getLayerById("regionsRed");
    const styleObject = layer.getStyle();
    const fillColor = styleObject["fill-color"];
    expect(fillColor, "reactive layer 2 levels deep").to.be.equal("red");
  });
};

export default addNewLayersNestedGroup;
