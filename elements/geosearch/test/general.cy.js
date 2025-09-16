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

  it("should support extent parameter", () => {
    cy.mount(
      `
        <eox-geosearch
            label="Search"
            button
            endpoint="./opencage-mock-data.json"
            extent="-125.0,24.0,-66.0,49.0"
        ></eox-geosearch>
      `,
    );
    cy.get("eox-geosearch").should("have.attr", "extent", "-125.0,24.0,-66.0,49.0");
  });

  it("should support tooltip parameter", () => {
    cy.mount(
      `
        <eox-geosearch
            label="Search"
            button
            small
            endpoint="./opencage-mock-data.json"
            tooltip="Search for locations"
            tooltip-direction="bottom"
        ></eox-geosearch>
      `,
    );
    cy.get("eox-geosearch").should("have.attr", "tooltip", "Search for locations");
    cy.get("eox-geosearch").should("have.attr", "tooltip-direction", "bottom");
  });
});
