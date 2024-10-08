import { html } from "lit";

/**
 * Tests to load WMTS Layer with Capabilities
 */
const loadWmtsCapabilitiesLayer = () => {
  return new Cypress.Promise((resolve) => {
    cy.fixture("./map/test/fixtures/eoxCapabilities.xml").then(
      (eoxCapabilitiesXML) => {
        cy.intercept(
          "GET",
          "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
          eoxCapabilitiesXML,
        );
        cy.intercept("*Request=GetTile*", {
          fixture: "./map/test/fixtures/tiles/wms/eox_cloudless.jpeg",
        });
        const layersJson = [
          {
            type: "Tile",
            properties: {
              id: "wmtsLayer",
            },
            source: {
              type: "WMTSCapabilities",
              url: "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
              layer: "s2cloudless-2017_3857",
              config: {},
            },
          },
        ];

        cy.mount(html`<eox-map .zoom=${1} .layers=${layersJson}></eox-map>`).as(
          "eox-map",
        );

        cy.get("eox-map").should(($el) => {
          const eoxMap = $el[0];
          const source = eoxMap.getLayerById("wmtsLayer").getSource();
          source.once("tileloadend", (e) => {
            expect(e.tile.getState()).to.be.equal(2);
            resolve();
          });
        });
      },
    );
  });
};

export default loadWmtsCapabilitiesLayer;
