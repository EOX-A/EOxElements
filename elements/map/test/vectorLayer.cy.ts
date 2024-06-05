import { html } from "lit";
import "../main";
import vectorLayerStyleJson from "./vectorLayer.json";
import ecoRegionsFixture from "./fixtures/ecoregions.json";
import { EoxLayer } from "../src/generate";

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
    cy.mount(html`<eox-map .layers=${[]}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.registerProjection(
        "ESRI:53009",
        "+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 " +
          "+b=6371000 +units=m +no_defs"
      );
      eoxMap.setAttribute("projection", "ESRI:53009");

      const layerWithFormats = Object.assign(
        {},
        vectorLayerStyleJson[0]
      ) as EoxLayer;

      layerWithFormats.source.format = {
        type: "GeoJSON",
        dataProjection: "EPSG:53009",
      };
      eoxMap.layers = [layerWithFormats];

      const layers = eoxMap.map.getLayers().getArray();
      expect(layers).to.have.length(1);
      expect(eoxMap.getLayerById("regions")).to.exist;
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
