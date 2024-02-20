import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";
import schemaFixture from "../fixtures/catalogSchema.json";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const loadExternalSchemaTest = () => {
  cy.intercept("**/catalogSchema.json", (req) => {
    req.reply(schemaFixture);
  });
  cy.mount(
    html`<eox-jsonform .schema=${"/catalogSchema.json"}></eox-jsonform>`
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
