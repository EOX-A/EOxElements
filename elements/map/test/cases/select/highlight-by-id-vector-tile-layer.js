import { html } from "lit";
import vectorTileLayerJson from "../../fixtures/vectorTilesLayer.json";

/**
 * Tests to highlight by ID (Vector Tile Layer)
 */
const highlightByIdVectorTileLayer = (vectorTileInteraction) => {
  const layerJson = JSON.parse(JSON.stringify(vectorTileLayerJson));
  layerJson[0].interactions = vectorTileInteraction;
  cy.intercept(/^.*geoserver.*$/, {
    fixture:
      "./map/test/fixtures/tiles/mapbox-streets-v6/14/8937/5679.vector.pbf,null",
    encoding: "binary",
  });
  layerJson[0].interactions = vectorTileInteraction;
  cy.mount(html`<eox-map .center=${[0, 0]} .layers=${layerJson}></eox-map>`).as(
    "eox-map",
  );
  const highlightPromise = new Promise((resolve) => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];
      eoxMap.map.on("loadend", () => {
        //on loadend, programmatically select a few features...
        eoxMap.selectInteractions.selectInteraction.highlightById([889], {
          duration: 0, // CI does not handle animation properly
          padding: [50, 50, 50, 50],
        });
        // ..and expect the map to animate to them
        setTimeout(() => {
          const center = eoxMap.map.getView().getCenter();
          resolve(center);
        }, 200);
      });
    });
  });
  cy.wrap(highlightPromise).then((center) => {
    expect(center, "animates to selected features").to.not.deep.equal([0, 0]);
  });
};

export default highlightByIdVectorTileLayer;
