import "../src/main.js";
import {
  CreateListTest,
  LoadStacinfoTest,
  NoHtmlRenderTest,
  htmlRenderTest,
  SinglePropertyTest,
} from "./cases/index.js";
export const testBody = (json) => {
  cy.intercept("/collection*", {
    body: json,
  });
};

describe("Stacinfo", () => {
  /**
   * Test case to check whether STAC is loaded or not
   */
  it("loads stacinfo", () => LoadStacinfoTest());

  /**
   * Test case to check whether list item for all the properties created or not
   */
  it("creates list items for all properties", () => CreateListTest());

  /**
   * Test case to check whether single property is whitelisted or not.
   */
  it("creates a single-property class if only one property is whitelisted", () =>
    SinglePropertyTest());

  /**
   * Test case to check whether STACInfo doesn't render HTML if not enabled
   */
  it("doesn't render HTML if not enabled", () => NoHtmlRenderTest());

  /**
   * Test case to check whether STACInfo render HTML if it's enabled
   */
  it("renders HTML if enabled", () => htmlRenderTest());
});
