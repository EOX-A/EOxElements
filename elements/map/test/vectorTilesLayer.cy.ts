import { html } from "lit";
import { VectorTile } from "ol/layer";
import "../main";
import vectorTileLayerStyleJson from "./vectorTilesLayer.json";
import { EoxLayer } from "../src/generate";

describe("VectorTile Layer", () => {
  it("loads a Vector Tile Layer, applies flat style", () => {
    cy.intercept(/^.*geoserver.*$/, {
      fixture:
        "./map/test/fixtures/tiles/mapbox-streets-v6/14/8937/5679.vector.pbf,null",
      encoding: "binary",
    });

    (vectorTileLayerStyleJson[0] as EoxLayer).style = {
      "fill-color": "yellow",
      "stroke-color": "black",
      "stroke-width": 4,
    };
    cy.mount(
      html`<eox-map .zoom=${1} .layers=${vectorTileLayerStyleJson}></eox-map>`
    ).as("eox-map");
    return new Cypress.Promise((resolve) => {
      cy.get("eox-map").should(($el) => {
        const eoxMap = <EOxMap>$el[0];
        const layer = eoxMap.getLayerById("countries") as VectorTile;
        setTimeout(() => {
          // to do: not able to wait for rendercomplete directly, as `applyStyle` is async
          const features = layer.getFeaturesInExtent(
            eoxMap.map.getView().calculateExtent()
          );
          expect(features.length).to.be.greaterThan(10);
          resolve();
        }, 1000);
      });
    });
  });
});
