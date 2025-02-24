import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const testFields = ["foo", "bar"];
/**
 * Test to verify if applying a value still renders optional fields
 */
const loadOptionalFieldsTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        required: [testFields[0]],
        properties: {
          [testFields[0]]: {
            type: "string",
          },
          [testFields[1]]: {
            type: "string",
          },
        },
      }}
      .value=${{
        [testFields[0]]: "",
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);
  // Find the jsonForm element and access its shadow DOM
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      // Even though no value was set, this field should still exist
      cy.get(`input[id="root[${testFields[1]}]"]`).should("exist");
    });
};

export default loadOptionalFieldsTest;
