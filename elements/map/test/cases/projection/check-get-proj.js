import getProj from "../../src/helpers/parse-text";
import GeoJSON from "ol/format/GeoJSON";

const checkGetProj = () => {
  describe("getProj projection guessing", () => {
    it("returns EPSG:3857 for coordinates in -180 to 180 range", () => {
      const geojson = JSON.stringify({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [10, 10],
                  [20, 10],
                  [20, 20],
                  [10, 20],
                  [10, 10],
                ],
              ],
            },
            properties: {},
          },
        ],
      });
      const proj = getProj(new GeoJSON(), geojson);
      expect(proj).to.equal("EPSG:3857");
    });

    it("returns EPSG:4326 for coordinates outside -180 to 180 range", () => {
      const geojson = JSON.stringify({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [200, 10],
                  [210, 10],
                  [210, 20],
                  [200, 20],
                  [200, 10],
                ],
              ],
            },
            properties: {},
          },
        ],
      });
      const proj = getProj(new GeoJSON(), geojson);
      expect(proj).to.equal("EPSG:4326");
    });
  });
};

export default checkGetProj;
