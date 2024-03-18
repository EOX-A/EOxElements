import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";
import schemaFixture from "../fixtures/catalogSchema.json";
import startValsFixture from "../fixtures/catalogStartVals.json";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const loadExternalStartValsTest = () => {
  cy.intercept(
    "https://raw.githubusercontent.com/EOX-A/EOxElements/main/elements/jsonform/examples/catalogSchema.json",
    (req) => {
      req.reply(schemaFixture);
    }
  );
  cy.intercept(
    "https://raw.githubusercontent.com/EOX-A/EOxElements/main/elements/jsonform/examples/catalogStartVals.json",
    (req) => {
      req.reply(startValsFixture);
    }
  );
  cy.mount(
    html`<eox-jsonform
      .schema=${"https://raw.githubusercontent.com/EOX-A/EOxElements/main/elements/jsonform/examples/catalogSchema.json"}
      .value=${"https://raw.githubusercontent.com/EOX-A/EOxElements/main/elements/jsonform/examples/catalogStartVals.json"}
    ></eox-jsonform>`
  ).as(jsonForm);
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get('input[name="root[title]"]')
        .invoke("val")
        .should("eq", "Ablation Zones/Accumulation Zones");
    });
};

export default loadExternalStartValsTest;
