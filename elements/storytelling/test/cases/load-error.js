import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Load markdown with error
 */
const loadMarkdownError = () => {
  const testText = `## <!--{as='eox-map' center=[]}-->

### What is Lorem Ipsum? <!--{as='eox-map'}-->
Lorem Ipsum
  `;

  cy.mount(
    `<eox-storytelling show-editor="open" markdown="${testText}"></eox-storytelling>`
  ).as(storyTelling);

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get("eox-storytelling-editor .editor-error ul")
        .find("li")
        .its("length")
        .should("eq", 2);
    });
};

export default loadMarkdownError;
