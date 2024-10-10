import { html } from "lit";
import imageWmsLayerStyleJson from "../../fixtures/imageWmsLayer.json";

/**
 * Tests to show only first map in compare component in EOx Map
 */
const showOnlyFirstMap = () => {
  cy.mount(
    html` <eox-map-compare enabled="first" style="height: 300px">
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
    </eox-map-compare>`
  ).as("eox-map-compare");
  cy.get("eox-map[slot=first]").should("be.visible");
  cy.get("eox-map[slot=second]").should("not.be.visible");
  cy.get("eox-map[slot=second]").should("exist");
};

export default showOnlyFirstMap;
