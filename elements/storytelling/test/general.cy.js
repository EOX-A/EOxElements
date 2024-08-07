// Importing necessary modules, test cases, and enums
import "../src/main";

import {
  loadMarkdownTest,
  loadMarkdownUrlTest,
  loadMarkdownSlot,
  loadMarkdownAttrComment,
  loadSectionsTest,
  loadNavigationTest,
  loadMarkdownConfigTest,
  LoadCustomElementTest,
  loadMapSectionTest,
  loadMapTourTest,
  loadMarkdownEditorTest,
  loadHeroSectionTest,
  loadMarkdownLightBoxTest,
  loadMarkdownErrorStory,
} from "./cases";

// Test suite for Storytelling
describe("Storytelling", () => {
  // Test case to ensure the storytelling component loads successfully and renders passed markdown
  it("loads markdown", () => loadMarkdownTest());

  // Test case to ensure the storytelling component loads a markdown file from a url
  it("loads markdown from a url", () => loadMarkdownUrlTest());

  // Test case to ensure the storytelling component loads successfully and renders passed markdown from the slot
  it("loads markdown from slot", () => loadMarkdownSlot());

  // Test case to ensure the storytelling component loads with attribute from comments
  it("load markdown as attribute as comments", () => loadMarkdownAttrComment());

  // Test case to ensure all the sections loaded
  it("loads all the sections in the markdown", () => loadSectionsTest());

  // Test case to ensure all the navigation generated using sections
  it("loads all the navigation with help of sections", () =>
    loadNavigationTest());

  // Test case to loads basic config through storytelling markdown
  it("loads basic config through storytelling markdown", () =>
    loadMarkdownConfigTest());

  // Test case to load custom element
  it("Load custom element", () => LoadCustomElementTest());

  // Test case to load eox-map as a section
  it("Load eox-map section", () => loadMapSectionTest());

  // Test case to load map tour with sections and step sections
  it("Load map tour sections and step sections", () => loadMapTourTest());

  // Test case to load markdown editor
  it("Load markdown editor", () => loadMarkdownEditorTest());

  // Test case to ensure hero section loaded with content
  it("Load hero section", () => loadHeroSectionTest());

  // Test case to ensure lightbox loaded
  it("Load lightbox", () => loadMarkdownLightBoxTest());

  // Test case to ensure markdown error loaded
  it("Load markdown error", () => loadMarkdownErrorStory());
});
