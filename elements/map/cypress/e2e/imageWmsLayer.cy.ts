import { createMap } from "../../src/interface";
import imageWmsLayerStyleJson from "./imageWmsLayer.json";

// fixme: imageWMS is identical to tileWMS
describe("layers", () => {
  beforeEach(() => {
    cy.visit("../../public/test.html");
  });
  it("loads a WMTS Layer", () => {
    cy.document().then((doc) => {
      const init = async () => {
        const map = await createMap(doc.querySelector("#map"));
        await map?.setLayers(imageWmsLayerStyleJson);
        const layers = await map?.getLayers();
        expect(layers).to.have.lengthOf(2);
      };
      init();
    });
  });
});