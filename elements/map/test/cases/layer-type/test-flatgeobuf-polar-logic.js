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

  const poleBboxes = source.fgbBoundingBoxes(poleExtent, poleProjection);

  expect(poleBboxes[0].minX).to.equal(
    -180,
    "North pole crossing sets minX to -180",
  );
  expect(poleBboxes[0].maxX).to.equal(
    180,
    "North pole crossing sets maxX to 180",
  );
  expect(poleBboxes[0].maxY).to.equal(
    90,
    "North pole crossing sets maxY to 90",
  );

  // 2. Test Antimeridian Crossing
  // In EPSG:3857, the antimeridian is around 20037508
  const antimeridianExtent = [20037000, 0, 20038000, 1000];
  const webMercator = new Projection({ code: "EPSG:3857" });

  const antiBboxes = source.fgbBoundingBoxes(antimeridianExtent, webMercator);

  expect(antiBboxes.length).to.equal(
    2,
    "Antimeridian crossing returns 2 boxes",
  );
  expect(antiBboxes[0].maxX).to.equal(180, "Box A ends at 180");
  expect(antiBboxes[1].minX).to.equal(-180, "Box B starts at -180");

  // 3. Test Antimeridian Crossing in Polar Projection (without containing the pole)
  const polarAntimeridianExtent = [-1500, 500, -500, 1500];
  const polarAntiBboxes = source.fgbBoundingBoxes(
    polarAntimeridianExtent,
    poleProjection,
  );

  expect(polarAntiBboxes.length).to.equal(
    2,
    "Polar antimeridian crossing returns 2 boxes",
  );

  // 4. Negative Test: Normal Extent
  // Ensure a "normal" extent (Austria) doesn't get expanded
  const normalExtent = [1000000, 5000000, 2000000, 6000000]; // EPSG:3857
  const normalBboxes = source.fgbBoundingBoxes(normalExtent, webMercator);
  expect(normalBboxes.length).to.equal(1, "Normal extent returns 1 box");
  expect(normalBboxes[0].minX).to.be.greaterThan(
    -180,
    "Normal extent does not expand minX to -180",
  );
  expect(normalBboxes[0].maxX).to.be.lessThan(
    180,
    "Normal extent does not expand maxX to 180",
  );
};

export default testFlatGeoBufPolarLogic;
