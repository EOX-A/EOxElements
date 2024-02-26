// Importing necessary modules, test cases, and enums
import "../src/main";

import { loadMarkdownTest, loadMarkdownUrlTest } from "./cases";

// Test suite for Storytelling
describe("Storytelling", () => {
  // Test case to ensure the storytelling component loads successfully and renders passed markdown
  it("loads markdown", () => loadMarkdownTest());

  // Test case to ensure the storytelling component loads a markdown file from a url
  it("loads markdown from a url", () => loadMarkdownUrlTest());
});
