// Importing necessary modules, test cases, and enums
import "../src/main";
import { loadTimeControlTest, changeTimeTest } from "./cases";

describe("TimeControl", () => {
  it("loads the timecontrol", () => loadTimeControlTest());
  it.only("changes the time correctly", () => changeTimeTest());
});
