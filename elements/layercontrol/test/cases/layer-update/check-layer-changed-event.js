const checkLayerChangedEvent = () => {
  let mockLayer;

  // Set up the mock map with an initial layer
  cy.get("mock-map").and(($el) => {
    const mockMap = $el[0];
    mockMap.setLayers([{ properties: { title: "foo" } }]);
    mockLayer = mockMap.map.getLayers().getArray()[0];
  });

  // Set up event listener
  cy.get("eox-layercontrol").and(($el) => {
    $el[0].addEventListener("layerchange", (evt) => {
      if (evt.detail) {
        // Verify if the `layerchange` event triggers with layer as `detail`
        expect(evt.detail).to.eq(mockLayer);
      }
    });
  });

  // Change visibility of the layer by clicking the checkbox
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      cy.get(".layer").find("input").click();
    });
};

export default checkLayerChangedEvent;
