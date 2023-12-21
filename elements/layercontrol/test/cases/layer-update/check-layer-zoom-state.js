const checkLayerZoomState = () => {
  // Set layers with defined minZoom and maxZoom
  cy.get("mock-map").then(($el) => {
    $el[0].setLayers([
      { properties: { id: "foo" }, minZoom: 2 }, // Layer 'foo' visible from zoom level 2
      { properties: { id: "bar" }, maxZoom: 9 }, // Layer 'bar' visible till zoom level 9
    ]);
  });

  // Utility functions to check the class presence based on zoom level
  const checkLayerClass = (id, have) => {
    const haveCheck = !have ? "not." : "";
    cy.get(`[data-layer=${id}] .layer`).should(
      `${haveCheck}have.class`,
      "zoom-state-invisible"
    );
  };

  const changeZoom = (zoom) => {
    // Update the map's zoom level and trigger the change event
    cy.get("mock-map").then(($el) => {
      $el[0].setZoom(zoom);
      $el[0].map.getEvents()["change:resolution"].map((func) => func());
    });
  };

  // Case 1: Default load with zoom level 1
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      checkLayerClass("foo", true); // Layer 'foo' should be visible at zoom level 1
      checkLayerClass("bar"); // Layer 'bar' should be visible at zoom level 1
    });

  // Case 2: Change zoom level to 3
  changeZoom(3);
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      checkLayerClass("foo"); // Layer 'foo' should be invisible at zoom level 3
      checkLayerClass("bar"); // Layer 'bar' should be visible at zoom level 3
    });

  // Case 3: Change zoom level to 10
  changeZoom(10);
  cy.get("eox-layercontrol")
    .shadow()
    .within(() => {
      checkLayerClass("foo"); // Layer 'foo' should be visible at zoom level 10
      checkLayerClass("bar", true); // Layer 'bar' should be invisible at zoom level 10
    });
};

export default checkLayerZoomState;
