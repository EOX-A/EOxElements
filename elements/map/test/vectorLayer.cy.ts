import "../main";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("layers", () => {
  it("loads a Vector Layer", () => {
    cy.mount(`<eox-map layers='${JSON.stringify(vectorLayerStyleJson)}'></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
    const layers = eoxMap.map.getLayers().getArray();
    expect(layers).to.have.length(1);
    expect(eoxMap.getLayerById("regions")).to.exist;
    })
  });
});
