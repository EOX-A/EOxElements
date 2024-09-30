import "../src/main";
import {
  addNewLayersNestedGroup,
  checkLayerInsideReactive,
  loadLayersInGroup,
  reactivelyAddsLayerToGroup,
  reactivelyRemovesLayerFromGroup,
  realisticGroupLayerReactivity,
} from "./cases/group-layer";

const osmJson = {
  type: "Tile",
  properties: {
    id: "osm",
  },
  source: {
    type: "OSM",
  },
};

const layersJson = [
  {
    type: "Group",
    properties: {
      id: "group",
    },
    layers: [
      {
        type: "Vector",
        properties: {
          id: "regions",
        },
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
        },
      },
      {
        type: "Group",
        properties: {
          id: "groupLayerInsideGroup",
        },
        layers: [
          {
            type: "Tile",
            properties: {
              id: "layerInsideGroupInsideGroup",
            },
            source: {
              type: "OSM",
            },
          },
        ],
      },
    ],
  },
];

/**
 * General test suite for the EOX Map Group Layer
 */
describe("layers", () => {
  /**
   * Test case to load vector layers in a group
   */
  it("loads a Vector Layer in a group", () => loadLayersInGroup(layersJson));

  /**
   * Test case to reactively adds layers to group
   */
  it("reactively adds layer to group", () =>
    reactivelyAddsLayerToGroup(layersJson, osmJson));

  /**
   * Test case to reactively removes layers from group
   */
  it("reactively removes layer from group", () =>
    reactivelyRemovesLayerFromGroup(layersJson));

  /**
   * Test case to check layer inside the group is reactive
   */
  it("layer inside group is reactive", () =>
    checkLayerInsideReactive(layersJson));

  /**
   * Test case to add new layers inside nested group reactively
   */
  it("can reactively add new layers to nested groups", () =>
    addNewLayersNestedGroup());

  /**
   * Test case to add new layers inside nested group reactively
   */
  it("realistic groupLayer reactivity", () => realisticGroupLayerReactivity());
});
