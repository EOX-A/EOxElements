import { html } from "lit";
import "../src/main";
import ecoRegionsFixture from "./fixtures/ecoregions.json";

describe("Map", () => {
  it("add and update layer", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    cy.intercept(/^.*openstreetmap.*$/, {
      fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
    });
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
          value: 1,
        },
        visible: true,
        opacity: 0.9,
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
          attributions: "Regions: @ openlayers.org",
        },
      };
      const eoxMap = $el[0];
      eoxMap.layers = [layerDefinition];

      const layer = eoxMap.getLayerById("regions");
      expect(layer, "add layer").to.exist;
      expect(layer.getOpacity(), "set opacity on new layer").to.be.equal(0.9);

      const updatedLayerDefinition = {
        type: "Vector",
        properties: {
          id: "regions",
          value: 2,
        },
        visible: true,
        opacity: 1,
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
          attributions: "Regions: @ openlayers.org",
        },
      };

      eoxMap.addOrUpdateLayer(updatedLayerDefinition);
      expect(layer.getOpacity(), "update opacity").to.be.equal(1);
      expect(
        layer.get("_jsonDefinition").properties.value,
        "update json definition object"
      ).to.be.equal(2);
    });
  });
});
