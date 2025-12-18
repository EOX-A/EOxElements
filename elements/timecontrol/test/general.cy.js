// Importing necessary modules, test cases, and enums
import "../src/main";

// Test suite for TimeControl
describe("TimeControl", () => {
  // Set up before each test
  beforeEach(() => {
    cy.mount(`<eox-timecontrol></eox-timecontrol>`).as("eox-timecontrol");
  });

  // TODO: More test need to be added
  // Sample test added so that test pipeline doesn't break due to no tests in timecontrol
  it("loads the timecontrol", () => cy.get("eox-timecontrol").shadow());
});
