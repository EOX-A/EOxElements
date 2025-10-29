import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key: "foo",
  value: "bar",
  number: 7,
};
/**
 * Test to verify if the code editor loads successfully.
 */
const loadCodeTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        properties: {
          [testVals.key]: {
            type: "string",
            format: "json",
            options: {
              ace: {
                tabSize: testVals.number,
              },
            },
          },
        },
      }}
      .value=${{
        [testVals.key]: testVals.value,
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);
  // Find the jsonForm element and access its shadow DOM
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      // Check if Ace editor has loaded
      cy.get(".ace_editor").should("exist");
      // Check if text was rendered correctly
      cy.get(".ace_line").invoke("text").should("eq", testVals.value);
    });
  cy.get(jsonForm).and(($el) => {
    // Check if editor settings were applied
    expect(
      $el[0].editor.editors[`root.${testVals.key}`].options.ace.tabSize,
    ).to.eq(testVals.number);
  });
};

export default loadCodeTest;
