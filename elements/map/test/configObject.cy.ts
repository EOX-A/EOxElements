import { html } from "lit";
import "../main";

describe("config property", () => {
  it("sets controls, layers and view using the config object", () => {
    cy.intercept(/^.*openstreetmap.*$/, { fixture: "/tiles/osm/0/0/0.png" });
    cy.mount(
      html`<eox-map
        .config=${{
          controls: {
            Zoom: {},
          },
          layers: [
            {
              type: "Tile",
              properties: { id: "osm" },
              source: { type: "OSM" },
            },
          ],
          view: {
            center: [1113194, 2273030],
            zoom: 9,
          },
        }}
      ></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(async ($el) => {
      const eoxMap = <EOxMap>$el[0];

      expect(eoxMap.map.getControls().getLength()).to.be.equal(1);

      expect(eoxMap.map.getLayers().getArray().length).to.be.equal(1);

      expect(eoxMap.map.getLayers().getArray()[0].get("id")).to.be.equal("osm");

      expect(eoxMap.map.getView().getCenter()).to.deep.equal([
        1113194, 2273030,
      ]);

      expect(eoxMap.map.getView().getZoom()).to.be.equal(9);
    });
  });
});
