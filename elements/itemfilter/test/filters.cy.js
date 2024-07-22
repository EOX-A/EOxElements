import "../src/main";
import testItems from "./testItems.json";
import { filterkeysTest } from "./cases/filters/";

describe("Item Filter Config", () => {
  const state = {
    agriculture: true,
    health: true,
  };

  const customOrder = {
    health: 0,
    water: 1,
    air: 2,
    economy: 3,
    agriculture: 4,
  };

  const selectedResultIndex = 1;

  const filterKeys = ["foo", "bar", 0, true];

  /**
   * Runs before each test case to mount the eox-itemfilter component and configure it.
   */
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
                key: "themes",
                type: "multiselect",
                expanded: true,
                sort: (a, b) => customOrder[a] - customOrder[b],
                state,
                filterKeys,
              },
            ],
            aggregateResults: "themes",
          },
          items: testItems,
          selectedResult: testItems[selectedResultIndex],
        });
      });
  });

  /**
   * Test case for filterKeys
   */
  it("should support setting filterKeys", () => filterkeysTest(filterKeys));
});
