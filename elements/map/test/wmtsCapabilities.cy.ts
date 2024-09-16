import { html } from "lit";
import "../main";
import "../src-2/plugins/advancedLayersAndSources/index";

describe("WMTS Capabilities Source", () => {
  it("loads a layer from WMTS capabilities", () => {
    return new Cypress.Promise((resolve) => {
      cy.fixture("./map/test/fixtures/eoxCapabilities.xml").then(
        (eoxCapabilitiesXML) => {
          cy.intercept(
            "GET",
            "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
            eoxCapabilitiesXML
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

          cy.mount(
            html`<eox-map .zoom=${1} .layers=${layersJson}></eox-map>`
          ).as("eox-map");

          cy.get("eox-map").should(($el) => {
            const eoxMap = <EOxMap>$el[0];
            const layer = eoxMap.getLayerById("wmtsLayer");
            layer.once("postrender", (e) => {
              expect(e.target.getSource().getState()).to.be.equal("ready");
              expect(e.target.getSource().tileCache.count_).to.be.greaterThan(
                0
              );
              resolve();
            });
          });
        }
      );
    });
  });
});
