import { html } from "lit";
import "../main";
import vectorLayerStyleJson from "./vectorLayer.json";

describe("layers", () => {
  it("syncs properties", () => {
    cy.intercept("https://openlayers.org/data/vector/ecoregions.json", {
      fixture: "/ecoregions.json",
    });
    vectorLayerStyleJson[0].visible = false;
    cy.mount(html`<eox-map .layers=${vectorLayerStyleJson}></eox-map>`).as(
      "eox-map"
    );
    cy.get("eox-map").and(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const layer = eoxMap.getLayerById("regions");
      expect(layer.getVisible(), "set default visibility").to.be.equal(false);
      const jsonDefinition = layer.get("_jsonDefinition");
      layer.setVisible(true);
      expect(jsonDefinition.visible, "sync visible").to.be.equal(true);
      layer.setOpacity(0.5);
      expect(jsonDefinition.opacity, "sync opacity").to.be.equal(0.5);
      layer.set("foo", "bar");
      expect(jsonDefinition.properties.foo, "sync properties").to.be.equal(
        "bar"
      );
    });
  });
});
