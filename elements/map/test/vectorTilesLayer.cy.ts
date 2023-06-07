import { EOxMap } from "../main";
import vectorTileLayerStyleJson from "./vectorTilesLayer.json";
import { VectorTile } from "ol/layer";

describe("layers", () => {
  before(() => {
    cy.visit("/elements/map/test/general.html");
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.setLayers(vectorTileLayerStyleJson);
    });
  });
  it("loads a Vector Layer", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const layers = eoxMap.map.getLayers().getArray();
      expect(layers).to.have.length(2);
      const layer = layers.find(
        (l) => l.get("mapbox-source") === "countries"
      ) as VectorTile;
      const features = layer
        .getSource()
        .getFeaturesInExtent(eoxMap.map.getView().calculateExtent());
      expect(features.length).to.be.greaterThan(10);
    });
  });
});
