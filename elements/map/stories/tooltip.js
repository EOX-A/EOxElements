import { html } from "lit";

/**
 * Renders `eox-map` with `Tooltip` hover feature
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const TooltipStory = {
  args: {
    layers: [
      {
        type: "Vector",
        source: {
          type: "Vector",
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: "GeoJSON",
        },
        interactions: [
          {
            type: "select",
            options: {
              id: "selectInteraction",
              condition: "pointermove",
              style: {
                "stroke-color": "red",
                "stroke-width": 3,
              },
            },
          },
        ],
      },
    ],
    center: [15, 48],
    zoom: 4,
  },
  render: /** @param {Object.<string, unknown>} args **/ (args) => html`
    <eox-map
      id="tooltipTest"
      style="width: 100%; height: 300px;"
      .center=${args.center}
      .controls=${args.controls}
      .layers=${args.layers}
      .zoom=${args.zoom}
    >
      <eox-map-tooltip></eox-map-tooltip>
    </eox-map>
  `,
};

export default TooltipStory;
