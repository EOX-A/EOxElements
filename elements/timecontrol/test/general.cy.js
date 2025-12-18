// Test suite for TimeControl
describe("TimeControl", () => {
  // Set up before each test
  beforeEach(() => {
    cy.mount("<mock-map></mock-map>").as("mock-map");
    cy.mount(`<eox-timecontrol for="mock-map"></eox-timecontrol>`).as(
      "eox-timecontrol",
    );
  });

  // TODO: More test need to be added
});
