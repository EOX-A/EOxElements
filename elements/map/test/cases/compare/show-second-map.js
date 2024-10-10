import { html } from "lit";
import imageWmsLayerStyleJson from "../../fixtures/imageWmsLayer.json";

/**
 * Tests to show only second map in compare component in EOx Map
 */
const showOnlySecondMap = () => {
  cy.mount(
    html` <eox-map-compare enabled="second" style="height: 300px">
      <eox-map
        slot="first"
        .layers=${[
          {
            type: "Tile",
            properties: { id: "osm" },
            source: { type: "OSM" },
          },
        ]}
        style="height: 300px"
      ></eox-map>
      <eox-map
        slot="second"
        sync="eox-map[slot=first]"
        .layers=${imageWmsLayerStyleJson}
        style="height: 300px"
      ></eox-map>
    </eox-map-compare>`,
  ).as("eox-map-compare");
  cy.get("eox-map[slot=first]").should("not.be.visible");
  cy.get("eox-map[slot=first]").should("exist");
  cy.get("eox-map[slot=second]").should("be.visible");
};

export default showOnlySecondMap;
