import { createMap } from "../../src/interface";
import tileWmsLayerStyleJson from "./tileWmsLayer.json";

describe("layers", () => {
  beforeEach(() => {
    cy.visit("../../public/test.html");
  });
  it("loads a WMTS Layer", () => {
    cy.document().then((doc) => {
      const init = async () => {
        const map = await createMap(doc.querySelector("#map"));
        await map?.setLayers(tileWmsLayerStyleJson);
        const layers = await map?.getLayers();
        expect(layers).to.have.lengthOf(2);
      };
      init();
    });
  });
});