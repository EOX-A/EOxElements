import { TEST_SELECTORS } from "../../src/enums";
import "../../../map/src/main";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Ensure all the map tour sections loaded
 */
const loadMapTourTest = () => {
  const heading = ["Hello World 1", "Hello World 2"];
  const testTextMapTour = `
## EOX Map <!--{as=eox-map mode=tour position=left prevent-scroll=true}-->

### <!--{ layers=[] zoom=5 }-->
#### ${heading[0]}

### <!--{ layers=[] zoom=1 }-->
#### ${heading[1]}
`;

  cy.mount(
    `<eox-storytelling markdown='${testTextMapTour}'></eox-storytelling>`
  ).as(storyTelling);

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get("eox-map").should("exist");
      heading.forEach((i, key) =>
        cy.get("section-step h4").eq(key).should("have.text", i)
      );
    });
};

export default loadMapTourTest;
