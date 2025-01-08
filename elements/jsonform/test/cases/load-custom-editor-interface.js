import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";
import CustomEditorExample from "../../src/custom-inputs/example.js";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;
const schema = {
  properties: {
    test: {
      type: "boolean",
      format: "custom",
      title: "Custom Editor Field",
    },
  },
};

const loadCustomEditorInterfaceTest = () => {
  cy.mount(
    html`<eox-jsonform
      .customEditorInterfaces=${[
        {
          type: "boolean",
          format: "custom",
          func: CustomEditorExample,
        },
      ]}
      .schema=${schema}
      .value=${{
        test: false,
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get("select").should("exist");
      cy.get("label.form-check-label").should(
        "have.text",
        schema.properties.test.title,
      );
      cy.get("select").should("have.value", "false");
      cy.get("select").select("true");
      cy.get("select").should("have.value", "true");
    });
};

export default loadCustomEditorInterfaceTest;
