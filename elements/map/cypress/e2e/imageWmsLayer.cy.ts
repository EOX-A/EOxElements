import testLayers from "./imageWmsLayer.json";


// fixme: imageWMS is identical to tileWMS
describe("layers", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("loads a WMTS Layer", () => {
    cy.window().then((window) => {
      window.postMessage({
        "set-layers": testLayers,
      },
      "*"
      );
      window.map.once('rendercomplete', () => {
        const layers = window.map.getLayers().getArray();
        expect(layers).to.have.length(2);
      })
    });
  });
});