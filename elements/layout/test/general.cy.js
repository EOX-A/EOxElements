// Importing necessary modules, test cases, and enums
import "../src/main";
import {
  loadLayoutTest,
  renderItemsTest,
  renderItemsWidthTest,
  renderGapTest,
  mapWorkspaceTest,
  mapWorkspaceSlotsTest,
  mapSideBySideTest,
} from "./cases";

describe("Layout", () => {
  it("loads the drawtools", () => loadLayoutTest());
  it("renders the correct number of layout items", () => renderItemsTest());
  it("renders the correct width of layout items", () => renderItemsWidthTest());
  it("renders the correct gap", () => renderGapTest());
});

describe("Map Workspace", () => {
  it("automatically slots map and sidebar children", () => mapWorkspaceTest());
  it("supports explicit slot assignment", () => mapWorkspaceSlotsTest());
});

describe("Map Side by Side", () => {
  it("renders side-by-side container and slots children", () =>
    mapSideBySideTest());
});
