// Function to simulate "empty" groups within the LayerControl
const emptyGroup = () => {
  // Set up the layers in the mock map
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0]; // Accessing the mock map element

    // Setting layer groups: one with visible layers and another one with hidden layers
    mockMap.setLayers([
      {
        layers: [
          { properties: { layerControlHide: true } },
          { properties: { layerControlHide: true } },
        ],
      },
      {
        layers: [
          { properties: { layerControlHide: false } },
          { properties: { layerControlHide: false } },
        ],
      },
    ]);
  });

  // Verify the effect on the LayerControl
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      cy.get("summary .arrow-container").eq(0).should("exist");
      cy.get("summary .arrow-container").eq(1).should("not.exist");
    });
};

export default emptyGroup;
