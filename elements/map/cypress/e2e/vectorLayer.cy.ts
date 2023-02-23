import vectorLayerStyleJson from "./vectorLayer.json";

describe("GeoJSON Vector Layer", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("loads a GeoJSON Vector Layer", () => {
    cy.window().then((window) => {
      window.postMessage({
        "set-layers": vectorLayerStyleJson,
      }, "*" );
      window.map.once('rendercomplete', () => {
        const layers = window.map.getLayers().getArray();
        expect(layers).to.have.length(2);
      })
    });
  });
});