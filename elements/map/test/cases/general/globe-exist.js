import { html } from "lit";

/**
 * Tests to check whether globe exist or not
 */
const isGlobeExist = () => {
  cy.mount(
    html`<eox-map
      .layers=${[
        {
          type: "Tile",
          properties: {
            id: "osm",
            title: "Open Street Map",
          },
          visible: true,
          opacity: 0.5,
          source: {
            type: "OSM",
            crossOrigin: "anonymous",
          },
        },
      ]}
      .projection=${"globe"}
    ></eox-map>`,
  ).as("eox-map");
  cy.get("eox-map").and(($el) => {
    expect($el[0].map).to.exist;
    // Check if globe is enabled
    expect($el[0].globeEnabled).to.be.true;
    // Check if globe instance exists
    expect($el[0].globe).to.exist;
    // Check if the layer is added to the globe
    const globeLayers = $el[0].globe.planet.layers;
    const osmLayer = globeLayers.filter((l) => l.name === "osm");
    expect(osmLayer).to.exist;
  });
};

export default isGlobeExist;
