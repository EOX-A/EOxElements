import { testBody } from "../general.cy.js";

/**
 * Tests whether STAC is loaded or not
 */
const LoadStacinfoTest = () => {
  testBody({
    type: "Collection",
  });
  cy.mount(
    `
      <eox-stacinfo for="/collection"></eox-stacinfo>`
  ).as("eox-stacinfo");
  cy.get("eox-stacinfo").shadow();
};

export default LoadStacinfoTest;
