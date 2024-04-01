import { html } from "lit";
import "../main";
import { EoxLayer } from "../src/generate";
import ecoRegionsFixture from "./fixtures/ecoregions.json"
import tilesFixture from "./fixtures/tiles/osm/0/0/0.png"

describe("Map", () => {
  it("add and update layer", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
      req.reply(ecoRegionsFixture)
    });
    cy.intercept(/^.*openstreetmap.*$/, (req) => { req.reply(tilesFixture) });
    cy.mount(
      html`<eox-map
        .layers=${[
          { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
        ]}
      ></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const layerDefinition = {
        type: "Vector",
        properties: {
          id: "regions",
        },
        visible: true,
        opacity: 0.9,
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
          attributions: "Regions: @ openlayers.org",
        },
      } as EoxLayer;
      const eoxMap = <EOxMap>$el[0];
      eoxMap.layers = [layerDefinition];

      const layer = eoxMap.getLayerById("regions");
      expect(layer).to.exist;
      expect(layer.getOpacity()).to.be.equal(0.9);

      const updatedLayerDefinition = {
        type: "Vector",
        properties: {
          id: "regions",
        },
        visible: true,
        opacity: 1,
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
          attributions: "Regions: @ openlayers.org",
        },
      } as EoxLayer;

      eoxMap.addOrUpdateLayer(updatedLayerDefinition);
      expect(layer.getOpacity()).to.be.equal(1);
    });
  });
});
