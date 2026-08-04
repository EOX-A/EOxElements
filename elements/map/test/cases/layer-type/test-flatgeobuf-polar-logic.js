import FlatGeoBuf from "../../../src/custom/sources/FlatGeoBuf";
import registerProjection from "../../../src/helpers/register-projection";
import Projection from "ol/proj/Projection";

/**
 * Tests the logic of FlatGeoBuf bounding box calculation
 */
const testFlatGeoBufPolarLogic = () => {
  // Register EPSG:3413 (North Pole)
  registerProjection(
    "EPSG:3413",
    "+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  );

  const source = new FlatGeoBuf({
    url: "test.fgb",
    projection: "EPSG:4326",
  });

  // 1. Test Pole Crossing
  // In EPSG:3413, the North Pole is at (0, 0)
  const poleExtent = [-1000, -1000, 1000, 1000];
  const poleProjection = new Projection({ code: "EPSG:3413" });

  const poleBbox = source.fgbBoundingBox(poleExtent, poleProjection);

  expect(poleBbox.minX).to.equal(-180, "North pole crossing sets minX to -180");
  expect(poleBbox.maxX).to.equal(180, "North pole crossing sets maxX to 180");
  expect(poleBbox.maxY).to.equal(90, "North pole crossing sets maxY to 90");

  // 2. Test Antimeridian Crossing
  // In EPSG:3857, the antimeridian is around 20037508
  const antimeridianExtent = [20037000, 0, 20038000, 1000];
  const webMercator = new Projection({ code: "EPSG:3857" });

  const antiBbox = source.fgbBoundingBox(antimeridianExtent, webMercator);

  expect(antiBbox.minX).to.equal(
    -180,
    "Antimeridian crossing sets minX to -180",
  );
  expect(antiBbox.maxX).to.equal(180, "Antimeridian crossing sets maxX to 180");
};

export default testFlatGeoBufPolarLogic;
