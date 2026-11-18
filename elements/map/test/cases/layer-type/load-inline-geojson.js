import { html } from "lit";

/**
 * Tests to load Vector Layer with inline GeoJSON features
 */
const loadInlineGeojson = () => {
  const inlineLayer = [
    {
      type: "Vector",
      properties: { id: "inlineGeojson" },
      source: {
        type: "Vector",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [16.37, 48.2],
            },
            properties: {
              name: "Vienna",
            },
          },
        ],
      },
    },
    {
      type: "Vector",
      properties: { id: "inlineFeatureCollection" },
      source: {
        type: "Vector",
        features: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [12.49, 41.9],
              },
              properties: {
                name: "Rome",
              },
            },
          ],
        },
      },
    },
  ];

  cy.mount(html`<eox-map .layers=${inlineLayer}></eox-map>`).as("eox-map");
  cy.get("eox-map").and(($el) => {
    const eoxMap = $el[0];
    const layers = eoxMap.map.getLayers().getArray();
    expect(layers).to.have.length(2);

    const layer1 = eoxMap.getLayerById("inlineGeojson");
    expect(layer1).to.exist;
    const features1 = layer1.getSource().getFeatures();
    expect(features1).to.have.length(1);
    expect(features1[0].get("name")).to.equal("Vienna");

    const layer2 = eoxMap.getLayerById("inlineFeatureCollection");
    expect(layer2).to.exist;
    const features2 = layer2.getSource().getFeatures();
    expect(features2).to.have.length(1);
    expect(features2[0].get("name")).to.equal("Rome");
  });
};

export default loadInlineGeojson;
