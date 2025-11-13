import { testBody } from "../general.cy.js";

/**
 * Tests whether featured sections are created for properties
 */
const CreateFeaturedTest = () => {
  testBody({
    type: "Collection",
  });
  cy.mount(
    `
      <eox-stacinfo for="/collection"}></eox-stacinfo>`,
  ).as("eox-stacinfo");

  cy.get("eox-stacinfo").then(($el) => {
    // @ts-expect-error TODO
    $el[0].featured = ["description", "links"];
  });

  // Check without featured properties
  cy.get("eox-stacinfo")
    .shadow()
    .within(() => {
      cy.get("section#featured").should("not.exist");
    });

  // Check with featured properties (array property)
  testBody({
    type: "Collection",
    links: [
      {
        title: "Foobar Link",
        href: "https://example.com/foobar",
      },
      {
        title: "Foobar Link 2",
        href: "https://example.com/foobar",
      },
    ],
  });

  cy.get("eox-stacinfo").then(($el) => {
    $el[0].for = "/collection2";
  });

  cy.get("eox-stacinfo")
    .shadow()
    .within(() => {
      cy.get("section#featured").should("exist");
      cy.get("section#featured .button-container").should("have.length", 2);
    });

  // Check with featured properties (string property)
  testBody({
    type: "Collection",
    description: "## Foo, Bar!",
  });

  cy.get("eox-stacinfo").then(($el) => {
    $el[0].for = "/collection3";
  });

  cy.get("eox-stacinfo")
    .shadow()
    .within(() => {
      cy.get("section#featured").should("exist");
    });
};

export default CreateFeaturedTest;
