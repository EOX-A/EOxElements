import "../src/main";
import {
  addSelectInteractionVector,
  addSelectInteractionVectorTile,
  addSelectInteractionToExistingLayer,
  highlightByIdVectorLayer,
  highlightByIdVectorTileLayer,
  removeSelectInteractionLayer,
  removeSelectInteraction,
} from "./cases/select/index.js";

const vectorTileInteraction = [
  {
    type: "select",
    options: {
      id: "selectInteraction",
      condition: "click",
      layer: {
        type: "VectorTile",
        properties: {
          id: "selectLayer",
        },
        source: {
          type: "VectorTile",
        },
        style: {
          "stroke-color": "chartreuse",
          "stroke-width": 5,
        },
      },
    },
  },
];

/**
 * Test suite for the EOX Map to test select interaction
 */
describe("select interaction on click", () => {
  /**
   * Test case to adds a select interaction to VectorTile layer
   */
  it("adds a select interaction to VectorTile layer", () =>
    addSelectInteractionVectorTile(vectorTileInteraction));

  /**
   * Test case to adds a select interaction to Vector layer
   */
  it("adds a select interaction to Vector layer", () =>
    addSelectInteractionVector());

  /**
   * Test case to add a selection to a layer that was initially created without a selection
   */
  it("adds a select interaction to an existing layer (without interaction)", () =>
    addSelectInteractionToExistingLayer());

  /**
   * Test case to highlight by ID (Vector Layer)
   */
  it("programmatically highlight by IDs (VectorLayer)", () =>
    highlightByIdVectorLayer());

  /**
   * Test case to highlight by ID (Vector Tile Layer)
   */
  it("programmatically highlight by IDs (VectorTileLayer)", () =>
    highlightByIdVectorTileLayer(vectorTileInteraction));

  /**
   * Test case to remove interaction by removing the layer
   */
  it("remove interaction with the layer", () => removeSelectInteractionLayer());

  /**
   * Test case to remove interaction
   */
  it("remove interaction", () => removeSelectInteraction());
});
