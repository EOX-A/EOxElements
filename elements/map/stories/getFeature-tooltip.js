import { html } from "lit";

/**
 * Renders `eox-map` with `Tooltip` on click over a feature
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const GetFeatureInfoTooltipStory = {
  args: {
    layers: [
      {
        type: "Tile",
        properties: {
          title: "Terrain Light",
          id: "terrain-light",
        },
        source: {
          type: "XYZ",
          url: "//tiles.maps.eox.at/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg",
        },
      },
      {
        type: "Tile",
        properties: {
          id: "wmsLayer",
        },
        source: {
          type: "TileWMS",
          url: "https://ahocevar.com/geoserver/wms",
          params: { LAYERS: "topp:states", TILED: true },
          ratio: 1,
          serverType: "geoserver",
        },
        interactions: [
          {
            type: "select",
            options: {
              id: "selectInteraction",
              condition: "click",
            },
          },
        ],
      },
    ],
    center: [-10997148, 4569099],
    zoom: 4,
    style: "width: 100%; height: 300px;",
    storySlotContent: `<eox-map-tooltip></eox-map-tooltip>`,
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      .center=${args.center}
      .controls=${args.controls}
      .layers=${args.layers}
      .zoom=${args.zoom}
      style=${args.style}
    >
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>
  `,
};

export default GetFeatureInfoTooltipStory;
