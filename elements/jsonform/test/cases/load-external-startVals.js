import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const loadExternalStartValsTest = () => {
  cy.intercept(
    "https://raw.githubusercontent.com/EOX-A/EOxElements/main/elements/jsonform/examples/catalogSchema.json",
    {
      fixture: "/catalogSchema.json",
    }
  );
  cy.intercept(
    "https://raw.githubusercontent.com/EOX-A/EOxElements/main/elements/jsonform/examples/catalogStartVals.json",
    {
      fixture: "/catalogStartVals.json",
    }
  );
  cy.mount(
    html`<eox-jsonform
      .schema=${"https://raw.githubusercontent.com/EOX-A/EOxElements/main/elements/jsonform/examples/catalogSchema.json"}
      .startVals=${"https://raw.githubusercontent.com/EOX-A/EOxElements/main/elements/jsonform/examples/catalogStartVals.json"}
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
