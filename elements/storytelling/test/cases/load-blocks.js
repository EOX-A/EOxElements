import { TEST_SELECTORS } from "../../src/enums";
import "../../../map/src/main";

// Destructure TEST_SELECTORS object
const { storyTelling } = TEST_SELECTORS;

/**
 * Ensure the storytelling component successfully loads and compiles blocks
 */
const loadBlocksTest = () => {
  cy.mount(`<eox-storytelling id="blocks-test"></eox-storytelling>`).as(
    storyTelling,
  );

  const testBlocks = [
    {
      type: "hero-image",
      props: {
        title: "Dynamic Hero Title",
        src: "https://www.gstatic.com/prettyearth/assets/full/14617.jpg",
        description: "Dynamic Hero Desc",
      },
    },
    {
      type: "text",
      props: {
        markdown:
          "This is a paragraph with **bold text** generated from JSON blocks.",
      },
    },
    {
      type: "eox-map",
      props: {
        title: "Standard Map Block",
        zoom: 6,
        center: [16, 48],
        layers: [
          {
            type: "Tile",
            properties: { id: "osm" },
            source: { type: "OSM" },
          },
        ],
      },
    },
  ];

  cy.get(storyTelling).then(($el) => {
    $el[0].blocks = testBlocks;
  });

  cy.get(storyTelling)
    .shadow()
    .within(() => {
      // 1. Verify hero section is rendered
      cy.get("h1").should("contain.text", "Dynamic Hero Title");
      cy.get("h3").should("contain.text", "Dynamic Hero Desc");
      cy.get("img[mode='hero']").should(
        "have.attr",
        "src",
        "https://www.gstatic.com/prettyearth/assets/full/14617.jpg",
      );

      // 2. Verify text section with bold text is rendered
      cy.get("p").should("contain.text", "generated from JSON blocks.");
      cy.get("strong").should("contain.text", "bold text");

      // 3. Verify eox-map is instantiated with the correct zoom and center properties
      cy.get("eox-map").should("exist");
      cy.get("eox-map").then(($eoxMap) => {
        expect($eoxMap[0].zoom).to.eq(6);
        const mapCenter = $eoxMap[0].map.getView().getCenter();
        expect(mapCenter[0]).to.be.closeTo(1781111.85, 100);
        expect(mapCenter[1]).to.be.closeTo(6106854.83, 100);
      });
    });
};

export default loadBlocksTest;
