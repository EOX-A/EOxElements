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
} from "./cases/general/";

describe("Item Filter Config", () => {
  beforeEach(() => {
    cy.mount(`<eox-itemfilter></eox-itemfilter>`)
      .as("eox-itemfilter")
      .then(($el) => {
        const eoxItemFilter = $el[0];
        Object.assign(eoxItemFilter, {
          config: {
            titleProperty: "title",
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

  it("should have a search bar", () => searchBarTest());

  it("should filter results based on search string", () => searchResultTest());

  it("should highlight results", () => highlightResultTest());

  it("should disable highlight", () => disableHighlightTest());

  it("should allow multiple filters", () => multipleResultTest());

  it("should allow only one accordion of each type to be open at a time if configured", () =>
    accordionTest());

  it("should show the map when spatial filter is enabled", () =>
    spatialFilterTest());
});
