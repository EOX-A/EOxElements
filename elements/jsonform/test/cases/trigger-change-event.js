import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key: "foo",
  value: "bar",
};
/**
 * Test to verify if the jsonform component triggers a change event successfully.
 */
const triggerChangeEventTest = () => {
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
  cy.get(jsonForm)
    .and(($el) => {
      $el[0].addEventListener("change", cy.stub().as("change"));
    })

    // Find the jsonForm element and access its shadow DOM
    // then type text into the input field
    .shadow()
    .within(() => {
      cy.get("input[name]").type(testVals.value);
      // String input needs blur to trigger change event
      // see https://github.com/json-editor/json-editor/issues/1081
      cy.get(".form-control").click({ force: true });
    });
  cy.get("@change").should("have.been.called");
};

export default triggerChangeEventTest;
