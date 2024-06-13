import { html } from "lit";
import "../main";
import vectorLayerStyleJson from "./vectorLayer.json";
import ecoRegionsFixture from "./fixtures/ecoregions.json";
import tempFixture from "./fixtures/budapest3035.json";

describe("layers", () => {
  it("loads a Vector Layer", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    cy.mount(html`<eox-map .layers=${vectorLayerStyleJson}></eox-map>`).as(
      "eox-map"
    );
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const layers = eoxMap.map.getLayers().getArray();
      expect(layers).to.have.length(1);
      expect(eoxMap.getLayerById("regions")).to.exist;
    });
  });
  it("apply geojson format options", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    cy.intercept("https://budapest", (req) => {
      req.reply(tempFixture);
    });
    cy.mount(html`<eox-map .layers=${[]}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.registerProjection(
        "EPSG:3035",
        "+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"
      );

      const layerWithFormats = {
        type: "Vector",
        properties: { id: "0" },
        style: {
          "stroke-color": "black",
          "stroke-width": 1,
        },
        source: {
          type: "Vector",
          url: "https://budapest",
          format: {
        type: "GeoJSON",
            dataProjection: "EPSG:3035",
          },
        },
      } as import("../src/generate").EoxLayer;
      eoxMap.layers = [layerWithFormats];

      const source = eoxMap
        .getLayerById("0")
        .getSource() as import("ol/source/Vector").default<
        import("ol/Feature").default<import("ol/geom/MultiPolygon").default>
      >;
      const coordinates = source
        .getFeatures()[0]
        .getGeometry()
        .getCoordinates();
      const firstVertex = coordinates[0][0][0];
      expect(
        Math.floor(firstVertex[0]),
        "correctly transforms coordinates"
      ).to.be.equal(2106704);
      expect(
        Math.floor(firstVertex[1]),
        "correctly transforms coordinates"
      ).to.be.equal(6027918);
    });
  });

  it("correctly applies flat style", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    (vectorLayerStyleJson[0] as import("../src/generate").EoxLayer).style = {
      "fill-color": "yellow",
      "stroke-color": "black",
      "stroke-width": 2,
    };
    cy.mount(html`<eox-map .layers=${vectorLayerStyleJson}></eox-map>`).as(
      "eox-map"
    );
    cy.get("eox-map").and(($el) => {
      return new Cypress.Promise((resolve) => {
        const layer = (<EOxMap>$el[0]).map
          .getLayers()
          .getArray()[0] as import("ol/layer/Vector").default<
          import("ol/Feature").FeatureLike
        >;
        // wait for features to load
        layer.getSource().on("featuresloadend", () => {
          const feature = layer.getSource().getFeatures()[0];
          const styles = layer.getStyleFunction()(feature, 1);
          expect(styles).to.have.length(1);
          resolve();
        });
      });
    });
  });
  it("correctly applies style expression", () => {
    cy.intercept(
      "https://openlayers.org/data/vector/ecoregions.json",
      (req) => {
        req.reply(ecoRegionsFixture);
      }
    );
    (vectorLayerStyleJson[0] as import("../src/generate").EoxLayer).style = {
      "fill-color": ["string", ["get", "COLOR"], "#eee"],
      "stroke-color": "black",
      "stroke-width": 2,
    };
    cy.mount(html`<eox-map .layers=${vectorLayerStyleJson}></eox-map>`).as(
      "eox-map"
    );
    cy.get("eox-map").and(($el) => {
      return new Cypress.Promise((resolve) => {
        // wait for features to load
        const eoxMap = <EOxMap>$el[0];
        const layer = eoxMap.getLayerById(
          "regions"
        ) as import("ol/layer/Vector").default<
          import("ol/Feature").FeatureLike
        >;
        const source = layer.getSource() as import("ol/source/Vector").default<
          import("ol/Feature").FeatureLike
        >;
        source.on("featuresloadend", () => {
          const feature = source.getFeatures()[0];
          const styles = layer.getStyleFunction()(feature, 100);
          expect(styles).to.have.length(1);
          resolve();
        });
      });
    });
  });
});
