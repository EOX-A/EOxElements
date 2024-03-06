import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Load basic storytelling config
 */
const loadMarkdownConfigTest = () => {
  const testText = `
---
nav: false
id: 123
type: pagination
---  
`;

  cy.mount(
    `<eox-storytelling show-config markdown="${testText}"></eox-storytelling>`
  ).as(storyTelling);

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get(".config-wrap textarea").should(
        "have.text",
        JSON.stringify({ nav: false, id: 123, type: "pagination" }, null, 2)
      );
    });
};

export default loadMarkdownConfigTest;
