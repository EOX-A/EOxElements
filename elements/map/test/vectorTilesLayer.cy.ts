import { EOxMap } from "../main";
import vectorTileLayerStyleJson from "./vectorTilesLayer.json";
import { VectorTile } from "ol/layer";

describe("VectorTile Layer", () => {
  beforeEach(() => {
    cy.visit("/elements/map/test/general.html");
  });
  it("loads a Vector Layer, applies flat style", () => {
    return new Cypress.Promise((resolve) => {
      cy.get("eox-map").should(($el) => {
        const eoxMap = <EOxMap>$el[0];
        //@ts-ignore
        vectorTileLayerStyleJson[0].style = {
          // @ts-ignore
          "fill-color": "yellow",
          "stroke-color": "black",
          "stroke-width": 4,
        };
        eoxMap.setLayers(vectorTileLayerStyleJson);
        const layer = eoxMap.getLayerById("countries") as VectorTile;
        setTimeout(() => {
          // to do: not able to wait for rendercomplete directly, as `applyStyle` is async
          const features = layer
            .getSource()
            .getFeaturesInExtent(eoxMap.map.getView().calculateExtent());
          expect(features.length).to.be.greaterThan(10);
          resolve();
        }, 1000);
      });
    });
  });
  it("loads a Vector Layer, applies mapbox style", () => {
    return new Cypress.Promise((resolve) => {
      cy.get("eox-map").should(($el) => {
        const eoxMap = <EOxMap>$el[0];
        //@ts-ignore
        vectorTileLayerStyleJson[0].style = {
          version: 8,
          name: "countries",
          sources: {},
          layers: [
            {
              id: "countries_fill",
              type: "fill",
              source: "countries",
              "source-layer": "ne_10m_admin_0_countries",
              paint: {
                "fill-color": "green",
                "fill-opacity": 1,
              },
            },
            {
              id: "countries_outline",
              type: "line",
              source: "countries",
              "source-layer": "ne_10m_admin_0_countries",
              paint: {
                "line-color": "#cdcdcd",
                "line-width": 2.5,
              },
            },
          ],
        };
        eoxMap.setLayers(vectorTileLayerStyleJson);
        const layer = eoxMap.getLayerById("countries") as VectorTile;
        setTimeout(() => {
          // to do: not able to wait for rendercomplete directly, as `applyStyle` is async
          const features = layer
            .getSource()
            .getFeaturesInExtent(eoxMap.map.getView().calculateExtent());
          expect(features.length).to.be.greaterThan(10);
          resolve();
        }, 1000);
      });
    });
  });
});
