import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Ensure all the sections loaded
 */
const loadSectionsTest = () => {
  const sectionIds = ["hello-world", "custom-id"];
  const testText = `
## Hello World
Section 1 Content Here

## Section 2 <!--{#${sectionIds[1]}}-->
Section 2 Content Here  
`;

  cy.mount(`<eox-storytelling markdown="${testText}"></eox-storytelling>`).as(
    storyTelling
  );

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      sectionIds.forEach((id, key) => {
        cy.get(".section-wrap").eq(key).should("have.id", `section-${id}`);
      });
    });
};

export default loadSectionsTest;
