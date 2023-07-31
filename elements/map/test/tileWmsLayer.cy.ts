import { EOxMap } from "../main";
import tileWmsLayerStyleJson from "./tileWmsLayer.json";

describe("layers", () => {
  it("loads a tiled WMS Layer", () => {
    const eoxMap = new EOxMap();
    // @ts-ignore
    cy.mount(eoxMap).as("eox-map");
    eoxMap.setLayers(tileWmsLayerStyleJson);

    const layers = eoxMap.map.getLayers().getArray();
    expect(layers).to.have.length(1);
    expect(layers[0].get("id")).to.be.equal("customId");
  });
});
