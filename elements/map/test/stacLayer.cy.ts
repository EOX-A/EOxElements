import "../main";
import stacLayerJson from "./stacLayer.json";

describe("layers", () => {
  it("loads a Vector Layer", () => {
    cy.mount(
      `<eox-map layers='${JSON.stringify(stacLayerJson)}'></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      eoxMap.map.getLayers().getArray();
      const stacLayer = eoxMap.getLayerById("stacLayer");
      expect(stacLayer).to.exist;
      stacLayer.on("sourceready", () => {
        const view = eoxMap.map.getView();
        view.fit(stacLayer.getExtent());
      });
    });
  });
});
