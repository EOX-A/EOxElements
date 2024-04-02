import { TEST_SELECTORS } from "../../src/enums";
import "../../../jsonform/src/main";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Load markdown editor
 */
const loadMarkdownEditorTest = () => {
  const testText = "# Foo";
  const editorSelector = "eox-storytelling-editor";
  const jsonFormSelector = `${editorSelector} eox-jsonform`;

  cy.mount(
    `<eox-storytelling show-editor markdown="${testText}"></eox-storytelling>`
  ).as(storyTelling);

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get(editorSelector).should("exist");
      cy.get(jsonFormSelector).should("exist");
      cy.get(jsonFormSelector).then(($jsonform) => {
        const newMardown = "# Bar";
        $jsonform[0].value = { Story: newMardown };
        expect($jsonform[0].value.Story).to.eq(newMardown);
      });
      cy.get("h1").should("have.text", "Bar");
    });
};

export default loadMarkdownEditorTest;
