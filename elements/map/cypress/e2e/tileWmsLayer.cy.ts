import tileWmsLayerStyleJson from "./tileWmsLayer.json";

describe("layers", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("loads a WMTS Layer", () => {
    cy.window().then((window) => {
      window.postMessage({
        "set-layers": tileWmsLayerStyleJson,
      }, "*" );
      window.map.once('rendercomplete', () => {
        const layers = window.map.getLayers().getArray();
        expect(layers).to.have.length(2);
      })
    });
  });
});