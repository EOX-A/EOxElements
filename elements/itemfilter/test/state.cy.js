import "../src/main";
import testItems from "./testItems.json";
import {
  customOrderTest,
  renderCheckboxTest,
  resultPreCheckedTest,
  resultsWithPreSetFiltersTest,
} from "./cases/state/";

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
              },
            ],
            aggregateResults: "themes",
          },
          items: testItems,
          selectedResult: testItems[selectedResultIndex],
        });
      });
  });

  it("should render the checkboxes as checked", () => renderCheckboxTest());

  it("should only show the results of the pre-set filters", () =>
    resultsWithPreSetFiltersTest(state));

  it("should render the pre-set result as checked", () =>
    resultPreCheckedTest(selectedResultIndex));

  it("should have a custom order", () => customOrderTest(customOrder));
});
