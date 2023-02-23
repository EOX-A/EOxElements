import vectorTileLayerStyleJson from "./vectorTilesLayer.json";
import { VectorTile } from 'ol/layer';

describe("vectorTiles", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("renders features from a vector tile layer", () => {
    cy.window().then((window) => {
      window.postMessage({
        "set-layers": vectorTileLayerStyleJson,
      }, "*" );
    window.map.once('rendercomplete', () => {
      const layers = window.map
        .getLayers()
        .getArray()
      expect(layers).to.have.length(2);

      const layer = layers.find((l) => l.get('mapbox-source') === "countries") as VectorTile
      const features = layer?.getSource()
        ?.getFeaturesInExtent(window.map.getView().calculateExtent());
      expect(features?.length).to.be.greaterThan(1000);
    });
    });
  });
});
