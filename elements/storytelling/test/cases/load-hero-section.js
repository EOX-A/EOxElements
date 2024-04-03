import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Ensure the hero section loaded
 */
const loadHeroSectionTest = () => {
  const img = "https://www.gstatic.com/prettyearth/assets/full/14617.jpg";
  const testText = `
## Hero Bg Image <!--{ as="img" mode="hero" position="center" src="${img}" }-->
# Foo
#### Bar
`;

  cy.mount(`<eox-storytelling markdown='${testText}'></eox-storytelling>`).as(
    storyTelling
  );

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get(".section-wrap.hero img").should("exist");
      cy.get(".section-wrap.hero img").should("have.attr", "src", img);
      cy.get(".section-wrap.hero h1").should("have.text", "Foo");
      cy.get(".section-wrap.hero h4").should("have.text", "Bar");
    });
};

export default loadHeroSectionTest;
