// Importing necessary modules, test cases, and enums
import "../src/main";
import { loadJsonFormTest } from "./cases";

// Test suite for Drawtools
describe("Drawtools", () => {
  // Test case to ensure the jsonform component loads successfully
  it("loads the jsonform", () => loadJsonFormTest());
});
