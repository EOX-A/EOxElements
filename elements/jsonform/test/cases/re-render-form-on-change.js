import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";
import schemaFixture from "../fixtures/catalogSchema.json";
import startValsFixture from "../fixtures/catalogStartVals.json";
import collectionSchemaFixture from "../fixtures/collectionSchema.json";
import collectionStartVals from "../fixtures/collectionStartVals.json";
// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const loadReRenderFormOnChangeTest = () => {
  cy.intercept("**/catalogSchema.json", (req) => {
    req.reply(schemaFixture);
  });
  cy.intercept("**/collectionSchema.json", (req) => {
    req.reply(collectionSchemaFixture);
  });
  cy.intercept("**/catalogStartVals.json", (req) => {
    req.reply(startValsFixture);
  });
  cy.intercept("**/collectionStartVals.json", (req) => {
    req.reply(collectionStartVals);
  });
  cy.mount(
    html`<eox-jsonform
      .schema=${"/catalogSchema.json"}
      .startVals=${"/catalogStartVals.json"}
    ></eox-jsonform>`
  ).as(jsonForm);
  cy.get(jsonForm).then(($jsonForm) => {
    $jsonForm[0].schema = "/collectionSchema.json";
    $jsonForm[0].startVals = "./collectionStartVals.json";
  });
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get('div[data-schemapath="root.extent.spatial.bbox"]');
    });
};

export default loadReRenderFormOnChangeTest;
