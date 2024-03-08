import { html } from "lit";
import "../main";
import { registerProjection, registerProjectionFromCode } from "../helpers";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("view projections", () => {
  it("can set the initial projection of the view", () => {
    cy.intercept(/^.*openstreetmap.*$/, { fixture: "/tiles/osm/0/0/0.png" });
    cy.mount(
      html`<eox-map
        .layers=${[
          {
            type: "Tile",
            properties: {
              id: "customId",
            },
            source: {
              type: "OSM",
            },
          },
        ]}
        .projection=${"EPSG:4326"}
      ></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      expect(eoxMap.map.getView().getProjection().getCode()).to.be.equal(
        "EPSG:4326"
      );
    });
  });

  it("can change the projection of the view", () => {
    cy.intercept(/^.*openstreetmap.*$/, { fixture: "/tiles/osm/0/0/0.png" });

    cy.mount(
      html`<eox-map
        .layers=${[
          {
            type: "Tile",
            properties: {
              id: "customId",
            },
            source: {
              type: "OSM",
            },
          },
        ]}
      ></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.map
        .getView()
        .on("change:resolution", (e) =>
          e.target.set("keepResolutionListener", true)
        );
      eoxMap.map
        .getView()
        .on("change:rotation", (e) =>
          e.target.set("keepRotationListener", true)
        );
      eoxMap.map
        .getView()
        .on("change:center", (e) => e.target.set("keepCenterListener", true));
      setTimeout(() => {
        eoxMap.projection = "EPSG:4326";
        expect(eoxMap.map.getView().getProjection().getCode()).to.be.equal(
          "EPSG:4326"
        );
        const newView = eoxMap.map.getView();
        newView.setZoom(newView.getZoom() + 1);
        newView.setRotation(1);
        newView.setCenter([1, 1]);

        setTimeout(() => {
          expect(
            eoxMap.map.getView().get("keepResolutionListener"),
            "keeps resolution listener"
          ).to.be.true;
          expect(
            eoxMap.map.getView().get("keepRotationListener"),
            "keeps rotation listener"
          ).to.be.true;
          expect(
            eoxMap.map.getView().get("keepCenterListener"),
            "keeps center listener"
          ).to.be.true;
        }, 100);
      }, 1000);
    });
  });

  it("use special projection", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    registerProjection(
      "ESRI:53009",
      "+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 " +
        "+b=6371000 +units=m +no_defs"
    );
    // not using osm because of performance issues while testing
    cy.mount(
      html`<eox-map
        .layers=${vectorLayerStyleJson}
        .projection=${"ESRI:53009"}
      ></eox-map>`
    ).as("eox-map");

    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      setTimeout(() => {
        expect(eoxMap.map.getView().getProjection().getCode()).to.be.equal(
          "ESRI:53009"
        );
      }, 1000);
    });
  });

  it("fetch projection from code", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    cy.mount(
      html`<eox-map
        .controls=${{
          Zoom: {},
          Attribution: {},
          FullScreen: {},
          OverviewMap: {
            layers: [
              {
                type: "Tile",
                properties: {
                  id: "customId",
                },
                source: {
                  type: "OSM",
                },
              },
            ],
          },
        }}
        .layers=${[
          {
            type: "Tile",
            properties: {
              id: "customId",
            },
            source: {
              type: "OSM",
            },
          },
        ]}
      ></eox-map>`
    ).as("eox-map");

    cy.get("eox-map").and(($el) => {
      registerProjectionFromCode("EPSG:32633").then(() => {
        const eoxMap = <EOxMap>$el[0];
        eoxMap.setAttribute("projection", "EPSG:32633");
        setTimeout(() => {
          expect(eoxMap.map.getView().getProjection().getCode()).to.be.equal(
            "EPSG:32633"
          );
        }, 1000);
      });
    });
  });
});
