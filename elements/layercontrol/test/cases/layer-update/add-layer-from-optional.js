const addLayerFromOptional = () => {
  // Setting up the mock map with layers and optional layers
  cy.get("mock-map").and(($el) => {
    $el[0].setLayers([
      {
        properties: {
          title: "group1",
          layerControlExpand: true,
        },
        layers: [{ properties: { title: "title1" } }],
      },
      {
        properties: {
          title: "group2",
          layerControlExpand: true,
        },
        layers: [
          { properties: { title: "foo" } },
          {
            properties: {
              id: "title2",
              title: "title2",
              layerControlOptional: true,
            },
            visible: false,
          },
        ],
      },
    ]);
  });

  // Selecting and adding the optional layer
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      cy.get("[data-cy='optionalLayers']").select("title2"); // Selecting the optional layer
      cy.get("[data-cy='optionalLayers']").siblings("button").click(); // Clicking the add button
    });

  // Verifying if the added optional layer is displayed in the layer control
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      cy.get(".layer")
        .find(".title")
        .contains("title2")
        .should("have.length", 1); // Checking if the added optional layer's title is displayed
    });
};

export default addLayerFromOptional;
