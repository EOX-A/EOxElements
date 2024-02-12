import { TEST_SELECTORS } from "../../src/enums";
import "../_mockMap";

// Destructure TEST_SELECTORS object
const { timeControl } = TEST_SELECTORS;

/**
 * Test to verify if the time control component loads successfully.
 */
const loadTimeControlTest = () => {
  cy.mount("<mock-map></mock-map>").as("mock-map");
  cy.mount(
    `<eox-timecontrol for="mock-map" layer="TEST_ID"></eox-timecontrol>`
  ).as(timeControl);

  // Find the layout element and access its shadow DOM
  cy.get(timeControl).shadow();
};

export default loadTimeControlTest;
