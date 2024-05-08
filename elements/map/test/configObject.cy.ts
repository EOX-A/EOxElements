import { html } from "lit";
import { Group as LayerGroup, Tile as TileLayer } from "ol/layer.js";
import OSM from "ol/source/OSM";
import "../main";

describe("config property", () => {
  it("sets controls, layers and view using the config object", () => {
    cy.intercept(/^.*openstreetmap.*$/, {
      fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
    });
    cy.mount(
      html`<eox-map
        .config=${{
          controls: {
            Zoom: {},
          },
          layers: [
            {
              type: "Tile",
              properties: { id: "osm", title: "foo" },
              source: { type: "OSM" },
            },
          ],
          view: {
            center: [16, 48],
            zoom: 9,
            projection: "EPSG:4326",
          },
        }}
      ></eox-map>`
    ).as("eox-map");
    cy.get("eox-map").and(async ($el) => {
      const eoxMap = <EOxMap>$el[0];
      expect(eoxMap.map.getControls().getLength()).to.be.equal(1);

      expect(eoxMap.map.getLayers().getArray().length).to.be.equal(1);

      expect(eoxMap.map.getLayers().getArray()[0].get("id")).to.be.equal("osm");

      expect(eoxMap.map.getView().getProjection().getCode()).to.be.equal(
        "EPSG:4326"
      );
      expect(eoxMap.map.getView().getCenter()[0]).to.be.closeTo(16, 0.0001);
      expect(eoxMap.map.getView().getCenter()[1]).to.be.closeTo(48, 0.0001);
      expect(eoxMap.map.getView().getZoom()).to.be.equal(9);
    });
    cy.get("eox-map").and(async ($el) => {
      const eoxMap = <EOxMap>$el[0];

      eoxMap.config = {
        controls: {},
        layers: [
          {
            type: "Tile",
            // @ts-ignore
            properties: { id: "osm", title: "bar" },
            source: { type: "OSM" },
          },
        ],
        view: {
          center: [1113194, 2273030], // [10, 20]
          zoom: 10,
          projection: "EPSG:3857",
        },
      };

      expect(eoxMap.map.getView().getZoom()).to.be.equal(10);
      expect(eoxMap.map.getControls().getLength()).to.be.equal(0);
      expect(eoxMap.map.getLayers().getArray().length).to.be.equal(1);
      expect(eoxMap.map.getLayers().getArray()[0].get("title")).to.be.equal(
        "bar"
      );

      expect(eoxMap.map.getView().getProjection().getCode()).to.be.equal(
        "EPSG:3857"
      );
      expect(eoxMap.map.getView().getCenter()[0]).to.be.closeTo(1113194, 0.01);
      expect(eoxMap.map.getView().getCenter()[1]).to.be.closeTo(2273030, 0.01);
    });
  });
  it.only("returns a config object even if none was set initially", () => {
    // cy.intercept(/^.*openstreetmap.*$/, {
    //   fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
    // });
    cy.mount(html`<eox-map></eox-map>`).as("eox-map");
    cy.get("eox-map").and(async ($el) => {
      const eoxMap = <EOxMap>$el[0];
      const olMap = eoxMap.map;

      const testCenter = [1000, 1000];
      const testZoom = 2;
      olMap.getView().setCenter(testCenter);
      olMap.getView().setZoom(testZoom);
      olMap.setLayers([
        new TileLayer({
          source: new OSM(),
        }),
        new LayerGroup({
          layers: [
            new TileLayer({
              source: new OSM(),
            }),
          ],
        }),
      ]);
      const eoxMapconfig = eoxMap.config;
      expect(eoxMapconfig.view.center).to.deep.eq(testCenter);
      expect(eoxMapconfig.view.zoom).to.eq(testZoom);
      expect(eoxMapconfig.layers).to.deep.eq([
        {
          "type":"Tile",
          "properties": {"id":"19"},
          "source":{"type":"OSM"}
        },
        {
          "type":"Group",
          "properties":{"id":"22"},
          "layers":[
            {
              "type":"Tile",
              "properties":{"id":"21"},
              "source":{"type":"OSM"}
            }
          ]
        }
      ]);
    });
  });
});
