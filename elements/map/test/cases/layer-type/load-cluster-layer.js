import { html } from "lit";
import clusterPoints from "../../fixtures/clusterPoints.json";
import clusterLayerStyleJson from "../../fixtures/clusterLayer.json";
import "@eox/map/src/plugins/advancedLayersAndSources";

/**
 * Tests to load Cluster Layer
 */
const loadVectorLayer = () => {
  cy.intercept("https://test.org/clusterPoints.json", (req) => {
    req.reply(clusterPoints);
  });
  cy.mount(html`<eox-map .layers=${clusterLayerStyleJson}></eox-map>`).as(
    "eox-map",
  );
  const featuresPromise = new Promise((resolve) => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];
      eoxMap
        .getLayerById("clusterLayer")
        .getSource()
        .on("change", (e) => {
          const features = e.target.getFeatures();
          if (features.length) {
            resolve(features);
          }
        });
    });
  });
  cy.wrap(featuresPromise).then((features) => {
    expect(
      features,
      "vector features load and create a cluster",
    ).to.have.length(1);
  });
};

export default loadVectorLayer;
