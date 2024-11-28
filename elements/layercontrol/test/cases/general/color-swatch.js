// Check if the color swatch appears when a `color` property is present
const colorSwatch = () => {
  // Set up the layers in the mock map
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0]; // Accessing the mock map element

    // Setting layers: one visible and another with layerControlDisable: true
    mockMap.setLayers([
      { visible: true, color: "green" },
      { properties: { layerControlDisable: true } },
    ]);
  });

  // Verify the effect on the LayerControl
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      cy.get(".color-swatch").should("exist");
    });
};

export default colorSwatch;
