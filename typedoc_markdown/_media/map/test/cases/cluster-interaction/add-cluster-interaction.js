import { html } from "lit";
import clusterPoints from "../../fixtures/clusterPoints.json";
import clusterLayerStyleJson from "../../fixtures/clusterLayer.json";
import "@eox/map/src/plugins/advancedLayersAndSources";
import { simulateEvent } from "../../utils/events";
/**
 * Tests to load Cluster Layer
 */
const loadVectorLayer = () => {
  cy.intercept("https://test.org/clusterPoints.json", (req) => {
    req.reply(clusterPoints);
  });

  clusterLayerStyleJson[0].interactions = [
    {
      type: "clusterExplode",
      options: {
        id: "clusterExplodeInteraction",
        maxZoom: 12,
        fitOptions: {
          duration: 0,
        },
        style: {
          "circle-radius": 12,
          "circle-fill-color": "#FFD700",
          "circle-stroke-color": "rgba(255, 255, 255, 0.7)",
          "circle-stroke-width": 2,
          "text-font": "normal 16px",
          "text-value": ["get", "text"],
          "text-fill-color": "#000",
          "text-offset-y": 1,
        },
      },
    },
  ];

  cy.mount(html`<eox-map .layers=${clusterLayerStyleJson}></eox-map>`).as(
    "eox-map",
  );
  const featuresPromise = new Promise((resolve) => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];
      eoxMap
        .getLayerById("clusterLayer")
        .getSource()
        .once("change", () => {
          const map = eoxMap.map;
          map.once("rendercomplete", () => {
            // simulate click on the cluster
            simulateEvent(map, "click", 11, -109);
            map.once("rendercomplete", () => {
              resolve(
                eoxMap.getLayerById("clusterLayer").getSource().getFeatures(),
              );
            });
          });
        });
    });
  });
  cy.wrap(featuresPromise).then((features) => {
    expect(features, "can click and zoom into cluster").to.have.length(3);
  });
};

export default loadVectorLayer;
