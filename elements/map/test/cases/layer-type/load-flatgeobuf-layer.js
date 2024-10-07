import { html } from "lit";

/**
 * Tests to load WMTS Layer with Capabilities
 */
const loadFlatGeoBufLayer = () => {
  return new Cypress.Promise((resolve) => {
    const layersJson = [
      {
        type: "Vector",
        properties: {
          id: "FlatGeoBufLayer",
          minZoom: 14,
        },
        source: {
          type: "FlatGeoBuf",
          url: "https://flatgeobuf.septima.dk/population_areas.fgb",
        },
      },
    ];

    cy.mount(
      html`<eox-map
        .zoomExtent=${[
          -8236633.559453848, 4976608.248133842, -8235956.382385788,
          4977116.130934887,
        ]}
        .zoom=${1}
        .layers=${layersJson}
      ></eox-map>`
    ).as("eox-map");

    cy.get("eox-map").should(($el) => {
      const eoxMap = $el[0];
      eoxMap.map.getView().on("change:center", (e) => {});
      const source = eoxMap.getLayerById("FlatGeoBufLayer").getSource();
      source.once("featuresloadend", (e) => {
        expect(
          e.features.length,
          "loads features from FlatGeoBuf-source"
        ).to.be.greaterThan(40);
        resolve();
      });
    });
  });
};

export default loadFlatGeoBufLayer;
