import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Loads markdown passed as url.
 */
const loadMarkdownUrlTest = () => {
  const testText = "Hello World!";

  cy.intercept("/test.md*", {
    body: `# ${testText}`,
  });

  cy.mount(`<eox-storytelling markdown-url="/test.md"></eox-storytelling>`).as(
    storyTelling
  );

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get("h1").should("have.text", testText);
    });
};

export default loadMarkdownUrlTest;
