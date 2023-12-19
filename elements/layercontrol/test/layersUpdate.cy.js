import "../src/main";
import "./_mockMap";
import {
  addExternalLayers,
  addLayerFromOptional,
  checkLayerIsPushedToRoot,
  checkLayerPushedToGroup,
  checkLayerRemovedFromGroup,
  checkLayerRemovedFromRoot,
  checkLayerSizeAfterMultipleCalls,
  checkLayerZoomState,
} from "./cases/layer-update";

describe("LayerControl", () => {
  // Before each test case, set up the environment
  beforeEach(() => {
    // Extract test case titles to determine specific test conditions
    const showLayerZoomState = Cypress.mocha
      .getRunner()
      .suite.ctx.currentTest.title.includes("showLayerZoomState");

    const addExternalLayersTest = Cypress.mocha
      .getRunner()
      .suite.ctx.currentTest.title.includes("addExternalLayers");

    // Mount the mock map and the LayerControl component
    cy.mount("<mock-map></mock-map>").as("mock-map");
    cy.mount(`<eox-layercontrol for="mock-map"></eox-layercontrol>`, {
      properties: {
        showLayerZoomState,
        addExternalLayers: addExternalLayersTest,
      },
    }).as("eox-layercontrol");
  });

  // Test case: Check if the correct number of layers is displayed after multiple setMap() calls
  it("displays the correct amount of layers after multiple calls of setMap()", () =>
    checkLayerSizeAfterMultipleCalls());

  // Test case: Check if a layer update occurs when pushed to the root collection
  it("updates if a layer is pushed to the root collection", () =>
    checkLayerIsPushedToRoot());

  // Test case: Check if a layer update occurs when pushed to a group
  it("updates if a layer is pushed to a group", () =>
    checkLayerPushedToGroup());

  // Test case: Check if a layer update occurs when removed from the root collection
  it("updates if a layer is removed from the root collection", () =>
    checkLayerRemovedFromRoot());

  // Test case: Check if a layer update occurs when removed from a group
  it("updates if a layer is removed from a group", () =>
    checkLayerRemovedFromGroup());

  // Test case: Check if a layer is correctly added to a group when originally optional
  it("adds a layer to a correct group when originally optional", () =>
    addLayerFromOptional());

  // Test case: Check layer state based on min and max zoom levels when showLayerZoomState is enabled
  it("Zoom and check layer state based on min and max zoom - showLayerZoomState", () =>
    checkLayerZoomState());

  // Test case: Add new external layers (WMS/XYZ and JSON)
  it("Add new external WMS/XYZ and JSON Layer - addExternalLayers", () =>
    addExternalLayers());
});
