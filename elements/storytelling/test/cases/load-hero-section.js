import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Ensure the hero section loaded
 */
const loadHeroSectionTest = () => {
  const img = "https://www.gstatic.com/prettyearth/assets/full/14617.jpg";
  const testText = `
# Foo <!--{ as="img" mode="hero" src="${img}" }-->
#### Bar

## Hello World
Section 1 Content Here
`;

  cy.mount(
    `<eox-storytelling show-nav markdown='${testText}'></eox-storytelling>`
  ).as(storyTelling);

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get(".section-wrap.hero img").should("exist");
      cy.get(".section-wrap.hero img").should("have.attr", "src", img);
      cy.get(".section-wrap.hero h1").should("have.text", "Foo");
      cy.get(".section-wrap.hero h4").should("have.text", "Bar");

      cy.get(".story-telling div > :nth-child(1)").filter('[class*="hero"]');
      cy.get(".story-telling div > :nth-child(2)").filter(
        '[class*="navigation"]'
      );
    });
};

export default loadHeroSectionTest;
