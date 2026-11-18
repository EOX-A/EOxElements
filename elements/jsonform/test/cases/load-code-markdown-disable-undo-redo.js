import { html } from "lit";
import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

/**
 * Test to verify if the jsonform component with ace markdown editor successfully disables undo/redo.
 */
const loadAceMarkdownDisableUndoRedoTest = () => {
  cy.mount(
    html`<eox-jsonform
      .schema=${{
        type: "object",
        properties: {
          markdown: {
            type: "string",
            format: "markdown",
            options: {
              resolver: "ace",
              disableUndoRedo: true,
            },
          },
        },
      }}
      .value=${{
        markdown: "initial text",
      }}
    ></eox-jsonform>`,
  ).as(jsonForm);

  cy.get(jsonForm)
    .shadow()
    .within(() => {
      cy.get(".ace_editor").should("exist");

      // Type something new in the editor
      cy.get(".ace_text-input").type(" edited", { force: true });
      cy.get(".ace_content").should("contain.text", "initial text edited");

      // Try to undo (mac/windows)
      cy.get(".ace_text-input").type("{meta}z", { force: true });
      cy.get(".ace_text-input").type("{ctrl}z", { force: true });

      // Assert it did not undo because the shortcut is disabled
      cy.get(".ace_content").should("contain.text", "initial text edited");
    });
};

export default loadAceMarkdownDisableUndoRedoTest;
