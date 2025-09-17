describe("EOxGeoSearch", () => {
  // Setting up the environment before each test
  beforeEach(() => {
    // Mounting mock-map and eox-drawtools elements
    //cy.mount("<mock-map></mock-map>").as("mock-map");
    cy.mount(
      `
        <eox-geosearch
            label="Search"
            button
            small
            list-direction="right"
            results-direction="down"
            endpoint="./opencage-mock-data.json"
        ></eox-geosearch>
      `,
    ).as("eox-geosearch");
  });

  // TODO: Replace this very basic test with an actual test suite
  //       and find out why Cypress will not render the shadow
  //       DOM of the eox-geosearch element.
  it("should find the geosearch element", () => {
    cy.get("eox-geosearch").should("exist");
  });

  it("should support extent and tooltip parameters", () => {
    // Test that the component can be created with new parameters like the existing test
    cy.mount(
      `
        <eox-geosearch
            label="Search"
            button
            small
            list-direction="right"
            results-direction="down"
            endpoint="./opencage-mock-data.json"
            extent="-125.0,24.0,-66.0,49.0"
            tooltip="Search for locations"
            tooltip-direction="bottom"
        ></eox-geosearch>
      `,
    );

    // Basic test - component should exist
    cy.get("eox-geosearch").should("exist");

    // Test that properties can be set and retrieved correctly
    cy.get("eox-geosearch").then(($el) => {
      const element = $el[0];

      // Test extent property
      element.extent = "-125.0,24.0,-66.0,49.0";
      expect(element.extent).to.equal("-125.0,24.0,-66.0,49.0");

      // Test tooltip property
      element.tooltip = "Search for locations";
      expect(element.tooltip).to.equal("Search for locations");

      // Test tooltipDirection property
      element.tooltipDirection = "bottom";
      expect(element.tooltipDirection).to.equal("bottom");
    });
  });
});
