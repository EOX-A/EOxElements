import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

const { jsonForm } = TEST_SELECTORS;

const validationBehaviorTest = () => {
  cy.mount(
    html`<eox-jsonform
      .options=${{ show_errors: "always" }}
      .schema=${{
        type: "object",
        required: ["text_input", "textarea_input"],
        properties: {
          text_input: {
            type: "string",
            minLength: 5,
          },
          textarea_input: {
            type: "string",
            format: "textarea",
            minLength: 5,
          },
        },
      }}
    ></eox-jsonform>`,
  );

  // Check initial state: hide-errors class should be present
  cy.get(jsonForm).shadow().find("form").should("have.class", "hide-errors");

  // Interact with text input
  cy.get(jsonForm).shadow().find("input[name='root[text_input]']").type("abc");

  // Check that hide-errors class is removed
  cy.get(jsonForm)
    .shadow()
    .find("form")
    .should("not.have.class", "hide-errors");

  // Check that validation error appears for text input (since 'abc' < 5 chars)
  cy.get(jsonForm)
    .shadow()
    .find("[data-schemapath='root.text_input']")
    .contains("Value must be at least 5 characters long")
    .should("be.visible");

  // Make text input valid so we can test textarea in isolation
  cy.get(jsonForm).shadow().find("input[name='root[text_input]']").type("def");

  // Check textarea behavior
  // Type 'abc' (invalid)
  cy.get(jsonForm)
    .shadow()
    .find("textarea[name='root[textarea_input]']")
    .type("abc");

  // Error should be visible immediately (due to input listener hack)
  cy.get(jsonForm)
    .shadow()
    .find("[data-schemapath='root.textarea_input']")
    .contains("Value must be at least 5 characters long")
    .should("be.visible");

  // Type more to make it valid
  cy.get(jsonForm)
    .shadow()
    .find("textarea[name='root[textarea_input]']")
    .type("def"); // 6 chars total

  // Error should disappear
  cy.get(jsonForm)
    .shadow()
    .find("[data-schemapath='root.textarea_input']")
    .contains("Value must be at least 5 characters long")
    .should("not.be.visible");
};

export default validationBehaviorTest;
