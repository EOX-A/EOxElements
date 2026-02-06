import { html } from "lit";

/**
 * Flatgeobuf combining two urls into one layer
 */
const loadFlatGeoBufLayer = () => {
  const featureLoadPromise = new Promise((resolve) => {
    const layersJson = [
      {
        type: "Vector",
        properties: {
          id: "FlatGeoBufLayerCombined",
          minZoom: 12,
        },
        source: {
          type: "FlatGeoBuf",
          url: [
            "https://workspace-ui-public.cif.gtif.eox.at/api/public/share/public-4wazei3y-02/dmi-ice-charts/flatgeobuf/202602041015_CentralWest_RIC.fgb", // 41 features
            "https://workspace-ui-public.cif.gtif.eox.at/api/public/share/public-4wazei3y-02/dmi-ice-charts/flatgeobuf/202602040840_SouthEast_RIC.fgb", // 38 features
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
        .zoomExtent=${[-15000000, 15000000, 15000000, 34000000]}
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
      "loads features from both urls of FlatGeoBuf-source",
    ).to.equal(79);
  });
};

export default loadFlatGeoBufLayer;
