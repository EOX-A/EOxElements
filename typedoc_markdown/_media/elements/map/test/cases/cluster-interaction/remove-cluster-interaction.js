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
        fitOptions: {
          duration: 0,
        },
        maxZoom: 12,
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

  const animatesOnClickPromise = new Promise((resolve) => {
    cy.get("eox-map").and(($el) => {
      const eoxMap = $el[0];
      clusterLayerStyleJson[0].interactions = [];
      eoxMap.layers = JSON.parse(JSON.stringify(clusterLayerStyleJson));
      expect(eoxMap.interactions.clusterExplodeInteraction).to.not.exist;

      eoxMap
        .getLayerById("clusterLayer")
        .getSource()
        .on("change", () => {
          const map = eoxMap.map;
          const initialZoom = map.getView().getZoom();
          map.once("rendercomplete", () => {
            // simulate click on the cluster
            simulateEvent(map, "click", 11, -109);
            const zoomAfterClick = map.getView().getZoom();
            resolve(initialZoom !== zoomAfterClick);
          });
        });
    });
  });

  cy.wrap(animatesOnClickPromise).then((animatesOnClick) => {
    expect(animatesOnClick, "cleanly removes interaction from ol map").to.be
      .false;
  });
};

export default loadVectorLayer;
