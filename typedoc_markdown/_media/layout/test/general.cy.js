// Importing necessary modules, test cases, and enums
import "../src/main";
import {
  loadLayoutTest,
  renderItemsTest,
  renderItemsWidthTest,
  renderGapTest,
} from "./cases";

describe("Layout", () => {
  it("loads the drawtools", () => loadLayoutTest());
  it("renders the correct number of layout items", () => renderItemsTest());
  it("renders the correct width of layout items", () => renderItemsWidthTest());
  it("renders the correct gap", () => renderGapTest());
});
