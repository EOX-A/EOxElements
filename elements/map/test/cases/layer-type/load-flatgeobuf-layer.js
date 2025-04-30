import { html } from "lit";

/**
 * Tests to load WMTS Layer with Capabilities
 */
const loadFlatGeoBufLayer = () => {
  const featureLoadPromise = new Promise((resolve) => {
    const layersJson = [
      {
        type: "Vector",
        properties: {
          id: "FlatGeoBufLayer",
          minZoom: 12,
        },
        source: {
          type: "FlatGeoBuf",
          url: "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/admin_borders/STATISTIK_AUSTRIA_GEM_20220101.fgb",
        },
      },
      {
        type: "Tile",
        source: {
          type: "OSM",
        },
      },
    ];

    cy.mount(
      html`<eox-map
        .zoomExtent=${[
          1813753.6854159434, 6135076.792463355, 1826020.0058429672,
          6141440.849782808,
        ]}
        .layers=${layersJson}
      ></eox-map>`,
    ).as("eox-map");

    cy.get("eox-map").should(($el) => {
      const eoxMap = $el[0];
      const source = eoxMap.getLayerById("FlatGeoBufLayer").getSource();
      source.once("featuresloadend", (e) => {
        resolve(e.features);
      });
    });
  });
  cy.wrap(featureLoadPromise).then((features) => {
    expect(
      features.length,
      "loads features from FlatGeoBuf-source",
    ).to.be.greaterThan(20);
  });
};

export default loadFlatGeoBufLayer;
