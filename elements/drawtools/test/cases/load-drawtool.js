import { TEST_SELECTORS } from "../../src/enums";
const { drawTools } = TEST_SELECTORS;

const loadDrawToolsTest = () =>
  it("loads the drawtools", () => {
    cy.get(drawTools).shadow();
  });

export default loadDrawToolsTest;
