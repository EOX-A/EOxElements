import "../src/main";
import "./_mockMap";
import {
  clickDiscardBtnTest,
  clickDrawBtnTest,
  loadDrawToolsTest,
} from "./cases";
import { TEST_SELECTORS } from "../src/enums";

const { drawTools } = TEST_SELECTORS;

describe("Drawtools", () => {
  beforeEach(() => {
    cy.mount("<mock-map></mock-map>").as("mock-map");
    cy.mount(`<eox-drawtools for="mock-map"></eox-drawtools>`).as(drawTools);
  });

  it("loads the drawtools", () => loadDrawToolsTest());
  it("clicks the draw button", () => clickDrawBtnTest());
  it("clicks the discard button and clears drawn features", () =>
    clickDiscardBtnTest());
});
