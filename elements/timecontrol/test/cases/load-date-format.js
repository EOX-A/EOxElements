import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";
import "../_mockMap";

// Destructure TEST_SELECTORS object
const { timeControl } = TEST_SELECTORS;

const testValues = ["2024-12-17"];

/**
 * Test to verify if the date format is applied correctly.
 */
const loadDateFormatTest = () => {
  cy.mount("<mock-map></mock-map>").as("mock-map");
  cy.mount(
    html`<eox-timecontrol
      for="mock-map"
      display-format="DD/MM/YYYY"
      layer="TEST_ID"
      .controlValues=${testValues}
    ></eox-timecontrol>`,
  ).as(timeControl);

  cy.get(timeControl).shadow().find("#controls small").contains("17/12/2024");
};

export default loadDateFormatTest;
