import { html } from "lit";
import "../src/main";

describe("layers", () => {
  it("create wmts with tile grid", () => {
    cy.intercept("*Request=GetTile*", {
      fixture: "./map/test/fixtures/tiles/wms/eox_cloudless.jpeg",
    });

    const layer = {
      type: "Tile",
      properties: {
        id: "customId",
      },
      source: {
        type: "WMTS",
        url: "https://tiles.maps.eox.at/wmts",
        layer: "s2cloudless-2017_3857",
        style: "default",
        matrixSet: "GoogleMapsCompatible",
        tileGrid: {
          tileSize: [128, 128],
        },
      },
    };

    cy.mount(html`<eox-map .layers=${[layer]}></eox-map>`).as("eox-map");
    cy.get("eox-map").and(($el) => {
      const layer = $el[0].map.getLayers().getArray()[0];
      expect(layer).to.exist;
      expect(layer.get("id")).to.be.equal("customId");

      const source = layer.getSource();
      expect(
        source.getTileGrid().getTileSize(0),
        "use tileGrid options"
      ).to.be.deep.equal([128, 128]);
    });
  });
});
