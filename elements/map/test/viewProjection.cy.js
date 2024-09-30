import "../src/main";
import {
  changeProjection,
  fetchProjectionFromCode,
  getWgsCoordinates,
  initProjection,
  specialProjection,
} from "./cases/projection";

/**
 * Test suite for the EOX Map to view different projection
 */
describe("view projections", () => {
  /**
   * Test case to set the initial projection of the view
   */
  it("can set the initial projection of the view", () => initProjection());

  /**
   * Test case to change the projection of the view
   */
  it("can change the projection of the view", () => changeProjection());

  /**
   * Test case to use special projection
   */
  it("use special projection", () => specialProjection());

  /**
   * Test case to fetch projection from code
   */
  it("fetch projection from code", () => fetchProjectionFromCode());

  /**
   * Test case to check lonLatExtent delivering correct WGS coordinates
   */
  it("lonLatExtent delivering correct WGS coordinates", () =>
    getWgsCoordinates());
});
