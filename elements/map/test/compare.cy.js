import { html } from "lit";
import "../src/main";
import imageWmsLayerStyleJson from "./imageWmsLayer.json";

describe("comparison", () => {
  beforeEach(() => {
    cy.intercept(/^.*openstreetmap.*$/, {
      fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
    });
    cy.intercept(/^.*geoserver.*$/, {
      fixture: "./map/test/fixtures/tiles/wms/wms0.png",
    });
  });
  it("allows shows two maps", () => {
    cy.mount(
      html` <eox-map-compare style="height: 300px">
        <eox-map
          slot="first"
          .layers=${[
            {
              type: "Tile",
              properties: { id: "osm" },
              source: { type: "OSM" },
            },
          ]}
          style="height: 300px"
        ></eox-map>
        <eox-map
          slot="second"
          sync="eox-map[slot=first]"
          .layers=${imageWmsLayerStyleJson}
          style="height: 300px"
        ></eox-map>
      </eox-map-compare>`
    ).as("eox-map-compare");
    cy.get("eox-map[slot=first]").should("be.visible");
    cy.get("eox-map[slot=second]").should("be.visible");
  });
  it("shows only the first map", () => {
    cy.mount(
      html` <eox-map-compare enabled="first" style="height: 300px">
        <eox-map
          slot="first"
          .layers=${[
            {
              type: "Tile",
              properties: { id: "osm" },
              source: { type: "OSM" },
            },
          ]}
          style="height: 300px"
        ></eox-map>
        <eox-map
          slot="second"
          sync="eox-map[slot=first]"
          .layers=${imageWmsLayerStyleJson}
          style="height: 300px"
        ></eox-map>
      </eox-map-compare>`
    ).as("eox-map-compare");
    cy.get("eox-map[slot=first]").should("be.visible");
    cy.get("eox-map[slot=second]").should("not.be.visible");
    cy.get("eox-map[slot=second]").should("exist");
  });
  it("shows only the second map", () => {
    cy.mount(
      html` <eox-map-compare enabled="second" style="height: 300px">
        <eox-map
          slot="first"
          .layers=${[
            {
              type: "Tile",
              properties: { id: "osm" },
              source: { type: "OSM" },
            },
          ]}
          style="height: 300px"
        ></eox-map>
        <eox-map
          slot="second"
          sync="eox-map[slot=first]"
          .layers=${imageWmsLayerStyleJson}
          style="height: 300px"
        ></eox-map>
      </eox-map-compare>`
    ).as("eox-map-compare");
    cy.get("eox-map[slot=first]").should("not.be.visible");
    cy.get("eox-map[slot=first]").should("exist");
    cy.get("eox-map[slot=second]").should("be.visible");
  });
});
