
import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

const testVals = {
  key: "markdown",
  value: "# Hello world!\nThis is a markdown field rendered with **ace editor**.",
};

/**
 * Test to verify if the jsonform component with ace markdown editor loads successfully.
 */
const loadAceMarkdownTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        properties: {
          [testVals.key]: {
            type: "string",
            format: "markdown-ace",
            description: "This is a markdown field rendered with a custom ace editor with a toolbar.",
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
      cy.get(".ace_editor").should("exist");
      cy.get("button[title='Heading']").should("exist");
      cy.get("button[title='Bold']").should("exist");
      cy.get("button[title='Italic']").should("exist");
      cy.get("button[title='Strikethrough']").should("exist");
      cy.get("button[title='Link']").should("exist");
      cy.get("button[title='List']").should("exist");
    });
};

export default loadAceMarkdownTest;
