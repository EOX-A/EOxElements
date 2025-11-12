import { html } from "lit";

/**
 * Sync the views of two maps using the `sync` attribute (e.g. `sync="eox-map#a"`).
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const MapSyncStory = {
  args: {
    id: "a",
    layers: [
      {
        type: "Tile",
        properties: {
          id: "osm",
          title: "Background",
        },
        source: { type: "OSM" },
      },
    ],
    storyAdditionalComponents: {
      "eox-map": {
        id: "b",
        sync: "#a",
        layers: [
          {
            type: "Tile",
            properties: {
              id: "osm",
              title: "Background",
            },
            source: { type: "OSM" },
          },
        ],
      },
    },
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <style>
      eox-map {
        width: 50%;
        height: 300px;
      }
      .container {
        display: flex;
      }
    </style>
    <div class="container">
      <eox-map id=${args.id} .layers=${args.layers}></eox-map>
      <eox-map
        id=${args.storyAdditionalComponents["eox-map"].id}
        sync=${args.storyAdditionalComponents["eox-map"].sync}
        .layers=${args.storyAdditionalComponents["eox-map"].layers}
      ></eox-map>
    </div>
  `,
};

export default MapSyncStory;
