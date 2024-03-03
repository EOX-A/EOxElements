import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Loads markdown passed as slot.
 */
const loadMarkdownSlot = () => {
  const testText = "Hello World!";

  cy.mount(`<eox-storytelling># ${testText}</eox-storytelling>`).as(
    storyTelling
  );

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get("h1").should("have.text", testText);
    });
};

export default loadMarkdownSlot;
