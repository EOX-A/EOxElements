import { testBody } from "../general.cy.js";

/**
 * Tests whether list item for all properties created or not
 */
const CreateListTest = () => {
  const body = {
    type: "Collection",
    title: "Foobar",
    id: "foobar",
  };
  testBody(body);
  cy.mount(
    `
      <eox-stacinfo for="/collection"></eox-stacinfo>`
  ).as("eox-stacinfo");
  cy.get("eox-stacinfo")
    .shadow()
    .within(() => {
      cy.get("li").should("have.length", Object.keys(body).length);
    });
};

export default CreateListTest;
