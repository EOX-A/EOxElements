import { Feature } from "ol";
import { Geometry } from "ol/geom";
import { Vector } from "ol/layer";
import { Vector as VectorSource } from "ol/source";

describe("vectorTiles", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("renders features from a vector tile layer", () => {
    cy.window().then((window) => {
      window.addEventListener("message", (message) => {
        if (message.data.hasOwnProperty("map-event")) {
          let features: Array<Feature> = [];
          const vectorLayer: Vector<VectorSource<Geometry>> = window.map
            .getLayers()
            .getArray()
            .find((l) => l.type === "vector-tile");
          if (vectorLayer != null) {
            features = vectorLayer
              .getSource()
              ?.getFeaturesInExtent(window.map.getView().calculateExtent());
          }

          expect(features.length).to.be.greaterThan(1000);
        }
      });
      window.postMessage(
        {
          "set-layers": [
            {
              type: "vector-tile",
              source: {
                type: "vector-tile",
                url: "https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",
              },
            },
          ],
        },
        "*"
      );
    });
  });
});
