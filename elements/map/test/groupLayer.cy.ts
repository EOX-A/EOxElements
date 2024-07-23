import { html } from "lit";
import "../main";
import { EoxLayer } from "../src/generate";
import ecoRegionsFixture from "./fixtures/ecoregions.json";

const osmJson = {
  type: "Tile",
  properties: {
    id: "osm",
  },
  source: {
    type: "OSM",
  },
} as EoxLayer;

const layersJson = [
  {
    type: "Group",
    properties: {
      id: "group",
    },
    layers: [
      {
        type: "Vector",
        properties: {
          id: "regions",
        },
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
        },
      },
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
] as Array<EoxLayer>;

describe("layers", () => {
  it("loads a Vector Layer in a group", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    cy.intercept(/^.*openstreetmap.*$/, {
      fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
    });

    cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];

      const groupLayer = eoxMap.getLayerById("group");
      expect(groupLayer, "find group layer").to.exist;

      const layerInsideGroup = eoxMap.getLayerById("regions");
      expect(layerInsideGroup, "find layer inside group").to.exist;

      const groupLayerInsideGroup = eoxMap.getLayerById(
        "groupLayerInsideGroup"
      );
      expect(groupLayerInsideGroup, "find group layer inside group").to.exist;

      const layerInsideGroupInsideGroup = eoxMap.getLayerById(
        "layerInsideGroupInsideGroup"
      );
      expect(
        layerInsideGroupInsideGroup,
        "find layer inside group inside group"
      ).to.exist;

      const parentParentGroup = layerInsideGroupInsideGroup
        .get("_group")
        .get("_group");
      expect(
        parentParentGroup.get("id"),
        "correctly sets reference to parent layers"
      ).to.be.equal("group");
    });
  });

  it("reactively adds layer to group", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    cy.intercept(/^.*openstreetmap.*$/, {
      fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
    });

    cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      layersJson[0].layers.push(osmJson);
      eoxMap.layers = layersJson as Array<EoxLayer>;
      const newOsmInGroup = eoxMap.getLayerById("osm");
      expect(newOsmInGroup, "reactively add layer to group").to.exist;
    });
  });

  it("reactively removes layer from group", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    cy.intercept(/^.*openstreetmap.*$/, {
      fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
    });

    cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const jsonCopy = JSON.parse(JSON.stringify(layersJson));
      jsonCopy[0].layers.length = 1;
      eoxMap.layers = jsonCopy;
      expect(
        eoxMap.getLayerById("groupLayerInsideGroup"),
        "reactively remove layer from group"
      ).to.not.exist;
    });
  });

  it("layer inside group is reactive", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    cy.intercept(/^.*openstreetmap.*$/, {
      fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
    });
    cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];

      layersJson[0].layers[1].layers[0].opacity = 0.2;
      eoxMap.layers = layersJson as Array<EoxLayer>;

      expect(
        eoxMap.getLayerById("layerInsideGroupInsideGroup").getOpacity(),
        "reactive layer 2 levels deep"
      ).to.be.equal(0.2);
    });
  });

  it("can reactively add new layers to nested groups", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
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
    ] as Array<EoxLayer>;

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
    } as EoxLayer);

    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.layers = layersJson as Array<EoxLayer>;
      const layer = eoxMap.getLayerById(
        "regionsRed"
      ) as import("ol/layer").Vector<import("ol/Feature").default>;
      const styleObject = layer.getStyle() as import("ol/style/flat").FlatStyle;
      const fillColor = styleObject["fill-color"];
      expect(fillColor, "reactive layer 2 levels deep").to.be.equal("red");
    });
  });

  it("realistic groupLayer reactivity", () => {
    const layersJson = [
      {
        type: "Group",
        properties: {
          id: "group1",
        },
        layers: [
          {
            type: "Vector",
            properties: {
              id: "dummyInsideGroup1",
            },
          },
        ],
      },
      {
        type: "Group",
        properties: {
          id: "group2",
        },
        layers: [
          {
            type: "Vector",
            properties: {
              id: "dummyInsideGroup2",
            },
          },
        ],
      },
      {
        type: "Group",
        properties: {
          id: "group3",
        },
        layers: [
          {
            type: "Vector",
            properties: {
              id: "dummyInsideGroup3",
            },
          },
        ],
      },
    ] as Array<EoxLayer>;

    cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const allRealLayers = eoxMap.getFlatLayersArray(
        eoxMap.map.getAllLayers()
      );
      expect(allRealLayers.length).to.be.equal(3);
      layersJson[0].layers = [
        {
          type: "Vector",
          properties: {
            id: "newDummyInsideGroup1",
          },
          opacity: 0.5,
        },
      ];
      layersJson[0].layers.push({
        type: "Vector",
        properties: {
          id: "newDummyInsideGroup2",
        },
        opacity: 0.5,
      });
      eoxMap.layers = layersJson as Array<EoxLayer>;
      const newRealLayers = eoxMap.getFlatLayersArray(
        eoxMap.map.getAllLayers()
      );

      expect(
        newRealLayers.length,
        "correctly updates a layer inside group"
      ).to.be.equal(4);
      const newLayer = eoxMap.getLayerById("newDummyInsideGroup1");
      expect(
        newLayer.getOpacity(),
        "correctly updates a layer inside group"
      ).to.be.equal(0.5);
    });
  });
});
