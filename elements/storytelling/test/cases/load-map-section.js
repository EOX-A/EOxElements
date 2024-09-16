import { TEST_SELECTORS } from "../../src/enums";
import "../../../map/src-2/main";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Ensure all the map sections loaded
 */
const loadMapSectionTest = () => {
  const zoom = 10;
  const testText = `
## EOX Map <!--{as=eox-map zoom=${zoom}}-->
`;

  cy.mount(`<eox-storytelling markdown='${testText}'></eox-storytelling>`).as(
    storyTelling
  );

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      cy.get("eox-map").should("exist");
      cy.get("eox-map").then(($eoxMap) => {
        const zoom = $eoxMap[0].map.getView().getZoom();
        expect($eoxMap[0].zoom).to.eq(zoom);
      });
    });
};

export default loadMapSectionTest;
