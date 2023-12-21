// Function to simulate rendering an optional layer within the LayerControl
const renderOptionalLayer = () => {
  // Set up the layers in the mock map
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0]; // Accessing the mock map element

    // Setting layers: one visible and another marked with layerControlOptional: true
    mockMap.setLayers([
      { visible: true },
      { properties: { layerControlOptional: true } },
    ]);
  });

  // Verify the effect on the LayerControl
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      // Checking for the existence of the optional layers dropdown
      cy.get("[data-cy='optionalLayers']").should("exist");

      // Verifying the presence of a selectable option in the dropdown
      cy.get("[data-cy='optionalLayers']")
        .find("option:not([disabled])")
        .should("have.length", 1);

      // Checking for the existence of a button related to the optional layers
      cy.get("[data-cy='optionalLayers']").siblings("button").should("exist");
    });
};

export default renderOptionalLayer;
