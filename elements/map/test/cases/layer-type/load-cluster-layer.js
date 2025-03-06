import { html } from "lit";
//import ecoRegionsFixture from "../../fixtures/ecoregions.json";
import clusterLayerJsonDefinition from "../../fixtures/cluster.json";
import pointsGeojson from "../../fixtures/points.json";

/**
 * Tests to load Cluster Layer
 */
const loadClusterLayer = () => {
  cy.intercept(/^.*point-samples.geojson.*$/, (req) => {
    req.reply(pointsGeojson);
  });


  cy.mount(
    html`<eox-map
      .zoom=${9}
      .center=${[12.6, 47.3]}
      .layers=${clusterLayerJsonDefinition}
    ></eox-map>`,
  ).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    //const layers = eoxMap.map.getLayers().getArray();
    //expect(layers).to.have.length(1);
    expect(eoxMap.getLayerById("clusterLayer")).to.exist;
    eoxMap
      .getLayerById("clusterLayer")
      .getSource()
      .once("change", (e) => {
        console.log(e);
      });
    setTimeout(() => {
      const features = eoxMap
        .getLayerById("clusterLayer")
        .getSource()
        .getFeatures();
      console.log(features);
      console.log(eoxMap.getLayerById("clusterLayer").getSource().getSource());
    }, 1000);
  });
};

export default loadClusterLayer;
