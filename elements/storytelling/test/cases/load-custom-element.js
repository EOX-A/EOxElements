import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Loads custom element through h1 and decorate.
 */
const LoadCustomElementTest = () => {
  const TAGS = ["foo-bar", "baz-que", "quux-corge"];
  let testText = "";

  TAGS.forEach((tag) => {
    testText += `# ${tag} <!--{as="${tag}" .custom-block}--> \n`;
  });

  cy.mount(`<eox-storytelling markdown='${testText}'></eox-storytelling>`).as(
    storyTelling
  );

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      TAGS.forEach((tag) => {
        cy.get(tag).should("exist");
      });
    });
};

export default LoadCustomElementTest;
