import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Load basic storytelling config
 */
const loadMarkdownConfigTest = () => {
  const testText = `
---
nav: true
---
## Foo
## Bar
`;

  cy.mount(`<eox-storytelling markdown="${testText}"></eox-storytelling>`).as(
    storyTelling
  );

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get("div").should("have.class", "navigation");
      cy.get(".navigation a").should("have.attr", "href", "#section-foo");
    });
};

export default loadMarkdownConfigTest;
