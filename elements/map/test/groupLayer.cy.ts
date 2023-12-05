import { html } from "lit";
import "../main";
import { EoxLayer } from "../src/generate";

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
];

describe("layers", () => {
  it("loads a Vector Layer in a group", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    cy.intercept(/^.*openstreetmap.*$/, { fixture: "/tiles/osm/0/0/0.png" });

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
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    cy.intercept(/^.*openstreetmap.*$/, { fixture: "/tiles/osm/0/0/0.png" });

    cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      //@ts-ignore
      layersJson[0].layers.push(osmJson);
      eoxMap.layers = layersJson as Array<EoxLayer>;
      const newOsmInGroup = eoxMap.getLayerById("osm");
      expect(newOsmInGroup, "reactively add layer to group").to.exist;
    });
  });

  it("reactively removes layer from group", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    cy.intercept(/^.*openstreetmap.*$/, { fixture: "/tiles/osm/0/0/0.png" });

    cy.mount(html`<eox-map .layers=${layersJson}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      layersJson[0].layers.length = 1;
      eoxMap.layers = layersJson as Array<EoxLayer>;
      expect(
        eoxMap.getLayerById("groupLayerInsideGroup"),
        "reactively remove layer from group"
      ).to.not.exist;
    });
  });
});
