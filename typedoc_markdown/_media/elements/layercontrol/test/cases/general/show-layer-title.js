const showCorrectLayerTitle = () => {
  // Set up the layers in the mock map
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0]; // Accessing the mock map element

    // Setting titles for two layers
    mockMap.setLayers([
      { properties: { title: "bar" } },
      { properties: { title: "foo" } },
    ]);
  });

  // Verify the displayed titles in the LayerControl
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      // Check for the presence of titles within layers
      cy.get(".layer").find(".layertitle").contains("foo");
      cy.get(".layer").find(".layertitle").contains("bar");
    });
};

export default showCorrectLayerTitle;
