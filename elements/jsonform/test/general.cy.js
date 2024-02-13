// Importing necessary modules, test cases, and enums
import "../src/main";
import { loadJsonFormTest } from "./cases";
import { TEST_SELECTORS } from "../src/enums";

// Destructuring TEST_SELECTORS object
const { jsonForm } = TEST_SELECTORS;

// Test suite for Drawtools
describe("Drawtools", () => {
  // Test case to ensure the jsonform component loads successfully
  it("loads the jsonform", () => loadJsonFormTest());
});
