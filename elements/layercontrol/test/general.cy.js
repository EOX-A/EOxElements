// Importing test cases and necessary modules
import "../src/main"; // Importing main module
import "./_mockMap";
import {
  checkLayerSize,
  checkPreOpenLayerTools,
  checkPreOpenSection,
  disableDrag,
  hideGroups,
  hideLayers,
  renderOptionalLayer,
  showCorrectLayerTitle,
} from "./cases/general";

describe("LayerControl", () => {
  // Set up before each test
  beforeEach(() => {
    // Mounting mock map and layer control components for testing
    cy.mount("<mock-map></mock-map>").as("mock-map");
    cy.mount(`<eox-layercontrol for="mock-map"></eox-layercontrol>`).as(
      "eox-layercontrol"
    );
  });

  // Test to verify if the layer control is successfully loaded
  it("loads the layer control", () => cy.get("eox-layercontrol").shadow());

  // Test to ensure that the correct number of layers is displayed
  it("displays the correct amount of layers", () => checkLayerSize());

  // Test to validate the hiding of groups
  it("hides groups correctly", () => hideGroups());

  // Test to validate the hiding of layers
  it("hides layers correctly", () => hideLayers());

  // Test to verify the rendering of optional layer selection
  it("renders the optional layer selection", () => renderOptionalLayer());

  // Test to confirm the disabling of drag functionality for a disabled layer
  it("disables the drag handle of the disabled layer", () => disableDrag());

  // Test to ensure the display of correct layer titles
  it("shows the correct layer titles", () => showCorrectLayerTitle());

  // Test to check if a section is pre-opened when the layerControlExpand property is present
  it("pre-opens a section if layerControlExpand is present", () =>
    checkPreOpenSection());

  // Test to verify pre-opening of the layer tools section if layerControlToolsExpand is present
  it("pre-opens layer tools section if layerControlToolsExpand is present", () =>
    checkPreOpenLayerTools());
});
