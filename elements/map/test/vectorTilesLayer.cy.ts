import { EOxMap } from "../main";
import vectorTileLayerStyleJson from "./vectorTilesLayer.json";
import { VectorTile } from "ol/layer";

describe("VectorTile Layer", () => {
  before(() => {
    const eoxMap = new EOxMap();
    // @ts-ignore
    cy.mount(eoxMap).as("eox-map");
    eoxMap.setLayers(vectorTileLayerStyleJson);
  });
  it("loads a Vector Layer", () => {
    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const layer = eoxMap.getLayerById("countries") as VectorTile;
      const features = layer
        .getSource()
        .getFeaturesInExtent(eoxMap.map.getView().calculateExtent());
      expect(features.length).to.be.greaterThan(10);
    });
  });
});
