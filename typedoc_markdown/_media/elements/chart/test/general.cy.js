// Importing necessary modules, test cases, and enums
import "../src/main";
import { loadChartTest, setDataValuesTest, clickChartTest } from "./cases";
import { TEST_SELECTORS, TEST_VALUES } from "../src/enums";

// Destructuring TEST_SELECTORS object
const { chart } = TEST_SELECTORS;

// Destructuring TEST_VALUES object
const { chartHeight } = TEST_VALUES;

// Test suite for Chart
describe("Chart", () => {
  // Setting up the environment before each test
  beforeEach(() => {
    // Mounting eox-chart element
    cy.mount(
      `<eox-chart style="width: ${chartHeight}px; height: ${chartHeight}px"></eox-chart>`,
    ).as(chart);
  });

  // Test case to ensure the chart component loads successfully
  it("loads the chart", () => loadChartTest());

  it("allows setting data values asynchronously", () => setDataValuesTest());

  it("triggers an click:item event", () => clickChartTest());
});
