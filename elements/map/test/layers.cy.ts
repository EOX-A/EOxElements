import { EOxMap } from "../main";
import mapboxStyleJson from "./layers.json";

describe("layers", () => {
  it("loads a set of layers from a JSON", () => {
    const eoxMap = new EOxMap();
    // @ts-ignore
    cy.mount(eoxMap).as("eox-map");
    eoxMap.setLayers(mapboxStyleJson);
    const layers = eoxMap.map.getLayers().getArray();
    expect(layers).to.have.length(mapboxStyleJson.length);
    mapboxStyleJson.forEach((mapboxStyleJson) => {
      const existingLayer = layers.find(
        (layer) => layer.get("title") === mapboxStyleJson.title
      );
      expect(existingLayer).to.exist;
    });
  });
});
