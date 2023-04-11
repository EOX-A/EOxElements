import { createMap } from "../../src/interface";
import vectorTileLayerStyleJson from "./vectorTilesLayer.json";

describe("vectorTiles", () => {
  beforeEach(() => {
    cy.visit("../../public/test.html");
  });
  it("renders features from a vector tile layer", () => {
    cy.document().then((doc) => {
      const init = async () => {
        const map = await createMap(doc.querySelector("#map"));
        await map?.setLayers(vectorTileLayerStyleJson);
        const layers = await map?.getLayers();
        expect(layers).to.have.lengthOf(2);
        const features = await map?.getFeatures();
        expect(features?.length).to.be.greaterThan(1000);
      };
      init();
    });
  });
});
