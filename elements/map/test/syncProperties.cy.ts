import "../main";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("layers", () => {
  it("loads a Vector Layer", () => {
    vectorLayerStyleJson[0].properties.visible = false;
    cy.mount(
      `<eox-map layers='${JSON.stringify(vectorLayerStyleJson)}'></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const layer = eoxMap.getLayerById("regions");
      expect(layer.getVisible(), "set default visibility").to.be.equal(false);
      const jsonDefinition = layer.get("_jsonDefinition");
      layer.setVisible(true);
      expect(jsonDefinition.properties.visible, "sync visible").to.be.equal(
        true
      );
      layer.setOpacity(0.5);
      expect(jsonDefinition.properties.opacity, "sync opacity").to.be.equal(
        0.5
      );
      layer.set("foo", "bar");
      expect(jsonDefinition.properties.foo, "sync properties").to.be.equal(
        "bar"
      );
    });
  });
});
