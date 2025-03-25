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
  const selectInteractionPromise = new Promise((resolve) => {
    const layerJson = JSON.parse(JSON.stringify(vectorTileLayerJson));
    layerJson[0].interactions = vectorTileInteraction;
    cy.mount(html`<eox-map .layers=${layerJson}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];
      eoxMap.addEventListener("select", (evt) => {
        resolve({
          feature: evt.detail.feature,
          cursor: eoxMap.map.getTargetElement().style.cursor,
        });
      });
      eoxMap.map.on("loadend", () => {
        simulateEvent(eoxMap.map, "pointermove", 65, 13); // a feature here
        simulateEvent(eoxMap.map, "click", 65, 13);
      });
    });
  });
  cy.wrap(selectInteractionPromise).then(({ feature, cursor }) => {
    expect(cursor, "changes cursor to pointer").to.be.equal("pointer");
    expect(feature).to.exist;
  });
};

export default addSelectInteractionVectorTile;
