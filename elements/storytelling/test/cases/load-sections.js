import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Ensure all the sections loaded
 */
const loadSectionsTest = () => {
  const sectionIds = ["hello-world", "custom-id", "image", "custom-element"];
  const tags = ["div", "div", "img", "eox-element"];
  const testText = `
## Hello World
Section 1 Content Here

## Section 2 <!--{#${sectionIds[1]}}-->
Section 2 Content Here 

## Section 3 <!--{ src='url' #${sectionIds[2]} as=${tags[2]}}--> 

## Section 4 <!--{#${sectionIds[3]} as=${tags[3]}}--> 
`;

  cy.mount(`<eox-storytelling markdown="${testText}"></eox-storytelling>`).as(
    storyTelling
  );

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      sectionIds.forEach((id, key) => {
        cy.get(`${tags[key]}#section-${id}`).should("exist");
      });
    });
};

export default loadSectionsTest;
