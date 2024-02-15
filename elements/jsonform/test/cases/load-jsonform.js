import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key: "foo",
  value: "bar",
};
/**
 * Test to verify if the jsonform component loads successfully.
 */
const loadJsonFormTest = () => {
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
      .startVals=${{
        [testVals.key]: testVals.value,
      }}
    ></eox-jsonform>`
  ).as(jsonForm);
  // Find the jsonForm element and access its shadow DOM
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".je-form-input-label").invoke("html").should("eq", testVals.key);
      cy.get("input[name]").invoke("val").should("eq", testVals.value);
    });
};

export default loadJsonFormTest;
