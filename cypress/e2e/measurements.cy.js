import { mount } from "cypress-lit";

import "../../elements/map/dist/eox-map";

Cypress.Commands.add('mount', (component, options = {}) => {
  return mount(component, options);
});

describe("Distance Measurements", () => {
    // Setting up the environment before each test
    beforeEach(() => {
      cy.mount("<eox-map center=\"[15,48]\" layers=\"[{\"type\":\"Tile\",\"source\":{\"type\":\"OSM\"}}]\" zoom=\"7\" style=\"width: 100%; height: 300px;\"></eox-map>").as("eox-map");
  
      //cy.mount("<mock-map></mock-map>").as("mock-map");
  
      cy.mount(
        `<eox-drawtools show-editor import-features measure type="LineString" for="eox-map"></eox-drawtools>`,
      ).as("eox-drawtools");
    });
  
    it("renders the measurement tooltip correctly", () => {
      
    });
  });

/*
const measureTooltipTest = () => {
  // Start drawing mode so that we get the measure tooltip later
  cy.get(drawTools)
    .shadow()
    .within(() => {
      cy.get(controller).within(() => {
        cy.get(drawBtn).click();
      });
    });

  // Click into the center of the map, move and click again to create a line.
  cy.get('eox-map').click(15, 40);
  cy.get('eox-map').click("center");

  cy.get("eox-map")
    .shadow()
    .within(() => {
      cy.get(".ol-tooltip-measure").should("exist");
    });
};
*/