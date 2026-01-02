import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key: "binary_prop",
  value: 1,
};

const loadBinaryCheckboxTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        properties: {
          [testVals.key]: {
            type: "number",
            format: "binarycheckbox",
          },
        },
      }}
      .value=${{
        [testVals.key]: testVals.value,
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get("input[type='checkbox']").as("myCheckbox");

      // Check Initial State
      cy.get("@myCheckbox").should("be.checked");

      // Test Interaction
      cy.get("@myCheckbox").click({ force: true });
      cy.get("@myCheckbox").should("not.be.checked");
    });

  cy.get(jsonForm).and(($el) => {
    const editorValue = $el[0].editor.getValue();
    expect(editorValue[testVals.key]).to.eq(0);
  });
};

export default loadBinaryCheckboxTest;
