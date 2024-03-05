import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Ensure navigation generated using sections
 */
const loadNavigationTest = () => {
  const sectionIds = ["hello-world", "custom-id"];
  const testText = `
## Hello World
Section 1 Content Here

## Section 2 <!--{#${sectionIds[1]}}-->
Section 2 Content Here  
`;

  cy.mount(
    `<eox-storytelling enableNav=${true} markdown="${testText}"></eox-storytelling>`
  ).as(storyTelling);

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      sectionIds.forEach((id, key) => {
        cy.get(".navigation a")
          .eq(key)
          .should("have.attr", "href", `#section-${id}`);
      });
    });
};

export default loadNavigationTest;
