import testLayers from "./layers.json";
describe("layers", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("loads a set of layers from a JSON", () => {
    cy.window().then((window) => {
      window.postMessage(
        {
          "update-layers": testLayers,
        },
        "*"
      );
      cy.wait(0).then(() => {
        const layers = window.map.getLayers().getArray();
        expect(layers).to.have.length(testLayers.length);
        testLayers.forEach((testLayer) => {
          const existingLayer = layers.find(
            (layer) => layer.get("title") === testLayer.title
          );
          expect(existingLayer).to.exist;
        });
      });
    });
  });
});
