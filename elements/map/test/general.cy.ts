import { html } from "lit";
import { equals } from "ol/coordinate";
import { Layer } from "ol/layer";
import { EoxLayer } from "../src/generate";
import "../main";

describe("Map", () => {
  it("map should exist", () => {
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
      expect((<EOxMap>$el[0]).map).to.exist;
    });
  });

  it("should parse zoom/center properties correctly", () => {
    cy.mount(
      html`<eox-map .zoom=${7} .center=${[1113194, 2273030]}></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const zoom = eoxMap.map.getView().getZoom();
      const center = eoxMap.map.getView().getCenter();
      expect(eoxMap.zoom).to.equal(zoom);
      expect(eoxMap.map.getView().getZoom()).to.equal(zoom);
      expect(eoxMap.center).to.deep.equal(center);
      expect(eoxMap.map.getView().getCenter()).to.deep.equal(center);

      eoxMap.zoom = 2;
      expect(eoxMap.map.getView().getZoom()).to.equal(2);

      const newCenter = [1113195, 2273031];
      eoxMap.center = newCenter;
      expect(eoxMap.map.getView().getCenter()).to.deep.equal(newCenter);
    });
  });

  it("correctly parses and guesses web mercator and lonLat center coordinate systems", () => {
    cy.mount(html`<eox-map .zoom=${7} .center=${[20, 20]}></eox-map>`).as(
      "eox-map"
    );
    cy.get("eox-map").and(($el) => {
      expect(
        equals(
          (<EOxMap>$el[0]).map.getView().getCenter(),
          [2226389.8158654715, 2273030.926987689]
        ),
        "parse lon lat center"
      ).to.be.true;
    });
  });

  it("correctly initializes center as 0,0 if none provided", () => {
    cy.mount(html`<eox-map .zoom=${7}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const center = (<EOxMap>$el[0]).map.getView().getCenter();
      expect(
        center,
        "set center to [0, 0] if nothing is defined"
      ).to.deep.equal([0, 0]);
    });
  });

  it("should return a layer via id", () => {
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
      expect((<EOxMap>$el[0]).getLayerById("osm").get("id") === "osm").to.exist;
    });
  });

  it("should return flat layers array", () => {
    cy.intercept(/^.*openstreetmap.*$/, {
      fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
    });
    cy.mount(
      html`<eox-map
        .layers=${[
          {
            type: "Group",
            properties: { id: "group1" },
            layers: [
              {
                type: "Group",
                properties: { id: "group2" },
                layers: [
                  {
                    type: "Tile",
                    properties: { id: "osm" },
                    source: { type: "OSM" },
                  },
                ],
              },
            ],
          },
        ]}
      ></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const layersArray = eoxMap.getFlatLayersArray(
        eoxMap.map.getLayers().getArray() as Array<Layer>
      );
      expect(layersArray.length).to.equal(3);
      expect(layersArray.find((l) => l.get("id") === "group1")).to.exist;
      expect(layersArray.find((l) => l.get("id") === "group2")).to.exist;
      expect(layersArray.find((l) => l.get("id") === "osm")).to.exist;
    });
  });

  it("doesn't reverse the input layer array", { retries: 0 }, () => {
    cy.intercept(/^.*openstreetmap.*$/, {
      fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
    });
    cy.mount(html`<eox-map></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const layersArray = [
        { type: "Tile", properties: { id: "1" }, source: { type: "OSM" } },
        { type: "Tile", properties: { id: "2" }, source: { type: "OSM" } },
        { type: "Tile", properties: { id: "3" }, source: { type: "OSM" } },
      ];
      const eoxMap = <EOxMap>$el[0];
      eoxMap.layers = <EoxLayer[]>layersArray;
      expect(layersArray.map((l) => l.properties.id).join("")).to.eq("123");
      expect(layersArray.map((l) => l.properties.id).join("")).to.not.eq("321");
      expect(
        eoxMap.map
          .getLayers()
          .getArray()
          .map((l) => l.get("id"))
          .join(""),
        "generate layers in reverse painters order"
      ).to.eq("321");
    });
  });
});
