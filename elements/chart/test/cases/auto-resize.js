import { TEST_SELECTORS, TEST_VALUES } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { chart, vegaCanvas } = TEST_SELECTORS;

// Destructuring TEST_VALUES object
const { chartHeight, chartSpec } = TEST_VALUES;

/**
 * Test to verify if the chart auto-resizes when container size changes.
 */
const autoResizeTest = () => {
  const newHeight = 500;
  const newWidth = 500;

  cy.get(chart).and(($el) => {
    const eoxChart = $el[0];
    eoxChart.spec = chartSpec;
  });

  cy.get(chart)
    .shadow()
    .within(() => {
      cy.get(vegaCanvas).invoke("outerHeight").should("eq", chartHeight);
    });

  // Resize the chart container
  cy.get(chart).invoke(
    "attr",
    "style",
    `width: ${newWidth}px; height: ${newHeight}px;`,
  );

  cy.get(chart)
    .shadow()
    .within(() => {
      cy.get(vegaCanvas).invoke("outerHeight").should("eq", newHeight);
    });
};

export default autoResizeTest;
