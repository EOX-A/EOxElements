import { EOxMap } from "../main";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("layers", () => {
  it("loads a Vector Layer", () => {
    const eoxMap = new EOxMap();
    // @ts-ignore
    cy.mount(eoxMap).as("eox-map");
    eoxMap.setLayers(vectorLayerStyleJson);
    const layers = eoxMap.map.getLayers().getArray();
    expect(layers).to.have.length(1);
    expect(eoxMap.getLayerById("regions")).to.exist;
  });
});
