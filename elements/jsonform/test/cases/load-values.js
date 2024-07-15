import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key: "foo",
  value: "bar",
};
/**
 * Test to verify if applying a value after initialization fills out the correct field
 */
const loadValues = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        properties: {
          [testVals.key]: {
            type: "string",
          },
        },
      }}
    ></eox-jsonform>`
  ).as(jsonForm);
  // Set value after initialization
  cy.get(jsonForm).and(($jsonForm) => {
    $jsonForm[0].value = { [testVals.key]: testVals.value };
  });
  // Find the jsonForm element and access its shadow DOM
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(`input[id="root[${testVals.key}]"]`)
        .invoke("val")
        .should("eq", testVals.value);
    });
};

export default loadValues;
