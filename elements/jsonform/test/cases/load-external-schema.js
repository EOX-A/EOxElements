import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const loadExternalSchemaTest = () => {
  cy.intercept(
    "https://raw.githubusercontent.com/EOX-A/EOxElements/main/elements/jsonform/examples/catalogSchema.json",
    {
      fixture: "/catalogSchema.json",
    }
  );
  cy.mount(
    html`<eox-jsonform
      .schema=${"https://raw.githubusercontent.com/EOX-A/EOxElements/main/elements/jsonform/examples/catalogSchema.json"}
    ></eox-jsonform>`
  ).as(jsonForm);
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".je-child-editor-holder > b")
        .invoke("html")
        .should("eq", "item 1");
    });
};

export default loadExternalSchemaTest;
