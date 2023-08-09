import "../main";
import vectorTileLayerStyleJson from "./vectorTilesLayer.json";
import { VectorTile } from "ol/layer";

describe("VectorTile Layer", () => {
  it("loads a Vector Layer", () => {
    cy.mount(`<eox-map layers='${JSON.stringify(vectorTileLayerStyleJson)}'></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const layer = eoxMap.getLayerById("countries") as VectorTile;
      const features = layer
        .getSource()
        .getFeaturesInExtent(eoxMap.map.getView().calculateExtent());
      expect(features.length).to.be.greaterThan(10);
    });
  });
});
