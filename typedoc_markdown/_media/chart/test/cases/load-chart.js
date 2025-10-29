import { TEST_SELECTORS, TEST_VALUES } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { chart, vegaContainer, vegaCanvas } = TEST_SELECTORS;

// Destructuring TEST_VALUES object
const { chartHeight, chartSpec } = TEST_VALUES;

/**
 * Test to verify if the chart component loads successfully.
 */
const loadChartTest = () => {
  cy.get(chart).and(($el) => {
    const eoxChart = $el[0];
    eoxChart.spec = chartSpec;
  });
  // Find the chart element and access its shadow DOM
  cy.get(chart)
    .shadow()
    .within(() => {
      cy.get(vegaContainer);
      cy.get(vegaCanvas).invoke("outerHeight").should("eq", chartHeight);
    });
};

export default loadChartTest;
