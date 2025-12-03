// Importing necessary modules, test cases, and enums
import "../src/main";
import {
  loadTimeControlTest,
  changeTimeTest,
  loadDateFormatTest,
} from "./cases";

describe("TimeControl", () => {
  it("loads the timecontrol-2", () => loadTimeControlTest());
  it("changes the time correctly", () => changeTimeTest());
  it("loads the date format correctly", () => loadDateFormatTest());
});
