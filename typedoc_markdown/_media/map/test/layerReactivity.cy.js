import "../src/main";
import {
  addAnotherLayer,
  addInteractionToExistingLayer,
  addLayerBySettingAsProperty,
  removeLayerBySettingAsProperty,
} from "./cases/layer-reactivity/index.js";

const OsmJson = {
  type: "Tile",
  properties: {
    id: "osm",
  },
  source: {
    type: "OSM",
  },
};

const OsmJson2 = {
  type: "Tile",
  properties: {
    id: "osm2",
  },
  source: {
    type: "OSM",
  },
};

/**
 * Test suite for the EOX Map to test layer reactivity
 */
describe("Map", () => {
  /**
   * Test case to add layer by setting it as a property
   */
  it("add layer by setting it as property", () =>
    addLayerBySettingAsProperty(OsmJson));

  /**
   * Test case to add another layer by setting it as a property
   */
  it("add another layer", () => addAnotherLayer(OsmJson, OsmJson2));

  /**
   * Test case to remove layer by setting it as a property
   */
  it("remove a layer", () => removeLayerBySettingAsProperty(OsmJson, OsmJson2));

  /**
   * Test case to add new interaction to existing layer
   */
  it("add an interaction to an existing layer", () =>
    addInteractionToExistingLayer());
});
