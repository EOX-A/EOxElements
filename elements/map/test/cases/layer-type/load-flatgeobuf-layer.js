import { html } from "lit";

/**
 * Tests to load Flatgeobuf layer
 */
const loadFlatGeoBufLayer = () => {
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
    const layer = eoxMap.getLayerById("FlatGeoBufLayer");
    const source = layer.getSource();
    const features = source.getFeatures();
    expect(
      features.length,
      "loads features from FlatGeoBuf-source",
    ).to.be.at.least(20);
  });
};

export default loadFlatGeoBufLayer;
