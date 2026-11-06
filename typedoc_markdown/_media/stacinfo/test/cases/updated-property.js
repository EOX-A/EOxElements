import { testBody } from "../general.cy.js";

/**
 * Tests whether STAC Common Metadata updated property is formatted as YYYY-MM-DD
 */
const UpdatedPropertyTest = () => {
  const collection = {
    type: "Collection",
    id: "test-collection",
    title: "Test Collection",
    updated: "2024-03-15T14:30:00Z",
  };
  testBody(collection);

  cy.mount(
    `
      <eox-stacinfo
        for="/collection"
      ></eox-stacinfo>`,
  ).as("eox-stacinfo");

  cy.get("eox-stacinfo").then(($el) => {
    // @ts-expect-error TODO
    $el[0].header = ["updated"];
    // @ts-expect-error TODO
    $el[0].body = ["updated"];
  });

  cy.get("eox-stacinfo")
    .shadow()
    .within(() => {
      // Header formatting
      cy.get("header").should("contain.text", "2024-03-15");
      // Body formatting
      cy.get("#body .value").should("contain.text", "2024-03-15");
    });
};

export default UpdatedPropertyTest;
