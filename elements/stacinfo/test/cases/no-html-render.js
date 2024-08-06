import { testBody } from "../general.cy.js";

/**
 * Tests whether STACInfo doesn't render HTML if not enabled
 */
const NoHtmlRenderTest = () => {
  testBody({
    type: "Collection",
    description: "<button>click me</button>",
  });

  cy.mount(
    `
      <eox-stacinfo
        for="/collection"
      ></eox-stacinfo>`
  ).as("eox-stacinfo");

  cy.get("eox-stacinfo").then(($el) => {
    // @ts-ignore
    $el[0].body = ["description"];
  });

  cy.get("eox-stacinfo")
    .shadow()
    .within(() => {
      cy.get("#body button").should("not.exist");
    });
};

export default NoHtmlRenderTest;
