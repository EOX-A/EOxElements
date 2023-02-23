import imageWmsLayerStyleJson from "./imageWmsLayer.json";

// fixme: imageWMS is identical to tileWMS
describe("layers", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("loads a WMTS Layer", () => {
    cy.window().then((window) => {
      window.postMessage({
        "set-layers": imageWmsLayerStyleJson,
      }, "*" );
      window.map.once('rendercomplete', () => {
        const layers = window.map.getLayers().getArray();
        expect(layers, 'image WMS layer').to.have.length(2);
      })
    });
  });
});