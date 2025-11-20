import { getProj } from "../../../src/helpers/parse-text";
import GeoJSON from "ol/format/GeoJSON";

const checkGetProj = () => {
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
  expect(proj).to.be.equal("EPSG:4326");

  const geojson2 = JSON.stringify({
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
  const proj2 = getProj(new GeoJSON(), geojson2);
  expect(proj2).to.be.equal("EPSG:3857");
};

export default checkGetProj;
