import "../src/main";
import {
  showTwoMaps,
  showOnlyFirstMap,
  showOnlySecondMap,
} from "./cases/compare";

/**
 * Test suite for the compare feature in EOx Map.
 */
describe("comparison", () => {
  /**
   * Runs before each test case to intercept the eox-map component's API URLs
   */
  beforeEach(() => {
    cy.intercept(/^.*openstreetmap.*$/, {
      fixture: "./map/test/fixtures/tiles/osm/0/0/0.png",
    });
    cy.intercept(/^.*geoserver.*$/, {
      fixture: "./map/test/fixtures/tiles/wms/wms0.png",
    });
  });

  /**
   * Test case to show two maps in compare component in EOx Map
   */
  it("Shows two maps", () => showTwoMaps());

  /**
   * Test case to show only first map in compare component in EOx Map
   */
  it("shows only the first map", () => showOnlyFirstMap());

  /**
   * Test case to show only second map in compare component in EOx Map
   */
  it("shows only the second map", () => showOnlySecondMap());
});
