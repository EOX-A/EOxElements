import { html } from "lit";
import { VectorTile } from "ol/layer";
import "../main";
import vectorTileLayerStyleJson from "./vectorTilesLayer.json";

describe("WMTS Capabilities Source", () => {
  it("loads a Vector Tile Layer, applies flat style", () => {
    const layersJson = [
      {
        type: "Tile",
        properties: {
          id: "wmtsLayer",
        },
        source: {
          type: "WMTSCapabilities",
          url: "https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml",
          layer: "s2cloudless-2017",
          config: {},
        },
      },
    ];

    cy.mount(html`<eox-map .zoom=${1} .layers=${layersJson}></eox-map>`).as(
      "eox-map"
    );

    cy.get("eox-map").should(($el) => {
      const eoxMap = <EOxMap>$el[0];
      const layer = eoxMap.getLayerById("wmtsLayer");
      console.log(layer);
    });
  });
});
