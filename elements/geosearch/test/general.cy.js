import "@eox/map";
import "@eox/geosearch";
import data from "../stories/public/opencage-mock-data.json";
import { html } from "lit";

describe("EOxGeoSearch", () => {
  // Setting up the environment before each test
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: new RegExp("opencagedata.com/api-endpoint"),
      },
      (req) => {
        req.reply(data);
      },
    );
    // Mounting mock-map and eox-drawtools elements
    //cy.mount("<mock-map></mock-map>").as("mock-map");
  });

  // TODO: Replace this very basic test with an actual test suite
  //       and find out why Cypress will not render the shadow
  //       DOM of the eox-geosearch element.
  it("should find the geosearch element", () => {
    cy.mount(
      `
      <eox-geosearch
          label="Search"
          button
          small
          list-direction="right"
          results-direction="down"
          endpoint="https://opencagedata.com/api-endpoint"
      ></eox-geosearch>
      `,
    ).as("eox-geosearch");
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
            endpoint="https://opencagedata.com/api-endpoint"
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

  it("should support additional parameters via params property", () => {
    // Create component with params
    cy.mount(
      `
        <eox-geosearch
            label="Search"
            button
            small
            endpoint="https://opencagedata.com/api-endpoint"
        ></eox-geosearch>
      `,
    );

    cy.get("eox-geosearch").should("exist");

    // Test that params property can be set and retrieved
    cy.get("eox-geosearch").then(($el) => {
      const element = $el[0];

      // Set params object
      const testParams = {
        language: "en",
        limit: 5,
        countrycode: "us",
      };
      element.params = testParams;

      // Verify params are set correctly
      expect(element.params).to.deep.equal(testParams);

      // Test that params are included in the fetch URL
      // We can't easily test the actual network request in this setup,
      // but we can verify the property works
      expect(element.params.language).to.equal("en");
      expect(element.params.limit).to.equal(5);
      expect(element.params.countrycode).to.equal("us");
    });
  });

  it("should handle params alongside extent parameter", () => {
    cy.mount(
      `
        <eox-geosearch
            label="Search"
            button
            small
            endpoint="https://opencagedata.com/api-endpoint"
            extent="-125.0,24.0,-66.0,49.0"
        ></eox-geosearch>
      `,
    );

    cy.get("eox-geosearch").then(($el) => {
      const element = $el[0];

      // Set both extent and params
      element.extent = "-125.0,24.0,-66.0,49.0";
      element.params = {
        language: "de",
        limit: 10,
      };

      // Verify both properties work together
      expect(element.extent).to.equal("-125.0,24.0,-66.0,49.0");
      expect(element.params).to.deep.equal({
        language: "de",
        limit: 10,
      });
    });
  });
  it("should support external map rendering", () => {
    cy.mount(html`
      <eox-geosearch
        label="Search"
        endpoint="https://opencagedata.com/api-endpoint"
        external-map-rendering="true"
      ></eox-geosearch>
      <eox-map
        width="600px"
        height="400px"
        .layers=${[
          { type: "Tile", properties: { id: "osm" }, source: { type: "OSM" } },
        ]}
        .zoom=${1}
      ></eox-map>
    `).as("eox-geosearch");

    cy.get("eox-geosearch").click();
    cy.get("eox-geosearch")
      .shadow()
      .within(() => {
        cy.get("menu input").type("Italy");
        cy.get('menu li[data-ui="#search"]').eq(1).click();
      });

    cy.get("eox-map").then(($el) => {
      const zoom = $el[0].map.getView().getZoom();
      expect(zoom).to.equal(1);
    });
  });
});
