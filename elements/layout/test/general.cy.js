// Importing necessary modules, test cases, and enums
import "../src/main";
import { loadTourTest } from "./cases";

describe("Tour", () => {
  it("loads the tour", () => loadTourTest());
});
