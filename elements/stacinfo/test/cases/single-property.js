import { testBody } from "../general.cy.js";

/**
 * Tests whether single property is whitelisted or not
 */
const SinglePropertyTest = () => {
  testBody({
    type: "Collection",
    description: "Hello world!",
  });

  cy.mount(
    `
      <eox-stacinfo
        for="/collection"
      ></eox-stacinfo>`,
  ).as("eox-stacinfo");

  cy.get("eox-stacinfo").then(($el) => {
    // @ts-expect error TODO
    $el[0].body = ["description"];
  });

  cy.get("eox-stacinfo")
    .shadow()
    .within(() => {
      cy.get("#body ul.single-property").should("exist");
    });
};

export default SinglePropertyTest;
