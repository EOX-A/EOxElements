import { html } from "lit";

/**
 * The rendering of feature properties inside the tooltip can be transformed
 *
 * @returns {Object} The story configuration with arguments for the component.
 */
const TooltipWithPropertyTransformStory = {
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
      <eox-map-tooltip
        .propertyTransform=${
          /**
           * @param {{ key: string; value: unknown }} param
           * @return {{ key: string; value: unknown } | undefined}
           * **/
          (param) => {
            if (param.key.includes("COLOR")) {
              return { key: param.key.toLowerCase(), value: param.value };
            }
            return undefined;
          }
        }
      ></eox-map-tooltip>
    </eox-map>
  `,
};

export default TooltipWithPropertyTransformStory;
