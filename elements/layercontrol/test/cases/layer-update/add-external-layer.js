const addExternalLayers = () => {
  // Set up a mock map with a layer "foo"
  cy.get("mock-map").and(($el) => {
    $el[0].setLayers([{ properties: { id: "foo" } }]);
  });

  let mapTile = "";

  // Add a new layer via the layer control UI
  cy.get("eox-layercontrol")
    .shadow()
    .find("eox-layercontrol-add-layers")
    .then(($el) => {
      cy.wrap($el).within(() => {
        // Open the add layer dialog
        cy.get(".add-icon").click();
        cy.get(".eox-add").should("have.class", "open");

        // Input the URL to fetch layers and select the first layer in the list
        cy.get(".add-url").type("https://ows.mundialis.de/services/service");
        cy.get(".search-icon").as("apibtn").click();
        cy.get("@apibtn").should("not.be.disabled");

        // Select and capture the name of the added layer
        cy.get(".add-layer-icon").first().click();
        cy.get(".search-list")
          .first()
          .invoke("text")
          .then((text) => {
            mapTile = text.trim();
          });
      });
    });

  // Verify if the added layer is displayed in the layer control list
  cy.get("eox-layercontrol")
    .shadow()
    .find("eox-layercontrol-layer-list")
    .then(($el) => {
      cy.wrap($el).find("li").should("have.attr", "data-layer", mapTile);
    });

  // Add another layer using a JSON configuration
  cy.get("eox-layercontrol")
    .shadow()
    .find("eox-layercontrol-add-layers")
    .then(($el) => {
      cy.wrap($el).within(() => {
        // Switch to the JSON tab and input the layer configuration
        cy.get(".eox-add-layer-tab li").last().click();
        cy.get("textarea").type(
          `{ type: "Tile", properties: { id: "WIND", title: "WIND", }, source: { type: "TileWMS", url: "//services.sentinel-hub.com/ogc/wms/0635c213-17a1-48ee-aef7-9d1731695a54", params: { LAYERS: "AWS_VIS_WIND_V_10M", }, }, maxZoom: 9, }`,
          { parseSpecialCharSequences: false }
        );
        cy.get(".json-add-layer").click();
      });
    });

  // Verify if the second layer is displayed in the layer control list
  cy.get("eox-layercontrol")
    .shadow()
    .find("eox-layercontrol-layer-list")
    .then(($el) => {
      cy.wrap($el).find("li").should("have.attr", "data-layer", "WIND");
    });
};

export default addExternalLayers;
