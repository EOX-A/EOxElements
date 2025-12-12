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
            layerControlExclusive: true,
          },
          visible: false,
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
  });
};

export default isGlobeExist;
