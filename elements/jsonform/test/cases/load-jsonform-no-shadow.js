import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key: "foo",
  value: "bar",
};
/**
 * Test to verify if the jsonform component loads successfully without shadow.
 */
const loadJsonFormNoShadowTest = () => {
  cy.mount(
    html`<eox-jsonform
      no-shadow
      .schema=${{
        type: "object",
        properties: {
          [testVals.key]: {
            type: "string",
          },
        },
      }}
      .value=${{
        [testVals.key]: testVals.value,
      }}
    ></eox-jsonform>`
  ).as(jsonForm);
  // Find the jsonForm element and assure there is no shadow DOM
  cy.get(jsonForm).shadow().should("not.exist");
  cy.get(".je-form-input-label").invoke("html").should("eq", testVals.key);
  cy.get("input[name]").invoke("val").should("eq", testVals.value);
};

export default loadJsonFormNoShadowTest;
