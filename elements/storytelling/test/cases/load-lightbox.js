import { TEST_SELECTORS } from "../../src/enums";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Load markdown with lightbox
 */
const loadMarkdownLightBox = () => {
  const imgURL = "https://i.imgur.com/GDAStfX.jpeg";
  const testText = `## Satellite Data
![Image](${imgURL})
  `;

  cy.mount(
    `<eox-storytelling no-shadow markdown="${testText}"></eox-storytelling>`
  ).as(storyTelling);

  cy.get(storyTelling).within(() => {
    cy.get("img").click();
  });

  cy.get("img.fslightbox-source").should("have.attr", "src", imgURL);
};

export default loadMarkdownLightBox;
