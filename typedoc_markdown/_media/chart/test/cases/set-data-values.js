import { TEST_SELECTORS, TEST_VALUES } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { chart } = TEST_SELECTORS;

// Destructuring TEST_VALUES object
const { chartSpec } = TEST_VALUES;

/**
 * Test to verify if the chart component loads successfully.
 */
const setDataValuesTest = () => {
  return new Cypress.Promise((resolve) => {
    cy.get(chart).and(($el) => {
      const eoxChart = $el[0];

      const dataValueTestKey = "myData";
      const chartSpecDataValues = chartSpec.data.values;
      const chartSpecWithoutData = {
        ...chartSpec,
        data: {
          name: dataValueTestKey,
        },
      };

      // Set the spec with a data placeholder
      eoxChart.spec = chartSpecWithoutData;

      // Wait some time and set the data values afterwards
      setTimeout(() => {
        eoxChart.dataValues = {
          [dataValueTestKey]: chartSpecDataValues,
        };
        setTimeout(() => {
          const canvas = eoxChart.shadowRoot.querySelector("canvas");
          const context = canvas.getContext("2d");
          const pixel = context.getImageData(155, 150, 1, 1).data;
          const red = pixel[0];
          const green = pixel[1];
          const blue = pixel[2];
          expect(red).to.eq(0);
          expect(green).to.eq(65);
          expect(blue).to.eq(112);
          resolve();
        });
      }, 100);
    });
  });
};

export default setDataValuesTest;
