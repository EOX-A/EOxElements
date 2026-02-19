import { html } from "lit";

/**
 * Flatgeobuf combining two urls into one layer
 */
const loadFlatGeoBufLayerCombined = () => {
  const featureLoadPromise = new Promise((resolve) => {
    const layersJson = [
      {
        type: "Vector",
        properties: {
          id: "FlatGeoBufLayerCombined",
          minZoom: 3,
        },
        source: {
          type: "FlatGeoBuf",
          projection: "EPSG:4326",
          url: [
            "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/test_data_polartep/202602041015_CentralWest_RIC.fgb", // 41 features
            "https://eox-gtif-public.s3.eu-central-1.amazonaws.com/test_data_polartep/202602040840_SouthEast_RIC.fgb", // 38 features
          ],
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
        .zoomExtent=${[-7458405, 8859142, 1224514, 12123477]}
        .layers=${layersJson}
      ></eox-map>`,
    ).as("eox-map");

    cy.get("eox-map").should(($el) => {
      const eoxMap = $el[0];
      const source = eoxMap.getLayerById("FlatGeoBufLayerCombined").getSource();
      source.once("featuresloadend", (e) => {
        resolve(e.features);
      });
    });
  });
  cy.wrap(featureLoadPromise).then((features) => {
    expect(
      features.length,
      "loads features from both urls of FlatGeoBuf-source",
    ).to.equal(79);
  });
};

export default loadFlatGeoBufLayerCombined;
