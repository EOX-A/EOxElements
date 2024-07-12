import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";
import schemaFixture from "../fixtures/catalogSchema.json";
import valueFixture from "../fixtures/catalogValue.json";
import collectionSchemaFixture from "../fixtures/collectionSchema.json";
import collectionValue from "../fixtures/collectionValue.json";
// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const loadReRenderFormOnChangeTest = () => {
  cy.intercept("**/catalogSchema.json", (req) => {
    req.reply(schemaFixture);
  });
  cy.intercept("**/collectionSchema.json", (req) => {
    req.reply(collectionSchemaFixture);
  });
  cy.intercept("**/catalogValue.json", (req) => {
    req.reply(valueFixture);
  });
  cy.intercept("**/collectionValue.json", (req) => {
    req.reply(collectionValue);
  });
  cy.mount(
    html`<eox-jsonform
      .schema=${"/catalogSchema.json"}
      .value=${"/catalogValue.json"}
    ></eox-jsonform>`
  ).as(jsonForm);
  cy.get(jsonForm).then(($jsonForm) => {
    $jsonForm[0].schema = "/collectionSchema.json";
    $jsonForm[0].value = "/collectionValue.json";
  });
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get('input[id="root[extent][spatial][bbox][0][0]"]')
        .invoke("val")
        .should("eq", "9.0405918788");
    });
  cy.get(jsonForm).then(($jsonForm) => {
    $jsonForm[0].value = { title: "foobar" };
  });
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get('input[id="root[title]"]').invoke("val").should("eq", "foobar");
    });
};

export default loadReRenderFormOnChangeTest;
