// Importing necessary modules, test cases, and enums
import "../src/main";
import "./_mockMap";
import {
  clickDiscardBtnTest,
  clickDrawBtnTest,
  copyGeoJsonEditorTest,
  loadDrawToolsTest,
} from "./cases";
import { TEST_SELECTORS } from "../src/enums";

// Destructuring TEST_SELECTORS object
const { drawTools } = TEST_SELECTORS;

// Test suite for Drawtools
describe("Drawtools", () => {
  // Setting up the environment before each test
  beforeEach(() => {
    // Mounting mock-map and eox-drawtools elements
    cy.mount("<mock-map></mock-map>").as("mock-map");
    cy.mount(
      `<eox-drawtools show-editor import-features for="mock-map"></eox-drawtools>`
    ).as(drawTools);
  });

  // Test case to ensure the drawtools component loads successfully
  it("loads the drawtools", () => loadDrawToolsTest());

  // Test case to simulate clicking the draw button
  it("clicks the draw button", () => clickDrawBtnTest());

  // Test case to simulate clicking the discard button and clearing drawn features
  it("clicks the discard button and clears drawn features", () =>
    clickDiscardBtnTest());

  // Test case to check whether a valid geo-json present in the clipboard
  it("check valid geo-json present in the clipboard.", () =>
    copyGeoJsonEditorTest());
});
