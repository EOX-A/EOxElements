import "../src/main";
import "./_mockMap";
import testItems from "./testItems.json";
import {
  searchBarTest,
  searchResultTest,
  highlightResultTest,
  multipleResultTest,
  disableHighlightTest,
  accordionTest,
  spatialFilterTest,
  externalFilterTest,
  nestedPropertyTest,
  subtitleTest,
} from "./cases/general/";

/**
 * Test suite for the EOX Item Filter component configuration.
 */
describe("Item Filter Config", () => {
  /**
   * Runs before each test case to mount the eox-itemfilter component and configure it.
   */
  beforeEach(() => {
    cy.mount(`<eox-itemfilter></eox-itemfilter>`)
      .as("eox-itemfilter")
      .then(($el) => {
        const eoxItemFilter = $el[0];
        // Set the configuration and items for the eox-itemfilter component
        Object.assign(eoxItemFilter, {
          config: {
            titleProperty: "title",
            subTitleProperty: "description",
            filterProperties: [
              {
                keys: ["title", "themes"],
                title: "Search",
                type: "text",
                expanded: true,
              },
              { key: "themes", expanded: true },
            ],
            aggregateResults: "themes",
            enableHighlighting: true,
          },
          items: testItems,
        });
      });
  });

  /**
   * Test case to verify the existence of the search bar.
   */
  it("should have a search bar", () => searchBarTest());

  /**
   * Test case to verify filtering results based on the search string.
   */
  it("should filter results based on search string", () => searchResultTest());

  /**
   * Test case to verify highlighting of results.
   */
  it("should highlight results", () => highlightResultTest());

  /**
   * Test case to verify disabling of highlight.
   */
  it("should disable highlight", () => disableHighlightTest());

  /**
   * Test case to verify allowing multiple filters.
   */
  it("should allow multiple filters", () => multipleResultTest());

  /**
   * Test case to verify that only one accordion of each type can be open at a time if configured.
   */
  it("should allow only one accordion of each type to be open at a time if configured", () =>
    accordionTest());

  /**
   * Test case to verify the display of the map when the spatial filter is enabled.
   */
  it("should show the map when spatial filter is enabled", () =>
    spatialFilterTest());

  /**
   * Test case to check whether itemfilter is using external filter correctly or not.
   */
  it("should run external filter", () => externalFilterTest());

  /**
   * Test case to check whether nested properties work or not
   */
  it("should run with nested property", () => nestedPropertyTest());

  /**
   * Test case to check if subtitles are rendered correctly
   */
  it.only("should render subtitles", () => subtitleTest());
});
