import mapboxStyleJson from "./layers.json";
describe("layers", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("loads a set of layers from a JSON", () => {
    cy.window().then((window) => {
      window.postMessage(
        {
          "set-layers": mapboxStyleJson,
        },
        "*"
      );
      window.map.once('rendercomplete', () => {
        const layers = window.map.getLayers().getArray();
        expect(layers).to.have.length(mapboxStyleJson.length);
        mapboxStyleJson.forEach((mapboxStyleJson) => {
          const existingLayer = layers.find(
            (layer) => layer.get("title") === mapboxStyleJson.title
          );
          expect(existingLayer).to.exist;
        });
      });
    });
  });
});
