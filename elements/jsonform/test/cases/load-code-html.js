import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key: "foo",
  value: "<div><span class='test'>test</span></div>",
};

/**
 * Test to verify if HTML code inside the code/ace editor is preserved.
 */
const loadCodeHTMLTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        properties: {
          [testVals.key]: {
            type: "string",
            format: "html",
            options: {
              resolver: "ace",
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
      // Check if raw HTML markup was rendered correctly and NOT stripped by DOMPurify
      cy.get(".ace_content").invoke("text").should("contain", testVals.value);
    });
};

export default loadCodeHTMLTest;
