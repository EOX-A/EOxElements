import { createMap } from "../../src/interface";
import mapboxStyleJson from "./layers.json";

describe("layers", () => {
  beforeEach(() => {
    cy.visit("../../public/test.html");
  });
  it("loads a set of layers from a JSON", () => {
    cy.document().then((doc) => {
      const init = async () => {
        const map = await createMap(doc.querySelector("#map"));
        await map?.setLayers(mapboxStyleJson);
        const layers = await map?.getLayers();
        expect(layers).to.have.length(mapboxStyleJson.length);
        // TODO
        mapboxStyleJson.forEach((mapboxStyleJson) => {
          const existingLayer = layers?.find(
            (layer) => layer.title === mapboxStyleJson.title
          );
          expect(existingLayer).to.exist;
        });
      };
      init();
    });
  });
});
