import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key: "foo",
  value: "# bar",
};
/**
 * Test to verify if the jsonform component loads successfully.
 */
const loadMarkdownTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        properties: {
          [testVals.key]: {
            type: "string",
            format: "markdown",
            options: {
              simplemde: {
                spellChecker: false,
              },
            },
          },
        },
      }}
      .value=${{
        [testVals.key]: testVals.value,
      }}
    ></eox-jsonform>`
  ).as(jsonForm);
  // Find the jsonForm element and access its shadow DOM
  cy.get(jsonForm)
    .shadow()
    .within(() => {
      // Check if CodeMirror editor has loaded
      cy.get(".CodeMirror").should("exist");
      // Check if text was rendered as h1
      cy.get(".cm-header-1").invoke("text").should("eq", testVals.value);
    });
  cy.get(jsonForm).and(($el) => {
    // Check if editor settings were applied
    expect(
      $el[0].editor.editors[`root.${testVals.key}`].options.simplemde
        .spellChecker
    ).to.eq(false);
  });
};

export default loadMarkdownTest;
