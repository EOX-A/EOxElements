import { html } from "lit";
import vectorTileLayerJson from "../../fixtures/vectorTilesLayer.json";
import { simulateEvent } from "../../utils/events";

/**
 * Tests to adds a select interaction to VectorTile layer
 */
const addSelectInteractionVectorTile = (vectorTileInteraction) => {
  cy.intercept(/^.*geoserver.*$/, {
    fixture:
      "./map/test/fixtures/tiles/mapbox-streets-v6/14/8937/5679.vector.pbf,null",
    encoding: "binary",
  });
  return new Cypress.Promise((resolve) => {
    const layerJson = JSON.parse(JSON.stringify(vectorTileLayerJson));
    layerJson[0].interactions = vectorTileInteraction;
    cy.mount(html`<eox-map .layers=${layerJson}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];
      eoxMap.addEventListener("select", (evt) => {
        expect(evt.detail.feature).to.exist;
        resolve();
      });
      eoxMap.map.on("loadend", () => {
        simulateEvent(eoxMap.map, "click", 65, 13);
      });
    });
  });
};

export default addSelectInteractionVectorTile;
