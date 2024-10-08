import "../src/main";
import {
  doesMapFiresLifecycleEvent,
  isMapExist,
  parseProperties,
  animateOnZoomCenterChange,
  animateOnExtent,
  checkParsedLonLatCenter,
  initDefaultCenter,
  getLayerById,
  getFlatLayersArr,
  generateLayersInReversePointOrder,
} from "./cases/general";

/**
 * General test suite for the EOX Map
 */
describe("Map", () => {
  /**
   * Test case to check whether map exist or not
   */
  it("map should exist", () => isMapExist());

  /**
   * Test case to check whether map fire lifecycle event
   */
  it("map fires lifecycle events", () => doesMapFiresLifecycleEvent());

  /**
   * Test case to parse `zoom` and `center` properties
   */
  it("should parse zoom/center properties correctly", () => parseProperties());

  /**
   * Test case to animate on `zoom` or `center` change
   */
  it("animates on zoom/center change", () => animateOnZoomCenterChange());

  /**
   * Test case to animate on `extent`
   */
  it("animates on extent", () => animateOnExtent());

  /**
   * Test case to check parsed `lon`, `lat` and `center` of web mercator
   */
  it("correctly parses and guesses web mercator and lonLat center coordinate systems", () =>
    checkParsedLonLatCenter());

  /**
   * Test case to initialise default center  `[0, 0]` if `center` is nor provided in properties
   */
  it("correctly initializes center as 0,0 if none provided", () =>
    initDefaultCenter());

  /**
   * Test case to check a layer is returned via `id`
   */
  it("should return a layer via id", () => getLayerById());

  /**
   * Test case to check flat layers array is returned correctly
   */
  it("should return flat layers array", () => getFlatLayersArr());

  /**
   * Test case to check whether layers is generated in reverse point order
   */
  it("doesn't reverse the input layer array", { retries: 0 }, () =>
    generateLayersInReversePointOrder(),
  );
});
