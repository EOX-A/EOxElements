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

  cy.mount(`<eox-storytelling markdown="${testText}"></eox-storytelling>`).as(
    storyTelling
  );

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get("img").click();
    });

  cy.get(".glightbox-container img").should("have.attr", "src", imgURL);
};

export default loadMarkdownLightBox;
