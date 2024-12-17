import { TEST_SELECTORS } from "../../src/enums";
import "../_mockMap";

// Destructure TEST_SELECTORS object
const { timeControl } = TEST_SELECTORS;

/**
 * Test to verify if the date format is applied correctly.
 */
const loadDateFormatTest = () => {
  cy.mount("<mock-map></mock-map>").as("mock-map");
  cy.mount(
    `<eox-timecontrol for="mock-map" format="DD/MM/YYYY" layer="TEST_ID"></eox-timecontrol>`,
  ).as(timeControl);

  cy.get(timeControl).shadow().find("#controls span").contains("17/12/2024");
};

export default loadDateFormatTest;
