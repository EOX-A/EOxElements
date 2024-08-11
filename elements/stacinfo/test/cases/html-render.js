import { testBody } from "../general.cy.js";

/**
 * Tests whether STACInfo render HTML if it's enabled
 */
const htmlRenderTest = () => {
  testBody({
    type: "Collection",
    description: "<button>click me</button>",
  });

  cy.mount(
    `
      <eox-stacinfo
        for="/collection"
        allow-html
      ></eox-stacinfo>`
  ).as("eox-stacinfo");

  cy.get("eox-stacinfo").then(($el) => {
    // @ts-ignore
    $el[0].body = ["description"];
  });

  cy.get("eox-stacinfo")
    .shadow()
    .within(() => {
      cy.get("#body eox-stacinfo-shadow")
        .shadow()
        .within(() => {
          cy.get("button").should("exist");
        });
    });
};

export default htmlRenderTest;
