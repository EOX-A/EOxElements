import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Load markdown with attributes from comment
 */
const loadMarkdownAttrComment = () => {
  const testText = "Hello World!";
  const testId = "red-color";
  const testClass = "red";
  const testColor = "rgb(255, 0, 0)";

  cy.mount(
    `<eox-storytelling markdown="# ${testText} <!--{#${testId} .${testClass} style='color:${testColor};'}-->"></eox-storytelling>`
  ).as(storyTelling);

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get("h1").should("have.text", testText);
      cy.get("h1").should("have.id", testId);
      cy.get("h1").should("have.class", testClass);
      cy.get("h1").should("have.css", "color", testColor);
    });
};

export default loadMarkdownAttrComment;
