// Importing necessary modules, test cases, and enums
import "../src/main";
import {
  loadJsonFormTest,
  loadExternalSchemaTest,
  loadExternalStartValsTest,
  loadReRenderFormOnChangeTest,
} from "./cases";

// Test suite for Jsonform
describe("Jsonform", () => {
  // Test case to ensure the jsonform component loads successfully
  it("loads the jsonform", () => loadJsonFormTest());
  it("loads schema from url", () => loadExternalSchemaTest());
  it("loads startVals from url", () => loadExternalStartValsTest());
  it("re-renders form on change", () => loadReRenderFormOnChangeTest());
});
