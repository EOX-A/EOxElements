const DUMMY_API_RESPONSE = [
  "GET",
  "https://ows.mundialis.de/services/service?SERVICE=WMS&REQUEST=GetCapabilities",
  {
    statusCode: 200,
    headers: { "Content-Type": "application/vnd.ogc.wms_xml" },
    body: `<?xml version="1.0"?> <WMT_MS_Capabilities version="1.1.1"> <Capability> <Layer queryable="1"> <Title>OpenStreetMap WMS</Title> <Layer queryable="1"> <Name>bar</Name> </Layer> </Layer> </Capability> </WMT_MS_Capabilities>`,
  },
];

const DUMMY_JSON = `{ type: "Tile", properties: { id: "baz", title: "baz" }}`;

const addExternalLayers = () => {
  // Set up a mock map with a layer "foo"
  cy.get("mock-map").and(($el) => {
    $el[0].setLayers([{ properties: { id: "foo" } }]);
  });

  let mapTile = "";

  // Intercept API Response So that API don't fail
  cy.intercept(...DUMMY_API_RESPONSE).as("getDummyXml");

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
        cy.get(".add-url").type("https://ows.mundialis.de/services/service", {
          force: true,
        });
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
    })
    .then(() => {
      cy.wait("@getDummyXml")
        .its("response")
        .then(() => {
          // Verify if the added layer is displayed in the layer control list
          cy.get("eox-layercontrol")
            .shadow()
            .find("eox-layercontrol-layer-list")
            .then(($el) => {
              cy.wrap($el).first(() => {
                cy.get("li").should("have.attr", "data-layer", mapTile);
              });
            });
        });
    });

  // Add another layer using a JSON configuration
  cy.get("eox-layercontrol")
    .shadow()
    .find("eox-layercontrol-add-layers")
    .then(($el) => {
      cy.wrap($el).within(() => {
        // Switch to the JSON tab and input the layer configuration
        cy.get(".eox-add-layer-tab li").last().click();
        cy.get("textarea").type(DUMMY_JSON, {
          parseSpecialCharSequences: false,
          force: true,
        });
        cy.get(".json-add-layer").as("jsonbtn").click();
        cy.get("@jsonbtn").should("be.disabled");
      });
    })
    .then(() => {
      // Verify if the second layer is displayed in the layer control list
      cy.get("eox-layercontrol")
        .shadow()
        .find("eox-layercontrol-layer-list")
        .then(($el) => {
          cy.wrap($el).first(() => {
            cy.get("li").should("have.attr", "data-layer", "baz");
          });
        });
    });
};

export default addExternalLayers;
