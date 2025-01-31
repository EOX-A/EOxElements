import { TEST_SELECTORS, TEST_VALUES } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { chart } = TEST_SELECTORS;

// Destructuring TEST_VALUES object
const { chartSpec } = TEST_VALUES;

/**
 * Test to verify if the chart registers the click on items correctly.
 */
const clickChartTest = () => {
  cy.get(chart).and(($el) => {
    const eoxChart = $el[0];
    eoxChart.spec = chartSpec;
  });

  const clickEventHandlerSpy = cy.spy();
  cy.get(chart).and(($chart) => {
    $chart.get(0).addEventListener("click.item", clickEventHandlerSpy);
  });

  // eslint-disable-next-line cypress/unsafe-to-chain-command
  cy.get(chart)
    .click()
    .then(() => {
      expect(clickEventHandlerSpy).to.be.calledOnce;
    });
};

export default clickChartTest;
