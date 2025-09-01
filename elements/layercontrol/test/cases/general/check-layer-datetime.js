import "@eox/timecontrol";
// Cypress test to check that changing the slider emits datetime:updated with correct values
const checkLayerDatetime = () => {
  const controlValues = ["2024-01-01", "2024-02-01", "2024-03-01"];
  // Prepare a mock layer with layerDatetime config
  const mockLayer = {
    properties: {
      id: "datetime-test-1",
      title: "Datetime test 1",
      layerDatetime: {
        slider: true,
        controlValues,
        currentStep: "2024-01-01",
        displayFormat: "yyyy-MM-dd",
      },
    },
  };

  // Set up the mock map with the layer
  cy.get("mock-map").then(($el) => {
    const mockMap = $el[0];
    mockMap.setLayers([mockLayer]);
  });

  // Listen for the custom event on the eox-layercontrol element
  cy.get("eox-layercontrol").then(($el) => {
    const el = $el[0];
    // Attach a listener for the event
    el.addEventListener("datetime:updated", (evt) => {
      window.__datetimeEvent = evt;
    });
  });

  // Interact with the slider in the shadow DOM
  cy.get("eox-layercontrol")
    .shadow()
    .find("eox-layercontrol-layer-tools")
    .shadow()
    .find("eox-layercontrol-layer-datetime")
    .find("eox-timecontrol")
    .shadow()
    .find("tc-range-slider")
    .as("slider");

  // Change the slider value (step to index 2, which is "2024-03-01")
  cy.get("@slider").invoke("attr", "value", controlValues[2]);
  // Wait for the custom event to be captured on the window object
  cy.window().its("__datetimeEvent").should("exist");

  cy.window().then((win) => {
    const evt = win.__datetimeEvent.detail;
    expect(evt).to.exist;
    expect(evt.datetime).to.equal(controlValues[2]);
    expect(evt.layer).to.exist;
    expect(evt.layer.get("id")).to.equal("datetime-test-1");
  });
};

export default checkLayerDatetime;
