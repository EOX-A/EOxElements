import { createMap } from "../../src/interface";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("GeoJSON Vector Layer", () => {
  beforeEach(() => {
    cy.visit("../../public/test.html");
  });
  it("loads a GeoJSON Vector Layer", () => {
    cy.document().then((doc) => {
      const init = async () => {
        const map = await createMap(doc.querySelector("#map"));
        await map?.setLayers(vectorLayerStyleJson);
        const layers = await map?.getLayers();
        expect(layers).to.have.lengthOf(2);
      };
      init();
    });
  });
});