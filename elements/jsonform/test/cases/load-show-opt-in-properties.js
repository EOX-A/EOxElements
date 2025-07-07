import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

/**
 * Test to verify if the jsonform loads with show opt-in properties.
 * This test checks if optional properties can be added and removed dynamically.
 */
const loadShowOptInPropertiesTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        title: "Optional Properties Demo",
        type: "object",
        required: ["foo"],
        properties: {
          foo: {
            type: "string",
            default: "I am required!",
          },
          bar: {
            type: "string",
            default: "I am optional but value is set at start",
          },
          baz: {
            type: "string",
          },
        },
      }}
      .value=${{
        bar: "Value set at start",
      }}
      .options=${{
        show_opt_in: true,
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);
  cy.get(jsonForm, { timeout: 100 }).and(($el) => {
    expect($el[0].editor.getValue().baz).to.eq(undefined);
  });
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(`input[id="root[baz]"]`).type("Hello World");
    });
  cy.get(jsonForm).and(($el) => {
    expect($el[0].editor.getValue().baz).to.eq("Hello World");
  });
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(`input[id="root[baz]"]`).clear();
    });
  cy.get(jsonForm).and(($el) => {
    expect($el[0].editor.getValue().baz).to.eq(undefined);
  });
};

export default loadShowOptInPropertiesTest;
