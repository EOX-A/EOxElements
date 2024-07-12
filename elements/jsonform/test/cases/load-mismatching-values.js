import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key1: "foo",
  value1: "bar",
  key2: "foobar",
};
/**
 * Test to verify if applying an incomplete value renders all fields defined in the schema.
 */
const loadMisMatchingValuesTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        properties: {
          [testVals.key1]: {
            type: "string",
          },
          [testVals.key2]: {
            type: "string",
          },
        },
      }}
      .value=${{
        [testVals.key1]: testVals.value1,
      }}
    ></eox-jsonform>`
  ).as(jsonForm);
  // Find the jsonForm element and access its shadow DOM
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(`input[id="root[${testVals.key1}]"]`)
        .invoke("val")
        .should("eq", testVals.value1);
      // Even though no value was set, this field should still exist
      cy.get(`input[id="root[${testVals.key2}]"]`).should("exist");
    });
};

export default loadMisMatchingValuesTest;
