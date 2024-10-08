import { html } from "lit";
import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import vectorLayerStyleJson from "../../fixtures/vectorLayer.json";

/**
 * Tests to syncs one map to another using properties
 */
const syncProperties = () => {
  cy.intercept("https://openlayers.org/data/vector/ecoregions.json", (req) => {
    req.reply(ecoRegionsFixture);
  });
  vectorLayerStyleJson[0].visible = false;
  cy.mount(html`<eox-map .layers=${vectorLayerStyleJson}></eox-map>`).as(
    "eox-map",
  );
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const layer = eoxMap.getLayerById("regions");

    layer.setVisible(true);
    const jsonDefinition = layer.get("_jsonDefinition");
    expect(jsonDefinition.visible, "sync visible").to.be.equal(true);
    layer.setOpacity(0.5);
    expect(jsonDefinition.opacity, "sync opacity").to.be.equal(0.5);
    layer.set("foo", "bar");
    expect(jsonDefinition.properties.foo, "sync properties").to.be.equal("bar");
  });
};

export default syncProperties;
